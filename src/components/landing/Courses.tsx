'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const courses = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Master HTML, CSS, and JavaScript to build beautiful, interactive websites from scratch.',
    icon: Code,
    levels: 40,
    xp: '4,000',
    difficulty: 'Beginner',
    difficultyColor: 'success' as const,
    gradient: 'from-orange-500 to-red-500',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'python-ml',
    title: 'AI & Machine Learning',
    description:
      'Learn Python programming and dive into data science, machine learning, and neural networks.',
    icon: Brain,
    levels: 35,
    xp: '3,500',
    difficulty: 'Beginner',
    difficultyColor: 'success' as const,
    gradient: 'from-blue-500 to-cyan-500',
    topics: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn'],
  },
  {
    id: 'usaco',
    title: 'USACO Prep',
    description:
      'Prepare for the USA Computing Olympiad with C++ and competitive programming algorithms.',
    icon: Trophy,
    levels: 45,
    xp: '4,500',
    difficulty: 'Advanced',
    difficultyColor: 'warning' as const,
    gradient: 'from-purple-500 to-pink-500',
    topics: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
  },
];

export function Courses() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Three carefully crafted learning tracks to match your interests and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/learn/${course.id}`}>
                <Card hover className="h-full group cursor-pointer">
                  {/* Course Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <course.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h3>
                    <Badge variant={course.difficultyColor} size="sm">
                      {course.difficulty}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {course.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          {course.levels}
                        </div>
                        <div className="text-sm text-slate-500">Levels</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-500">
                          {course.xp}
                        </div>
                        <div className="text-sm text-slate-500">XP</div>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
