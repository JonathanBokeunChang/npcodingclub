'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, Code, Brain, Trophy } from 'lucide-react';
import { courses } from '@/data/courses';

const courseConfig = {
  'web-dev': {
    accent: '#f97316',
    bg: 'from-orange-500 to-red-500',
    icon: Code,
    iconText: '</>'
  },
  'python-ml': {
    accent: '#3b82f6',
    bg: 'from-blue-500 to-cyan-500',
    icon: Brain,
    iconText: 'AI'
  },
  'usaco': {
    accent: '#8b5cf6',
    bg: 'from-purple-500 to-pink-500',
    icon: Trophy,
    iconText: 'C++'
  },
};

export function Courses() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10162f] mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Three carefully crafted curricula designed to take you from
            beginner to confident coder.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const config = courseConfig[course.id as keyof typeof courseConfig];
            const IconComponent = config.icon;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link href={`/learn/${course.id}`} className="block h-full">
                  <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    {/* Colored top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: config.accent }}
                    />

                    {/* Course Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-bold text-lg">{config.iconText}</span>
                      </div>
                      <span
                        className="px-3 py-1.5 rounded-full text-sm font-semibold"
                        style={{
                          background: `${config.accent}15`,
                          color: config.accent,
                        }}
                      >
                        {course.difficulty === 'beginner' ? 'Beginner' : 'Advanced'}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-2xl font-bold text-[#10162f] mb-3">
                      {course.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Modules preview */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-500 mb-3">
                        What you&apos;ll learn:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.modules.slice(0, 3).map((module) => (
                          <span
                            key={module.id}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                          >
                            {module.name}
                          </span>
                        ))}
                        {course.modules.length > 3 && (
                          <span className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-sm">
                            +{course.modules.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.estimatedHours} hours</span>
                      </div>
                    </div>

                    {/* XP and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="xp-badge">
                        {course.totalXP.toLocaleString()} XP
                      </div>
                      <span
                        className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                        style={{ color: config.accent }}
                      >
                        Start Learning
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
