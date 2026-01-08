'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Trophy, Clock, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { courses } from '@/data/courses';

const courseIcons = {
  'web-dev': Code,
  'python-ml': Brain,
  'usaco': Trophy,
};

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Pick a course and start your journey. Each path is designed to take you
              from beginner to confident coder through interactive lessons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = courseIcons[course.id as keyof typeof courseIcons];

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/learn/${course.id}`}>
                    <Card hover className="h-full group">
                      {/* Course Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{
                            background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`,
                          }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {course.name}
                          </h2>
                          <Badge
                            variant={course.difficulty === 'beginner' ? 'success' : 'warning'}
                            size="sm"
                            className="mt-1"
                          >
                            {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {course.description}
                      </p>

                      {/* Modules */}
                      <div className="mb-6">
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {course.modules.length} Modules
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {course.modules.slice(0, 3).map((module) => (
                            <span
                              key={module.id}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs"
                            >
                              {module.name}
                            </span>
                          ))}
                          {course.modules.length > 3 && (
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 rounded-full text-xs">
                              +{course.modules.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Progress (placeholder for now) */}
                      <div className="mb-6">
                        <ProgressBar value={0} showLabel color="blue" />
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" />
                            {course.totalLessons} lessons
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {course.estimatedHours}h
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-yellow-500 font-semibold">
                          {course.totalXP.toLocaleString()} XP
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                          Start Learning
                        </span>
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
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
