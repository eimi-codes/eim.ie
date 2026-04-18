# 🤝 Contributing to eim.ie

Thank you for your interest in contributing to eim.ie! This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)
- [Content Guidelines](#content-guidelines)
- [Accessibility Standards](#accessibility-standards)

---

## 💫 Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

**Be respectful, inclusive, and kind.**

---

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `main`
4. **Make your changes**
5. **Push to your fork** and submit a pull request

---

## 💻 Development Setup

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** (comes with Node.js)
- **Hugo** (for local site generation)
  - **macOS**: `brew install hugo`
  - **Linux**: `sudo apt-get install hugo`
  - **Windows**: `choco install hugo` or download from [gohugo.io](https://gohugo.io/)

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/eim.ie.git
cd eim.ie

# Install Node.js dependencies
npm install

# Install Husky git hooks
npm run prepare

# Start development server
npm run dev
```

The site will be available at `http://localhost:1313`

### Available Scripts

```bash
# Development server with live reload
npm run dev

# Development server including draft posts
npm run dev:draft

# Development server with verbose output
npm run dev:verbose

# Build production site (minified)
npm run build

# Check code formatting
npm run lint

# Auto-format code
npm run format

# Check which files would be formatted
npm run format:check
```

---

## ✏️ Making Changes

### Branch Naming Convention

Use descriptive branch names following this pattern:

```
<type>/<scope>/<description>

Examples:
feature/writing/new-article-about-accessibility
fix/styles/navigation-mobile-issue
docs/update-contributing-guidelines
```

**Types**: `feature`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Style

This project uses **Prettier** for automatic code formatting. Before committing:

```bash
# Auto-format all files
npm run format

# Or let Husky handle it automatically on commit
```

### Git Hooks

This project uses **Husky** for automated checks:

- **pre-commit**: Runs Prettier on staged files
- **commit-msg**: Validates commit message format

---

## 📝 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Format

- **type**: One of `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`, `revert`
- **scope**: Optional area of the codebase (e.g., `writing`, `styles`, `layouts`)
- **subject**: Imperative, lowercase, no period at end
- **body**: Detailed explanation (optional)
- **footer**: References to issues (e.g., `Fixes #123`)

### Examples

```
feat(writing): add new blog post on neurodiversity

docs: update README with setup instructions

fix(styles): correct mobile navigation alignment
Fixes #45

refactor: reorganize component structure

style: format Markdown and TOML files
```

---

## 🔄 Pull Requests

### Before You Submit

1. **Test locally**: Run `npm run dev` and verify changes
2. **Format code**: Run `npm run format`
3. **Check formatting**: Run `npm run lint`
4. **Update documentation** if you made structural changes
5. **Add bilingual content** if creating new pages

### PR Process

1. **Fill out the PR template** completely
2. **Link related issues** (e.g., `Fixes #123`)
3. **Describe your changes** clearly
4. **Screenshot UI changes** if applicable
5. **Wait for review** – maintainer will provide feedback

### PR Review

All PRs are reviewed for:

- ✅ Code quality and style
- ✅ Functionality and testing
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Documentation updates
- ✅ Bilingual content (where applicable)

---

## 📝 Content Guidelines

### Blog Posts

1. **Location**: `content/writing/article-name.md`

2. **Front Matter Template**:

   ```toml
   +++
   title = "Article Title"
   date = 2026-04-18
   summary = "Brief summary for listings (80-160 chars)"
   tags = ["tag1", "tag2"]
   categories = ["category"]
   +++
   ```

3. **Content Standards**:
   - Use clear, accessible language
   - Include headings for structure
   - Keep paragraphs short and readable
   - Use lists for multiple points
   - Link to related resources

4. **Bilingual Content**:
   - Start with Gaeilge (Irish)
   - Use `## Gaeilge` and `## English` headers
   - Keep translations logically equivalent
   - Verify Irish language accuracy

### Gallery Items

1. **Location**: `content/gallery/item-name.md`

2. **Include**:
   - Image metadata and credits
   - Alt text for accessibility
   - Description in GA/EN

### Links & Resources

1. **Location**: `content/links/index.md`

2. **Format**:
   - Categorized by topic
   - Include clear descriptions
   - Verify links are current

---

## ♿ Accessibility Standards

All contributions must maintain **WCAG 2.1 AA compliance**:

### HTML & Markup

- [ ] Use semantic HTML (e.g., `<button>` not `<div>`)
- [ ] Include `alt` text for all images
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Ensure sufficient color contrast (4.5:1 minimum)

### Content

- [ ] Use clear, concise language
- [ ] Define abbreviations on first use
- [ ] Avoid jargon when possible
- [ ] Structure with headings and lists

### Links

- [ ] Link text should be descriptive (not "click here")
- [ ] Open external links in new tabs when appropriate

### Testing

- [ ] Test with keyboard navigation
- [ ] Test with screen readers
- [ ] Verify in multiple browsers
- [ ] Check mobile responsiveness

---

## 🐛 Reporting Bugs

Found a bug? Please create an issue:

1. Use the **Bug Report** template
2. Include detailed reproduction steps
3. Specify OS, browser, and version
4. Provide screenshots if applicable

---

## 💬 Questions or Suggestions?

- **Open an issue** with the **Feature Request** or **Content Request** template
- **Contact**: [@eimi@mastodon.ie](https://mastodon.ie/@eimi) or [@eim.ie](https://bsky.app/profile/eim.ie)

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

---

**Thank you for making eim.ie better! 🙏**
