import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Left Section - Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Environmental work shaped by community.
            </h1>
            <h2 className="text-3xl lg:text-4xl font-medium text-purple-600 dark:text-purple-400">
              I work on environmental problems that don't have clean answers.
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 pb-2">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-lg font-medium shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Let's Connect
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border-0 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-lg font-medium shadow-lg shadow-gray-900/20 dark:shadow-gray-100/20 hover:shadow-xl hover:shadow-gray-900/30 dark:hover:shadow-gray-100/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Projects
            </Link>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border-0 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-lg font-medium shadow-lg shadow-gray-900/20 dark:shadow-gray-100/20 hover:shadow-xl hover:shadow-gray-900/30 dark:hover:shadow-gray-100/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Resume
            </Link>
          </div>
          {/* Half-line separator */}
          <div className="w-50 h-px bg-purple-600 dark:bg-purple-400 mt-4"></div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="flex justify-center lg:justify-center lg:pl-12">
          <div className="relative inline-block">
            {/* Fuzzy depth layer */}
            <div
              className="
        absolute inset-0
        translate-x-3 translate-y-4
        bg-black/25
        blur-2xl
        rounded-2xl
      "
              aria-hidden="true"
            ></div>

            {/* Image */}
            <img
              src="/headshot.png"
              alt="Justin Dennis"
              className="relative z-10 w-64 lg:w-72 h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* My Approach Section */}
      <section className="mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My Approach
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Environmental work isn't about optimization. It's about judgment.

              I focus on systems where the trade-offs matter more than the tools, where community context outweighs technical elegance, and where the goal isn't scale for its own sake, but durability over time.
            </p>
          </div>
        </div>
      </section>
      <div className="w-1/2 h-px bg-purple-600 dark:bg-purple-400 mt-8 mx-auto"></div>


      {/* Selected Work Section */}
      <section className="mt-8">
        <div className="max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Selected work
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Curated case studies. Proof through decisions, not volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedWork.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group block border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                                {/* Image Area */}
                                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-t-lg">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </>
                  ) : (
                    <>
                      {/* Subtle vertical stripes pattern - fallback if no image */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
                        }}
                      />
                      {/* Label */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                          PROJECT IMAGE / SCREENSHOT
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-gray-900 dark:text-gray-100 font-medium text-sm flex items-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    → View case study
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="w-1/2 h-px bg-purple-600 dark:bg-purple-400 mt-8 mx-auto"></div>

      {/* How I Work Section */}
      <section className="mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            How I Work
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I start with listening. I prioritize context over credentials. I design for people who will live with the outcomes, not just the metrics.

              I don't chase trends, dashboards, or performative sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pl-10 lg:pl-14 items-center">
              {/* Left Section */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#F2F3F2]">
                  Let's Chat
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  If you're navigating complexity and want a grounded perspective, we should connect.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block px-6 py-3 bg-white text-purple-600 hover:bg-purple-50 font-medium rounded-lg shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/15 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Get in touch
                </Link>
              </div>

              {/* Right Section */}
              <div className="space-y-5 ml-8 lg:ml-12">
                <div>
                  <p className="text-sm text-[#F2F3F2] mb-1.5 font-medium">Email</p>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-gray-900 hover:text-gray-800 transition-colors"
                  >
                    your-email@example.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#F2F3F2] mb-1.5 font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-900 hover:text-gray-800 transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#F2F3F2] mb-1.5 font-medium">Location</p>
                  <p className="text-gray-900">
                    Your City, State
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:your-email@example.com"
                    className="w-10 h-10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    {/* Separator */}
    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>

    {/* Legal Footer */}
    <footer className="bg-[#F2F3F2]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Rooted Connection LLC. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/terms"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
    </>
  );
}

// Selected work data
const selectedWork = [
  {
    title: "Designing stewardship systems for uneven access",
    description: "A long-term infrastructure project centered on durability, not scale.",
    href: "/work/stewardship-systems",
    image: "/project1.png", 
  },
  {
    title: "When technology helps — and when it shouldn't",
    description: "Exploring the cost of over-engineering in environmental systems.",
    href: "/work/technology-help",
    image: "/project2.png",
  },
  {
    title: "Community-based stewardship, designed to last",
    description: "A program design approach that prioritizes context over credentials.",
    href: "/work/stewardship-systems",
    image: "/project3.png", 
  },
  {
    title: "Measuring what matters (and ignoring what doesn't)",
    description: "A reporting framework that reduces performative sustainability.",
    href: "/work/technology-help",
    image: "/project4.png",
  },
];
