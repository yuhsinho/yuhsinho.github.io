## 🚀 Deployment Notes (GitHub Pages via Actions)

This site is built and deployed automatically using **GitHub Pages (Actions)**.

- Source code lives on the `master` branch.
- On every push to `master`, GitHub Actions:
  1. Installs dependencies and builds the Angular app.
  2. Uploads the build output as a Pages artifact.
  3. Deploys it directly to the special **`github-pages` environment** (no manual `gh-pages` branch!).
- The base URL is `/` because this is a **personal site** (`yuhsinho.github.io`).
- Deep link refreshes work because the workflow copies `index.html` → `404.html`.

**To update the site:**

```bash
git add .
git commit -m "Update site"
git push origin master
```
