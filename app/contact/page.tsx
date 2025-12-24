export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Contact
      </h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          If you're navigating complexity and want a grounded perspective, we should connect.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
            <a
              href="mailto:your-email@example.com"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              your-email@example.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
            <a
              href="tel:+1234567890"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

