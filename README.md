# merrybnon.github.io

Homepage in the style of HTML5 UP's Dimension, plus the blog *Quiet Conversation*.
GitHub Pages builds it automatically every time you push.

## Where things live

| To change…                         | Edit                                   |
|------------------------------------|----------------------------------------|
| Name, title lines, email, blog name | `_config.yml`                          |
| Photo on the homepage              | `assets/img/avatar.jpg` (square works best) |
| About Me / Research / Contact text | `_panels/1-about.md`, `2-research.md`, `3-contact.md` |
| Research projects                  | `_data/projects.yml`                   |
| Colors                             | top of `assets/css/main.css`           |

**CV:** put the file at `assets/cv.pdf`. The "Curriculum Vitae" link appears on the
homepage automatically; until then there's no link.

**Project pictures:** put the image in `assets/img/`, then set `image:` for that
project in `_data/projects.yml`, e.g. `image: /assets/img/vae-landscape.png`.
A project without an image just shows its text.

**Panel images:** each panel file has a commented-out `image:` line. Uncomment it and
give a path to show a picture at the top of that panel.

## Write a post

Create `_posts/YYYY-MM-DD-some-title.md`:

```markdown
---
title: "Some title"
categories: [notes]                      # one broad bucket: notes, expository, reading…
tags: [heavy tails, Hilbert transform]  # specific topics, as many as you like
---

First paragraph. This is what the blog home shows as the preview.

<!--more-->

The rest of the post.
```

If you leave out `<!--more-->`, the preview is the first paragraph.
Categories, tags, and the archive in the sidebar update by themselves.

### Math

Write all math with `$$ ... $$`. Inside a sentence it renders inline; on its own
line (blank lines around it) it renders as a displayed equation.
Single `$` doesn't work, because Markdown mangles it before the math renderer sees it.
Shortcuts: `\H` → $\mathcal{H}$, `\E`, `\R`, `\d` (edit in `_includes/math.html`).

## Comments

Off until you set up giscus (readers comment with their GitHub account):

1. Repo → Settings → General → Features → tick **Discussions**. Make a discussion
   category named `Comments`, type *Announcement*.
2. Install https://github.com/apps/giscus on this repo.
3. On https://giscus.app enter `merrybnon/merrybnon.github.io`, choose
   *pathname* mapping and the `Comments` category; copy `data-repo-id` and
   `data-category-id`.
4. Paste them under `giscus:` in `_config.yml` and set `enabled: true`.

## Preview on your own computer (optional)

```bash
sudo apt install ruby-full build-essential
gem install bundler && bundle install
bundle exec jekyll serve      # then open http://localhost:4000
```
