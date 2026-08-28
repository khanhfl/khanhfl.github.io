# Your Personal Website — Setup & Deployment Guide

A plain HTML/CSS/JS site. No build tools, no frameworks, no monthly fee.
Total cost: **$0/year** (or **~$12/year** if you want a custom domain
like `yourname.com` instead of a free `.github.io` address).

---

## 1. Fill in your content (do this first)

Open `index.html` in any text editor (VS Code, or even TextEdit) and
replace every `[bracketed placeholder]` with your real info:

- `[Your Name]`, `[Your Title / Role]`, hero description
- About paragraphs and skills list
- Experience entries (job title, company, dates, bullet points)
- Project cards (name, description, tags, links)
- Contact email and social links (LinkedIn, GitHub, etc.)

Also update the `<title>` and `<meta name="description">` tags near the
top of `index.html` — that's what shows up in Google search results and
when you share the link.

**Resume PDF:** export your resume as `resume.pdf` and drop it in this
same folder (same name, same folder as `index.html`). The "Resume" nav
link and "Download full résumé" link both point to `resume.pdf`.

**Photo (optional):** if you want a headshot, add an image file (e.g.
`photo.jpg`) to this folder and add `<img src="photo.jpg" alt="[Your Name]">`
in the About section of `index.html`.

Open `index.html` directly in your browser (double-click it) any time to
preview your changes before publishing.

---

## 2. Put it on GitHub (free hosting)

1. Create a free account at [github.com](https://github.com) if you
   don't have one.
2. Create a new repository named exactly `yourusername.github.io`
   (replace `yourusername` with your actual GitHub username — this
   exact naming is what makes GitHub Pages work automatically).
3. Upload these files to the repository:
   - Easiest way: on the repo page, click **"Add file" → "Upload files"**,
     drag in `index.html`, `styles.css`, `script.js`, `resume.pdf`, and
     any images, then click **Commit changes**.
   - Or, if you're comfortable with Git/Terminal:
     ```
     cd "path/to/this/folder"
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/yourusername/yourusername.github.io.git
     git push -u origin main
     ```
4. Go to the repo's **Settings → Pages**. Under "Build and deployment,"
   Source should be "Deploy from a branch," branch `main`, folder `/root`.
   Save.
5. Within a minute or two, your site is live at:
   `https://yourusername.github.io`

That's it — free, forever, no card required.

---

## 3. Add a custom domain (optional, ~$10–15/year)

If you want `yourname.com` instead of `yourusername.github.io`:

1. Buy a domain from a registrar — Cloudflare Registrar, Namecheap, or
   Porkbun are all reputable and cheap (avoid registrars that upsell
   heavily, like GoDaddy).
2. In the registrar's DNS settings, add these records pointing at
   GitHub Pages:
   - Four `A` records for `@` pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `yourusername.github.io`
3. Back in your GitHub repo, go to **Settings → Pages → Custom domain**,
   enter your domain, and save. GitHub will create a `CNAME` file in
   your repo automatically and can issue a free HTTPS certificate for
   it (check "Enforce HTTPS" once it's available, usually within an
   hour).

DNS changes can take anywhere from a few minutes to 24 hours to
propagate.

---

## 4. Updating the site later

Whenever you want to change something (new job, new project, updated
resume):

1. Edit the file(s) directly in this folder.
2. If you used the "Upload files" method: go back to the GitHub repo
   and upload the changed file again (it'll overwrite the old one).
3. If you used Git: `git add . && git commit -m "Update" && git push`

Changes usually appear live within a minute.

---

## 5. Notes

- No analytics are included. If you want to know how many people visit,
  add a free, privacy-friendly option later like Cloudflare Web
  Analytics or Plausible — not required to launch.
- The site is fully responsive (phone, tablet, desktop) and uses your
  system's light/dark mode automatically.
- If you'd rather not use GitHub at all, you can drag this whole folder
  onto [app.netlify.com/drop](https://app.netlify.com/drop) instead —
  it deploys instantly and is also free, but GitHub Pages is a better
  long-term home since it doubles as your GitHub portfolio.
