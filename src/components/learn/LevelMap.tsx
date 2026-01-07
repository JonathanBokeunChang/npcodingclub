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

  // Duolingo-style winding path - more organic curve
  const getPosition = (index: number) => {
    const amplitude = 25; // How far the path curves left/right
    const wavelength = 6; // How many nodes before the pattern repeats

    // Create a smooth sine wave pattern
    const x = 50 + amplitude * Math.sin((index / wavelength) * Math.PI * 2);
    const y = 100 + index * 100; // 100px between each node

    return { x, y };
  };

  // Get course accent color
  const getCourseColor = () => {
    switch (course.id) {
      case 'web-dev':
        return { primary: '#f97316', secondary: '#ea580c' };
      case 'python-ml':
        return { primary: '#3b82f6', secondary: '#2563eb' };
      case 'usaco':
        return { primary: '#8b5cf6', secondary: '#7c3aed' };
      default:
        return { primary: '#29cc57', secondary: '#20a547' };
    }
  };

  const colors = getCourseColor();

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto overflow-hidden pb-20"
      style={{ minHeight: `${allLessons.length * 100 + 200}px` }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ background: colors.primary }}
        />
        <div
          className="absolute top-1/2 right-10 w-40 h-40 rounded-full blur-3xl opacity-15"
          style={{ background: colors.secondary }}
        />
      </div>

      {/* SVG Path connecting nodes */}
      {mounted && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: `${allLessons.length * 100 + 200}px` }}
        >
          <defs>
            <linearGradient id={`pathGradient-${course.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>

          {allLessons.slice(0, -1).map((lesson, index) => {
            const currentPos = getPosition(index);
            const nextPos = getPosition(index + 1);
            const isCompleted = completedLessons.includes(lesson.id);

            // Calculate control point for bezier curve
            const midY = (currentPos.y + nextPos.y) / 2;

            return (
              <motion.path
                key={`path-${index}`}
                d={`M ${currentPos.x}% ${currentPos.y}
                    Q ${currentPos.x}% ${midY} ${nextPos.x}% ${nextPos.y}`}
                fill="none"
                stroke={isCompleted ? `url(#pathGradient-${course.id})` : '#e5e7eb'}
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
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
        const firstPos = getPosition(firstLessonIndex);

        return (
          <motion.div
            key={module.id}
            className="absolute left-0 right-0 text-center pointer-events-none"
            style={{ top: `${firstPos.y - 55}px` }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + moduleIndex * 0.1 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            >
              {module.name}
            </span>
          </motion.div>
        );
      })}

      {/* Level Nodes */}
      {allLessons.map((lesson, index) => {
        const pos = getPosition(index);
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
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: index * 0.03
            }}
          >
            <LevelNode
              lesson={lesson}
              status={status}
              courseId={course.id}
              levelNumber={index + 1}
              colors={colors}
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
  colors: { primary: string; secondary: string };
}

function LevelNode({ lesson, status, courseId, levelNumber, colors }: LevelNodeProps) {
  const isClickable = status !== 'locked';

  const nodeContent = (
    <div className="relative group">
      {/* Pulse ring for current lesson */}
      {status === 'current' && (
        <>
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: colors.primary }}
          />
          <div
            className="absolute -inset-2 rounded-full animate-pulse opacity-20"
            style={{ background: colors.primary }}
          />
        </>
      )}

      {/* Main node - Duolingo-style 3D button */}
      <div
        className={cn(
          'relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200',
          {
            // Locked state
            'bg-gray-200 cursor-not-allowed': status === 'locked',
            // Available state
            'bg-white cursor-pointer hover:-translate-y-1': status === 'available',
            // Current state - bouncing
            'cursor-pointer hover:-translate-y-1': status === 'current',
            // Completed state
            'cursor-pointer hover:-translate-y-1': status === 'completed',
          }
        )}
        style={{
          boxShadow: status === 'locked'
            ? '0 4px 0 0 #d1d5db'
            : status === 'completed'
              ? `0 4px 0 0 ${colors.secondary}`
              : status === 'current'
                ? `0 4px 0 0 ${colors.secondary}`
                : `0 4px 0 0 #e5e7eb`,
          background: status === 'completed'
            ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
            : status === 'current'
              ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
              : undefined,
        }}
      >
        {status === 'locked' && <Lock className="w-6 h-6 text-gray-400" />}
        {status === 'available' && (
          <span
            className="text-xl font-bold"
            style={{ color: colors.primary }}
          >
            {levelNumber}
          </span>
        )}
        {status === 'current' && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Play className="w-7 h-7 text-white fill-white" />
          </motion.div>
        )}
        {status === 'completed' && <Check className="w-7 h-7 text-white" strokeWidth={3} />}
      </div>

      {/* Stars for completed - Duolingo style */}
      {status === 'completed' && (
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow"
            />
          ))}
        </motion.div>
      )}

      {/* Tooltip on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-52 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
        <div className="bg-[#10162f] text-white text-sm rounded-xl px-4 py-3 text-center shadow-xl">
          <div className="font-bold mb-1">{lesson.title}</div>
          <div className="flex items-center justify-center gap-3 text-gray-300 text-xs">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              {lesson.xpReward} XP
            </span>
            <span>{lesson.estimatedMinutes} min</span>
          </div>
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#10162f]" />
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
