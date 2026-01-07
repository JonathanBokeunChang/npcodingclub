'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#10162f]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10162f] via-[#1a1f4e] to-[#10162f]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-10"
            >
              <MapPin className="w-4 h-4 text-[#29cc57]" />
              New Providence Memorial Library
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-8">
              New Providence
              <br />
              <span className="text-gradient">Coding Club</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Free coding classes for middle and high school students. Learn web development,
              Python, AI/ML, and competitive programming in a supportive environment.
            </p>

            {/* Schedule Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 max-w-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#29cc57]" />
                <span className="text-white font-semibold text-lg">Weekly Classes</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-3">
                Join us every week for hands-on coding sessions, project work, and learning together.
              </p>
              <div className="inline-flex items-center gap-2 text-[#29cc57] font-medium">
                <span className="w-2 h-2 bg-[#29cc57] rounded-full animate-pulse" />
                New schedule coming soon
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/signup" className="btn-3d btn-3d-green text-base sm:text-lg px-8 py-4">
                Join the Club
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/learn" className="btn-3d btn-3d-white text-base sm:text-lg px-8 py-4">
                Explore Courses
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-10"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">120+</div>
                <div className="text-gray-400 text-sm mt-1">Interactive Lessons</div>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">3</div>
                <div className="text-gray-400 text-sm mt-1">Learning Paths</div>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#29cc57]">100%</div>
                <div className="text-gray-400 text-sm mt-1">Free Forever</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

              {/* Course Cards Stack */}
              <div className="relative space-y-4">
                {/* Web Dev Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Web Development</h3>
                      <p className="text-gray-400 text-sm">HTML, CSS, JavaScript</p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                  </div>
                </motion.div>

                {/* Python/ML Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 ml-8"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AI</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Python & AI/ML</h3>
                      <p className="text-gray-400 text-sm">Data Science, Machine Learning</p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </motion.div>

                {/* USACO Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">C++</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">USACO Prep</h3>
                      <p className="text-gray-400 text-sm">Competitive Programming</p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
