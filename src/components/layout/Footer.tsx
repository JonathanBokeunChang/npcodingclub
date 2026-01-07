import Link from 'next/link';
import { Github, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#10162f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#29cc57] rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#20a547]">
                <span className="text-white font-bold text-lg">NP</span>
              </div>
              <span className="font-bold text-xl text-white">
                Coding Club
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Free coding education for middle and high school students at New Providence Memorial Library.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-[#29cc57]" />
              <span>New Providence, NJ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Courses</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/learn/web-dev" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/learn/python-ml" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/learn/usaco" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  USACO Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-white mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-gray-400 hover:text-[#29cc57] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@npcodingclub.org"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#29cc57] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@npcodingclub.org
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JonathanBokeunChang/NP-Coding-Club-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#29cc57] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} New Providence Coding Club. All rights reserved.</p>
          <p className="mt-2">A student-run organization at New Providence Memorial Library.</p>
        </div>
      </div>
    </footer>
  );
}
