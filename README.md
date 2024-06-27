# nico.bio

> Stack: NextJS + TailwindCSS + Contentlayer + MDX + Sequoia color theme

## Overview

This is my personal website, which is a NextJS app that uses Contentlayer to generate pages from MDX files.
There are 2 types of generated content: `Posts` and `Projects`. Here's how they work:

- each Post is a markdown file in `content/posts` which gets rendered into a page at `/posts/<slug>`
- each Project is a markdown file in `content/projects`, where the header metadata is used to figure out
  whether to show a full page at `/projects/<slug>`, or just an external link to the project repository.

If a project has no `link` property in its metadata, then it will be opened like a full blog post.
Otherwise, it will open the specified link in a new tab.

## Features

- MDX content with custom React components. For now, here's the list of components I built:
  - `Callout` - a callout box with an emoji and some content. Useful for highlighting important information.
  - `Bookmark` - a card with an emoji, title and link. The link is parsed to show the hostname URL preview. Useful for embedding external links.
- Content styled using TailwindCSS with the typography plugin for a nice reading experience.
- Reading time estimation for each post via the `useReadingTime` hook.
- Absolute import paths using the `@/` prefix.
- Fonts are loaded via the new `next/font` package.

## Getting started

All you need to get started with a clone of this project is to have `node` and `yarn` installed, and run the following commands:

```
git clone git@github.com:merklefruit/nico.bio.git && cd nico.bio
yarn install
yarn build
yarn dev
```
