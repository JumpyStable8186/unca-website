# Unca Website

A simple personal website and blog built with Next.js.

## Features

- 🏠 Personal homepage
- 📝 Blog with multiple posts
- 🎨 Modern, clean design with dark mode support
- ⚡ Fast and optimized with Next.js
- 📱 Responsive design

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
└── lib/                   # Utility functions
    └── blog.ts            # Blog post data and functions
```

## Adding Blog Posts

To add a new blog post, edit `lib/blog.ts` and add a new entry to the `blogPosts` array. Each post should have:

- `slug`: URL-friendly identifier
- `title`: Post title
- `date`: Publication date
- `excerpt`: Short description
- `content`: HTML content of the post

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

