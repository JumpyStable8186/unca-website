import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts, ideas, and updates
          </p>
        </div>

        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {post.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

