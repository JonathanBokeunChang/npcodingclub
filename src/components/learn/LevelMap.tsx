'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, Check, Star, Play } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { Course, Lesson } from '@/types';

interface LevelMapProps {
  course: Course;
  completedLessons?: string[];
  currentLesson?: string;
}

export function LevelMap({ course, completedLessons = [], currentLesson }: LevelMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Flatten all lessons with their module info
  const allLessons = course.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      moduleName: module.name,
      moduleIndex,
      globalIndex: course.modules
        .slice(0, moduleIndex)
        .reduce((acc, m) => acc + m.lessons.length, 0) + lessonIndex,
    }))
  );

  // Determine status for each lesson
  const getLessonStatus = (lesson: typeof allLessons[0]) => {
    if (completedLessons.includes(lesson.id)) return 'completed';
    if (lesson.id === currentLesson) return 'current';

    // First lesson is always available
    if (lesson.globalIndex === 0) return 'available';

    // Check if previous lesson is completed
    const prevLesson = allLessons[lesson.globalIndex - 1];
    if (prevLesson && completedLessons.includes(prevLesson.id)) return 'available';

    return 'locked';
  };

  // Generate zigzag positions
  const getPosition = (index: number, total: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const isEvenRow = row % 2 === 0;

    // Zigzag pattern: left-to-right on even rows, right-to-left on odd rows
    const actualCol = isEvenRow ? col : 2 - col;

    const x = 20 + actualCol * 30; // 20%, 50%, 80%
    const y = 80 + row * 120; // Start at 80px, 120px between rows

    return { x, y };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-hidden pb-20"
      style={{ minHeight: `${Math.ceil(allLessons.length / 3) * 140 + 150}px` }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 dark:from-transparent dark:via-blue-900/10 dark:to-purple-900/10" />

      {/* SVG Path connecting nodes */}
      {mounted && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: `${Math.ceil(allLessons.length / 3) * 140 + 150}px` }}
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={course.gradientFrom} />
              <stop offset="100%" stopColor={course.gradientTo} />
            </linearGradient>
          </defs>

          {allLessons.slice(0, -1).map((lesson, index) => {
            const currentPos = getPosition(index, allLessons.length);
            const nextPos = getPosition(index + 1, allLessons.length);
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <motion.path
                key={`path-${index}`}
                d={`M ${currentPos.x}% ${currentPos.y} Q ${(currentPos.x + nextPos.x) / 2}% ${(currentPos.y + nextPos.y) / 2 - 20} ${nextPos.x}% ${nextPos.y}`}
                fill="none"
                stroke={isCompleted ? 'url(#pathGradient)' : '#e2e8f0'}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={isCompleted ? 'none' : '8 8'}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            );
          })}
        </svg>
      )}

      {/* Module Labels */}
      {course.modules.map((module, moduleIndex) => {
        const firstLessonIndex = course.modules
          .slice(0, moduleIndex)
          .reduce((acc, m) => acc + m.lessons.length, 0);
        const firstPos = getPosition(firstLessonIndex, allLessons.length);

        return (
          <div
            key={module.id}
            className="absolute left-0 right-0 text-center"
            style={{ top: `${firstPos.y - 60}px` }}
          >
            <span className="inline-block bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
              {module.name}
            </span>
          </div>
        );
      })}

      {/* Level Nodes */}
      {allLessons.map((lesson, index) => {
        const pos = getPosition(index, allLessons.length);
        const status = getLessonStatus(lesson);

        return (
          <motion.div
            key={lesson.id}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            <LevelNode
              lesson={lesson}
              status={status}
              courseId={course.id}
              levelNumber={index + 1}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

interface LevelNodeProps {
  lesson: Lesson & { moduleName: string };
  status: 'locked' | 'available' | 'current' | 'completed';
  courseId: string;
  levelNumber: number;
}

function LevelNode({ lesson, status, courseId, levelNumber }: LevelNodeProps) {
  const isClickable = status !== 'locked';

  const nodeContent = (
    <div className="relative group">
      {/* Outer glow for current */}
      {status === 'current' && (
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
      )}

      {/* Main node */}
      <div
        className={cn(
          'relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300',
          {
            'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 cursor-not-allowed':
              status === 'locked',
            'bg-white dark:bg-slate-800 border-blue-400 dark:border-blue-500 cursor-pointer hover:scale-110 hover:border-blue-500 hover:shadow-lg':
              status === 'available',
            'bg-gradient-to-br from-blue-500 to-purple-600 border-blue-400 cursor-pointer hover:scale-110 animate-pulse-glow':
              status === 'current',
            'bg-gradient-to-br from-green-400 to-green-600 border-green-400 cursor-pointer hover:scale-105':
              status === 'completed',
          }
        )}
      >
        {status === 'locked' && <Lock className="w-6 h-6 text-slate-400" />}
        {status === 'available' && (
          <span className="text-xl font-bold text-slate-700 dark:text-slate-200">
            {levelNumber}
          </span>
        )}
        {status === 'current' && <Play className="w-7 h-7 text-white fill-white" />}
        {status === 'completed' && <Check className="w-7 h-7 text-white" strokeWidth={3} />}
      </div>

      {/* Stars for completed */}
      {status === 'completed' && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
      )}

      {/* Tooltip on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        <div className="bg-slate-900 text-white text-sm rounded-lg px-3 py-2 text-center shadow-lg">
          <div className="font-semibold">{lesson.title}</div>
          <div className="text-slate-300 text-xs mt-0.5">
            {lesson.xpReward} XP • {lesson.estimatedMinutes} min
          </div>
        </div>
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <Link href={`/learn/${courseId}/${lesson.id}`}>
        {nodeContent}
      </Link>
    );
  }

  return nodeContent;
}
