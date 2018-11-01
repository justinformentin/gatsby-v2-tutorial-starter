<p align="center">
  <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://i.imgur.com/mW3HLrn.png"
      height="80"
      alt="gatsby-v2-tutorial-starter"
      title="Gatsby v2 Tutorial Starter"
    />
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://circleci.com/gh/justinformentin/gatsby-v2-tutorial-starter.svg?style=svg"
      alt="CircleCI"
    />
  </a>
  <a href="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter/badges/gpa.svg"
      alt="Maintainability"
    />
  </a>
  <a href="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter/badges/issue_count.svg"
      alt="Issues"
    />
  </a>
  <a href="https://www.codacy.com/app/justinformentin/gatsby-v2-tutorial-starter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=justinformentin/gatsby-v2-tutorial-starter&amp;utm_campaign=Badge_Grade">
    <img
      src="https://api.codacy.com/project/badge/Grade/c910ab2b18a24dde80cfc05b73c908aa"
      alt="Code Quality"
    />
  </a>
  <a href="https://david-dm.org/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://img.shields.io/david/justinformentin/gatsby-v2-tutorial-starter.svg"
      alt="Dependencies"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://www.netlify.com">
    <img
      src="https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg"
      alt="deploys by netlify"
    />
  </a>
</p>

<p align="center">
  <strong>
    View the demo at <a href="https://gatsby-tutorial-starter.netlify.com">gatsby-tutorial-starter.netlify.com</a>.
  </strong>
</p>

<p align="center">
  <strong>
    Read the full step by step guide: <a href="https://justinformentin.com/build-gatsby-site-full-tutorial">Guide to Build a Gatsby Site with Perfect Pagespeed Scores</a></a>.
  </strong>
</p>

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

# Lighthouse Audit

<p align="center">
  <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://i.imgur.com/YOVC76X.png"
      alt="Google Lighthouse Audit"
      title="Google Lighthouse Audit"
    />
  </a>
</p>

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinformentin/gatsby-v2-tutorial-starter)

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter

OR

# Cloning
git clone my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter.git
cd my-site

THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```