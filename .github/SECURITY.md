# Security Policy for eim.ie

## Reporting Security Vulnerabilities

If you discover a security vulnerability in eim.ie, please **do not** open a public issue. Instead:

1. **Email**: eimi@eim.ie with details of the vulnerability
2. **Include**: Description, steps to reproduce, and potential impact
3. **Wait**: For confirmation before public disclosure

Please allow 7-14 days for a response and fix before any public announcement.

## Security Best Practices

This project follows security best practices:

- ✅ Static site (no dynamic backend or databases)
- ✅ No user authentication or sensitive data handling
- ✅ Automated dependency updates via Dependabot
- ✅ Regular Hugo framework updates
- ✅ HTTPS-only deployment via GitHub Pages
- ✅ Content Security Policy headers (if applicable)

## Dependencies

Security vulnerabilities in dependencies are tracked through:
- **Dependabot** alerts
- **npm audit** checks in CI/CD pipeline
- Regular updates to Hugo, Node.js packages

## Responsible Disclosure

We appreciate responsible vulnerability reporting. Please follow these guidelines:

- Do not publicly disclose vulnerabilities before a fix is available
- Do not access or modify data beyond what is necessary to demonstrate the vulnerability
- Keep vulnerability details confidential until 30 days after a fix is released

---

**Thank you for helping keep eim.ie secure!**
