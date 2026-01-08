import Link from 'next/link';
import { Code2, Github, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                NP Coding Club
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Empowering the next generation of programmers through gamified,
              project-based learning.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>New Providence, NJ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/web-dev" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/learn/python-ml" className="hover:text-blue-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/learn/usaco" className="hover:text-blue-400 transition-colors">
                  USACO Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400 transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@npcodingclub.org"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@npcodingclub.org
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/npcodingclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400 text-center">
          <p>&copy; {new Date().getFullYear()} NP Coding Club. All rights reserved.</p>
          <p className="mt-1">A student-run nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
}
