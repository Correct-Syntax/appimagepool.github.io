This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Writing A Blog Post

Place a file ending in `.mdx` in the `posts` directory. At the top of the file some metadata is required.

**Example**
```mdx
---
title: 'An Interesting Post Title'
author: 'John Doe'
date: '02/09/2022'
description: 'A Really Amazing Description'
thumbnailUrl: '/interesting_post_thumbnail.jpg'
tags: ['Add', 'Some', 'Tags']
draft: true
---
```

*Note: Tags and the draft settings are not currently implemented*

**Title** The title of the blog post

**Author** The author's name

**Date** The date in DD/MM/YYYY

**Description** A summary of the post

**Thumbnail URL** The path to the thumbnail image from the `public` directory

**Tags** Some words to describe the general type of post (e.g. `Announcement`, `Technical` etc.)

**Draft** Marks if this post is a draft (i.e. whether it should be published yet). Either set to `true` or `false`. Defaults to `false`

