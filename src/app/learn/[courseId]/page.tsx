'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Trophy } from 'lucide-react';
import { getCourse } from '@/data/courses';
import { LevelMap } from '@/components/learn/LevelMap';
import { ProgressBar } from '@/components/ui/ProgressBar';

const courseConfig = {
  'web-dev': { color: '#f97316', colorDark: '#ea580c' },
  'python-ml': { color: '#3b82f6', colorDark: '#2563eb' },
  'usaco': { color: '#8b5cf6', colorDark: '#7c3aed' },
};

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const course = getCourse(courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#10162f] mb-4">
            Course Not Found
          </h1>
          <Link href="/learn" className="text-[#29cc57] hover:underline font-medium">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const config = courseConfig[courseId as keyof typeof courseConfig] || { color: '#29cc57', colorDark: '#20a547' };

  // For demo purposes - in real app this would come from user data
  const completedLessons: string[] = [];
  const currentLesson = course.modules[0].lessons[0].id;

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section
        className="py-16 relative overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back link */}
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#10162f] mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Courses
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10162f]">
                    {course.name}
                  </h1>
                  <span
                    className="px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background: `${config.color}15`,
                      color: config.color,
                    }}
                  >
                    {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                  </span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl shadow-sm mb-3 mx-auto"
                    style={{ background: `${config.color}15` }}
                  >
                    <BookOpen className="w-7 h-7" style={{ color: config.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#10162f]">
                    {course.totalLessons}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Lessons</div>
                </div>
                <div className="text-center">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl shadow-sm mb-3 mx-auto"
                    style={{ background: `${config.color}15` }}
                  >
                    <Clock className="w-7 h-7" style={{ color: config.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#10162f]">
                    {course.estimatedHours}h
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Est. Time</div>
                </div>
                <div className="text-center">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl shadow-sm mb-3 mx-auto"
                    style={{ background: `${config.color}15` }}
                  >
                    <Trophy className="w-7 h-7" style={{ color: config.color }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: config.color }}>
                    {course.totalXP.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Total XP</div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-10 max-w-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">
                  Course Progress
                </span>
                <span className="text-sm font-semibold text-[#10162f]">
                  {completedLessons.length} / {course.totalLessons} lessons
                </span>
              </div>
              <ProgressBar
                value={completedLessons.length}
                max={course.totalLessons}
                color="green"
                size="md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Level Map */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
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
