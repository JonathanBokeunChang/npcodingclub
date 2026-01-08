'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Trophy, Star } from 'lucide-react';
import { getCourse } from '@/data/courses';
import { LevelMap } from '@/components/learn/LevelMap';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const course = getCourse(courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Course Not Found
          </h1>
          <Link href="/learn" className="text-blue-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // For demo purposes - in real app this would come from user data
  const completedLessons: string[] = [];
  const currentLesson = course.modules[0].lessons[0].id;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${course.gradientFrom}15, ${course.gradientTo}15)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back link */}
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Courses
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                    {course.name}
                  </h1>
                  <Badge
                    variant={course.difficulty === 'beginner' ? 'success' : 'warning'}
                  >
                    {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                  </Badge>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-2 mx-auto">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {course.totalLessons}
                  </div>
                  <div className="text-sm text-slate-500">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-2 mx-auto">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {course.estimatedHours}h
                  </div>
                  <div className="text-sm text-slate-500">Est. Time</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-2 mx-auto">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-500">
                    {course.totalXP.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">Total XP</div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-8 max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Course Progress
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {completedLessons.length} / {course.totalLessons} lessons
                </span>
              </div>
              <ProgressBar
                value={completedLessons.length}
                max={course.totalLessons}
                color="blue"
                size="md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Level Map */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LevelMap
              course={course}
              completedLessons={completedLessons}
              currentLesson={currentLesson}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
