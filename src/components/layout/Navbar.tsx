'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { href: '/learn', label: 'Courses' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#29cc57] rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#20a547] group-hover:-translate-y-0.5 transition-transform">
              <span className="text-white font-bold text-lg">NP</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg ${scrolled ? 'text-[#10162f]' : 'text-white'}`}>
                Coding Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-[#10162f] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <div className={`w-20 h-10 rounded-lg animate-pulse ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />
            ) : user ? (
              <div className="flex items-center gap-4">
                {/* XP Badge */}
                <div className="xp-badge">
                  <Flame className="w-4 h-4" />
                  <span>150 XP</span>
                </div>
                <Link
                  href="/profile"
                  className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-[#10162f] hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-red-500'
                      : 'text-white/80 hover:text-red-300'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-[#10162f]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="btn-3d btn-3d-green text-sm px-6 py-3"
                >
                  Sign Up Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-4 border-gray-100" />
              {user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left py-3 px-4 rounded-lg text-red-500 font-medium"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <div className="space-y-3 pt-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50 font-medium text-center border border-gray-200"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-xl bg-[#29cc57] text-white font-semibold text-center shadow-[0_4px_0_0_#20a547]"
                  >
                    Sign Up Free
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
