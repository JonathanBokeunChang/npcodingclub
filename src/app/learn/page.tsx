'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Trophy, Clock, BookOpen } from 'lucide-react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { courses } from '@/data/courses';

const courseConfig = {
  'web-dev': {
    icon: Code,
    iconText: '</>',
    color: '#f97316',
    bg: 'from-orange-500 to-red-500',
  },
  'python-ml': {
    icon: Brain,
    iconText: 'AI',
    color: '#3b82f6',
    bg: 'from-blue-500 to-cyan-500',
  },
  'usaco': {
    icon: Trophy,
    iconText: 'C++',
    color: '#8b5cf6',
    bg: 'from-purple-500 to-pink-500',
  },
};

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#10162f] mb-6 leading-tight">
              Choose Your <span className="text-gradient">Learning Path</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Pick a course and start your coding journey. Each path is designed to take you
              from beginner to confident coder through interactive lessons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const config = courseConfig[course.id as keyof typeof courseConfig];

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/learn/${course.id}`}>
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                      {/* Colored top bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ background: config.color }}
                      />

                      {/* Course Header */}
                      <div className="flex items-start gap-5 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <span className="text-white font-bold text-lg">{config.iconText}</span>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-[#10162f] mb-2">
                            {course.name}
                          </h2>
                          <span
                            className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                            style={{
                              background: `${config.color}15`,
                              color: config.color,
                            }}
                          >
                            {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Modules */}
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-500 mb-3">
                          {course.modules.length} Modules
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

                      {/* Progress */}
                      <div className="mb-6">
                        <ProgressBar value={0} showLabel color="blue" />
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-5 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.totalLessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{course.estimatedHours}h</span>
                          </div>
                        </div>
                        <div className="xp-badge">
                          {course.totalXP.toLocaleString()} XP
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center justify-between">
                        <span
                          className="font-semibold group-hover:underline"
                          style={{ color: config.color }}
                        >
                          Start Learning
                        </span>
                        <ArrowRight
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          style={{ color: config.color }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
