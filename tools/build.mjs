import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(rootDir, "src", "pages");
const includesDir = path.join(rootDir, "src", "includes");
const outputDir = path.join(rootDir, "public");

const includeCache = new Map();

async function main() {
  const pages = await findPages(sourceDir);

  for (const sourcePath of pages) {
    const relPath = path.relative(sourceDir, sourcePath);
    const outputPath = path.join(outputDir, relPath);
    const source = await fs.readFile(sourcePath, "utf8");
    const page = parsePage(source, sourcePath);
    const rendered = await renderLayout(page, outputPath);

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, rendered, "utf8");
    console.log(`built ${path.relative(rootDir, outputPath)}`);
  }
}

async function findPages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      pages.push(...await findPages(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".htm")) {
      pages.push(entryPath);
    }
  }

  return pages.sort();
}

function parsePage(source, sourcePath) {
  const { attrs, body } = parseFrontMatter(source);
  const head = matchSection(body, /^([\s\S]*?<\/head>)/i, "document head", sourcePath);
  const sidebarExtra = matchSection(
    body,
    /<!-- sidebar-extra:start -->([\s\S]*?)<!-- sidebar-extra:end -->/,
    "sidebar-extra block",
    sourcePath,
  );
  const content = matchSection(
    body,
    /<!-- content:start -->([\s\S]*?)<!-- content:end -->/,
    "content block",
    sourcePath,
  );

  return {
    head: head.trimEnd(),
    content: trimOuterBlankLines(content),
    sidebarExtra,
    headerExtra: attrs.headerExtra ?? "",
  };
}

function parseFrontMatter(source) {
  if (!source.startsWith("---\n")) {
    return { attrs: {}, body: source };
  }

  const end = source.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error("Front matter starts with --- but is not closed.");
  }

  const attrs = {};
  const frontMatter = source.slice(4, end);
  for (const line of frontMatter.split("\n")) {
    if (!line.trim()) continue;
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      throw new Error(`Invalid front matter line: ${line}`);
    }
    attrs[match[1]] = parseValue(match[2]);
  }

  return { attrs, body: source.slice(end + 5) };
}

function parseValue(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith("\"") && trimmed.endsWith("\"")) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function matchSection(source, pattern, label, sourcePath) {
  const match = source.match(pattern);
  if (!match) {
    throw new Error(`${path.relative(rootDir, sourcePath)} is missing ${label}.`);
  }
  return match[1];
}

function trimOuterBlankLines(value) {
  return value.replace(/^\n/, "").replace(/\n$/, "");
}

async function renderLayout(page, outputPath) {
  const layout = await readInclude("layout");
  const relToRoot = path.relative(path.dirname(outputPath), outputDir);
  const base = relToRoot ? `${relToRoot.split(path.sep).join("/")}/` : "";

  return renderTemplate(layout, {
    ...page,
    base,
  });
}

async function renderTemplate(template, context) {
  const withIncludes = await replaceAsync(
    template,
    /{{>\s*([A-Za-z0-9_-]+)\s*}}/g,
    async (_, name) => renderTemplate(await readInclude(name), context),
  );

  return withIncludes.replace(/{{\s*([A-Za-z0-9_-]+)\s*}}/g, (_, name) => {
    if (!(name in context)) {
      throw new Error(`Unknown template value: ${name}`);
    }
    return context[name];
  });
}

async function readInclude(name) {
  if (!includeCache.has(name)) {
    includeCache.set(
      name,
      await fs.readFile(path.join(includesDir, `${name}.htm`), "utf8"),
    );
  }
  return includeCache.get(name);
}

async function replaceAsync(source, pattern, replacer) {
  const matches = [...source.matchAll(pattern)];
  const replacements = await Promise.all(matches.map((match) => replacer(...match)));
  let rendered = "";
  let lastIndex = 0;

  matches.forEach((match, index) => {
    rendered += source.slice(lastIndex, match.index);
    rendered += replacements[index];
    lastIndex = match.index + match[0].length;
  });

  return rendered + source.slice(lastIndex);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
