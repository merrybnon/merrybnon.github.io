# Personal site + blog (Jekyll, GitHub Pages)

A sidebar homepage (About / Research / Contact) plus a blog with categories,
tags, KaTeX math, RSS, and GitHub-backed comments. No custom plugins, so
GitHub Pages builds it directly.

## 1. Put it online

1. Create a public repo named **`merrybnon.github.io`** on GitHub.
2. Copy these files into it and push:
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:merrybnon/merrybnon.github.io.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
   The site appears at https://merrybnon.github.io within a minute or two.

(Different repo name? Set `baseurl: "/repo-name"` in `_config.yml`.)

## 2. Make it yours

- `_config.yml`: name, tagline, email, CV path.
- `index.md`: the About / Research / Contact text.
- Photo: add `assets/img/me.jpg` and set `avatar: /assets/img/me.jpg`.
- CV: add `assets/cv.pdf`, or delete the `cv:` line to hide the link.

## 3. Write a post

Create `_posts/YYYY-MM-DD-some-title.md`:

```markdown
---
title: "Some title"
categories: [notes]          # broad buckets, like Tao's "expository", "math.CA"
tags: [Hilbert transform, heavy tails]
---

First paragraph (shown on the blog index).

<!--more-->

The rest of the post.
```

Categories and tags need no registration; the sidebar, `/tags/` and
`/categories/` pages update automatically. Set `comments: false` in a post's
front matter to turn comments off for it.

### Math

Write **all** math with `$$ ... $$`:

- `$$ ... $$` inside a sentence renders inline.
- `$$ ... $$` alone in its own paragraph (blank lines around it) renders as display math.

Why not single `$`? Markdown processes the text first, so `$f[x](y)$` turns
into a link, `\!` loses its backslash, and `_` can become italics. The `$$`
form is protected by kramdown. `aligned`, `cases`, etc. all work inside it.

Shorthand macros (edit in `_includes/math.html`): `\H` → $\mathcal{H}$,
`\E`, `\R`, `\d` (upright d for integrals).

## 4. Turn on comments (giscus)

Comments are stored as GitHub Discussions in your repo; readers sign in with GitHub.

1. Repo → Settings → General → Features → tick **Discussions**. Create a
   discussion category called `Comments` (type: *Announcement*, so only
   giscus can open threads).
2. Install the giscus app: https://github.com/apps/giscus → select this repo.
3. Go to https://giscus.app, enter `merrybnon/merrybnon.github.io`, choose
   *Discussion title contains page pathname* and the `Comments` category.
   Copy the `data-repo-id` and `data-category-id` it shows.
4. Paste them into `_config.yml` under `giscus:` and set `enabled: true`.

## Preview locally (optional)

```bash
sudo apt install ruby-full build-essential   # WSL/Ubuntu
gem install bundler && bundle install
bundle exec jekyll serve                      # http://localhost:4000
```
