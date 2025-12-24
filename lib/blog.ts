export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Blog posts data - you can move this to a CMS or markdown files later
const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    date: "May 15, 2024",
    excerpt: "This is my first blog post. I'm excited to share my thoughts and experiences with you.",
    content: `
      <p>Welcome to my personal blog! I'm thrilled to have you here.</p>
      
      <p>This is where I'll be sharing my thoughts, experiences, and insights on various topics that interest me. Whether it's about technology, life experiences, or random musings, you'll find it all here.</p>
      
      <h2>What to Expect</h2>
      <p>In the coming weeks and months, I plan to write about:</p>
      <ul>
        <li>Technology and programming</li>
        <li>Personal projects and experiments</li>
        <li>Life lessons and experiences</li>
        <li>And much more!</li>
      </ul>
      
      <p>Stay tuned for more content, and feel free to reach out if you'd like to connect!</p>
    `,
  },
  {
    slug: "building-this-website",
    title: "Building This Website",
    date: "May 20, 2024",
    excerpt: "A brief overview of how I built this personal website using Next.js and modern web technologies.",
    content: `
      <p>I recently decided to build a personal website to showcase my work and share my thoughts through a blog. After considering various options, I chose Next.js for this project.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several advantages:</p>
      <ul>
        <li><strong>Server-Side Rendering:</strong> Better SEO and performance</li>
        <li><strong>File-based Routing:</strong> Simple and intuitive routing system</li>
        <li><strong>TypeScript Support:</strong> Type safety out of the box</li>
        <li><strong>Great Developer Experience:</strong> Hot reloading and excellent tooling</li>
      </ul>
      
      <h2>Tech Stack</h2>
      <p>For this website, I'm using:</p>
      <ul>
        <li>Next.js 14 with App Router</li>
        <li>TypeScript for type safety</li>
        <li>Tailwind CSS for styling</li>
        <li>Simple, clean design focused on content</li>
      </ul>
      
      <p>The website is designed to be fast, accessible, and easy to maintain. I'll continue to iterate and improve it over time.</p>
    `,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

