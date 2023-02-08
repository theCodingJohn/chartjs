## Deployment via gh-pages

Run these commands

```bash
npm run build
git add dist -f
git commit -m "<message>"
git subtree push --prefix dist origin gh-pages
```
