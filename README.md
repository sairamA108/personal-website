# Personal Website

A simple, modern one-page portfolio site. Plain HTML/CSS/JS — no build step, no frameworks. Works as-is on GitHub Pages or S3.

## Status
Placeholder content — edit `index.html` to replace "Your Name", the bio, project cards, and contact email/socials with your own.

## Files
- `index.html` — page structure and content
- `style.css` — styling, dark/light theme, animations
- `script.js` — theme toggle + scroll-reveal animation

## Run it locally
Just open `index.html` in a browser. No server needed.

## Deploy plan

**Chosen path: GitHub Pages (free hosting, free HTTPS, $0 forever)**

1. Create a GitHub repo (e.g. `personal-website`)
2. Push this folder's contents to the repo's `main` branch
3. In the repo: **Settings → Pages → Source → Deploy from branch → `main` / root**
4. Site goes live at `https://<your-username>.github.io/personal-website/`
5. *(Optional)* Buy a domain (Porkbun / Cloudflare Registrar, ~$2–10/yr) and add it under **Settings → Pages → Custom domain** — GitHub auto-issues a free HTTPS cert for it

**Why not S3:** S3 static hosting has no free-tier "under 50MB" rule — storage is ~$0.023/GB/month, HTTPS requires an extra CloudFront distribution, and a Route 53 hosted zone (if used) is $0.50/month. GitHub Pages avoids all of that since the code already lives in git.

## Git setup (first time)
```powershell
cd "Personal Website"
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/personal-website.git
git push -u origin main
```
