# 🔧 GitHub & Development Setup

This document outlines the development infrastructure, automation, and contribution workflow for eim.ie.

---

## 📦 What's Included

### Node.js & Package Management
- **package.json** – Dependencies and scripts
- **Prettier** – Automatic code formatting
- **Husky** – Git hooks for pre-commit checks
- **lint-staged** – Run formatters on staged files

### GitHub Workflows (`.github/workflows/`)
1. **hugo.yml** – Main build & deploy pipeline
   - Lint & format check
   - Hugo build
   - Accessibility checks
   - GitHub Pages deployment

2. **label-pr.yml** – Auto-label PRs by file changes
   - Automatically tags PRs (writing, design, config, etc.)

3. **sync-content.yml** – Keep branches synchronized
   - Syncs content changes between branches

4. **release.yml** – Release management
   - Creates GitHub releases with changelogs

### Issue & PR Templates (`.github/ISSUE_TEMPLATE/`)
- **bug_report.md** – Report bugs with screenshots
- **feature_request.md** – Suggest new features
- **content_request.md** – Request new content
- **config.yml** – Configure issue templates UI

### Configuration Files
- **.prettierrc** – Code formatting rules
- **.prettierignore** – Files to skip formatting
- **.editorconfig** – Cross-editor formatting
- **.pa11yci.json** – Accessibility testing (optional)
- **CODEOWNERS** – Code ownership assignments

### Meta Files
- **CONTRIBUTING.md** – Contribution guidelines
- **SECURITY.md** – Security policy & vulnerability reporting

---

## 🚀 Quick Start for Contributors

### First Time Setup
```bash
# Clone the repository
git clone https://github.com/eimi-codes/eim.ie.git
cd eim.ie

# Install dependencies
npm install

# Start development server
npm run dev
```

### Making Changes
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Edit files as needed

# Check formatting
npm run lint

# Auto-format
npm run format

# Commit with conventional format
git commit -m "feat(scope): description"

# Push and create PR
git push origin feature/your-feature-name
```

---

## 📝 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

Examples:
✅ feat(writing): add new blog post
✅ fix(styles): correct mobile alignment
✅ docs: update README
✅ refactor: reorganize components
```

**Valid types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`

---

## 🔄 GitHub Workflows

### Automatic on Every Push
- ✅ Format checking with Prettier
- ✅ Hugo build verification
- ✅ Accessibility scanning (when site is live)
- ✅ Deployment to GitHub Pages (on main only)

### Automatic on PR Creation
- ✅ Format checks must pass
- ✅ Build must succeed
- ✅ Auto-labeling by file changes
- ✅ Dependabot updates

### Manual Triggers
- 🔧 Release creation
- 🔧 Content sync

---

## 🤝 Contribution Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/eim.ie.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/my-feature
   ```

3. **Make Changes**
   - Write code/content
   - Keep commits small and focused
   - Follow conventional commit format

4. **Format & Lint**
   ```bash
   npm run format
   npm run lint
   ```

5. **Push & Open PR**
   - Fill out PR template completely
   - Reference related issues
   - Wait for automated checks to pass

6. **Review & Merge**
   - Maintainer reviews changes
   - Automated checks verify quality
   - PR merged to main
   - Site automatically deploys

---

## 🔐 Security

- **Dependabot** checks for vulnerable dependencies
- **npm audit** runs in CI/CD
- Automated updates proposed weekly
- Security vulnerabilities: Email eimi@eim.ie

See [SECURITY.md](.github/SECURITY.md) for details.

---

## 📋 Issue Types

### Bug Report
- Describe the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/browser info

### Feature Request
- What problem does it solve?
- How should it work?
- Accessibility considerations

### Content Request
- What type of content?
- Topic/outline
- Tags and language (GA/EN)

---

## 🎨 Code Style

### Formatting
- **Prettier** auto-formats on commit
- Run `npm run format` anytime
- Supports Markdown, TOML, YAML, JSON, HTML, CSS

### Git Hooks (Husky)
- **pre-commit**: Prettier formatting check
- **commit-msg**: Validates commit message format

### Editor Config
- **EditorConfig** (`.editorconfig`) maintains consistency across editors
- VS Code: Install [EditorConfig extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

---

## 📊 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run dev:draft` | Include draft posts |
| `npm run build` | Production build |
| `npm run lint` | Check formatting |
| `npm run format` | Auto-format files |
| `npm run prepare` | Install Husky hooks |

---

## 🔄 Dependency Management

### Manual Updates
```bash
npm update           # Update packages
npm outdated         # Check for updates
npm audit fix        # Fix vulnerabilities
```

### Automated via Dependabot
- Daily npm package checks
- Monthly GitHub Actions checks
- Auto-creates PRs for updates
- Requires review before merge

---

## 🧪 Testing & Validation

### Local
- `npm run dev` – Visual testing
- `npm run lint` – Format validation
- Browser testing – Chrome, Firefox, Safari, Edge
- Accessibility testing – Keyboard nav, screen readers

### CI/CD
- Prettier format checks
- Hugo build verification
- Pa11y accessibility checks (when live)
- GitHub Pages deployment preview

---

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Prettier Docs](https://prettier.io/docs/)
- [Husky Docs](https://typicode.github.io/husky/)

---

**Questions?** Open an issue or contact [@eimi@mastodon.ie](https://mastodon.ie/@eimi)

