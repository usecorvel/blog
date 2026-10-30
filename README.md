# blog.usecorvel.com

The Corvel blog: posts on scheduling, cancellations, waitlists and front-desk work. Live at
https://blog.usecorvel.com. The marketing site is a separate repo (`usecorvel/web`) served at
https://usecorvel.com.

## Stack

- [Eleventy](https://www.11ty.dev/) 3, Nunjucks layouts, Markdown posts
- Plain CSS in `css/blog.css`
- Static output in `_site/`, hosted on Vercel; `main` is production

## Running it locally

Node 20 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev      # http://localhost:8080, rebuilds on save
npm run build    # writes _site/
```

## Where things live

```
eleventy.config.js     filters (dates, absolute URLs) and the {% figure %} shortcode
_data/site.js          blog title, description, and the main site URL used in nav links
_includes/base.njk     page shell: <head>, header nav, footer
_includes/post.njk     post layout (date, author, demo call-to-action)
index.njk              post list
about.md               /about/
posts/                 one Markdown file per post; posts.json sets layout, tag and URL
sitemap.njk            /sitemap.xml
static/robots.txt      copied to /robots.txt
img/                   logo and post charts (hand-written SVG)
```

## Writing a post

1. Add `posts/<slug>.md`. It's published at `/<slug>/`.
2. Front matter needs `title`, `description` (used for the meta description and the index),
   `date` (YYYY-MM-DD) and `author`.
3. For charts and images use the shortcode so the image gets its dimensions:

   ```njk
   {% figure "/img/my-chart.svg", "Alt text describing the chart", 640, 320, "Optional caption" %}
   ```

4. `npm run dev` and check it on the index page.

Links to the marketing site should use `{{ site.mainSite }}` in templates, or the full
`https://usecorvel.com/...` URL in Markdown.

## Deploying

Vercel builds every push. Pull requests get a preview URL; merging to `main` deploys to
blog.usecorvel.com. No environment variables.

Questions: #web in Slack. Posts go through Priya before they're merged.
