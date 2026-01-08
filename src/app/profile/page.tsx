'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  User,
  Trophy,
  Flame,
  Star,
  Calendar,
  Code,
  Brain,
  Award,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { getLevelFromXP, getProgressToNextLevel, getLevelTitle } from '@/lib/utils/xp';
import { courses } from '@/data/courses';

// Sample achievements for demo
const achievements = [
  {
    id: 'first_lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    unlocked: true,
    rarity: 'common',
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    description: '7-day learning streak',
    icon: '🔥',
    unlocked: false,
    rarity: 'uncommon',
  },
  {
    id: 'html_complete',
    name: 'HTML Hero',
    description: 'Complete all HTML lessons',
    icon: '🏆',
    unlocked: false,
    rarity: 'rare',
  },
  {
    id: 'xp_1000',
    name: 'XP Hunter',
    description: 'Earn 1,000 total XP',
    icon: '⭐',
    unlocked: false,
    rarity: 'uncommon',
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Complete a lesson after midnight',
    icon: '🦉',
    unlocked: false,
    rarity: 'rare',
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Complete a challenge in under 2 minutes',
    icon: '⚡',
    unlocked: false,
    rarity: 'epic',
  },
];

const rarityColors = {
  common: 'border-slate-300 dark:border-slate-600',
  uncommon: 'border-green-400',
  rare: 'border-blue-400',
  epic: 'border-purple-400',
  legendary: 'border-yellow-400',
};

export default function ProfilePage() {
  const { user, userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-slate-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Sign In Required
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Create an account or sign in to track your progress, earn XP, and unlock achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">Create Free Account</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Demo data - in real app this would come from Firestore
  const totalXP = userData?.totalXP || 150;
  const level = getLevelFromXP(totalXP);
  const levelProgress = getProgressToNextLevel(totalXP);
  const levelTitle = getLevelTitle(level);
  const streak = userData?.streak || 3;

  const courseProgress = [
    { courseId: 'web-dev', completed: 2, total: 40 },
    { courseId: 'python-ml', completed: 0, total: 35 },
    { courseId: 'usaco', completed: 0, total: 45 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-900">
      {/* Profile Header */}
      <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center">
                  <User className="w-16 h-16 text-slate-400" />
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 text-sm font-bold shadow-lg">
                Lv. {level}
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                {user.displayName || 'Anonymous Coder'}
              </h1>
              <p className="text-white/80 mb-4">{user.email}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {levelTitle}
                </Badge>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-300" />
                  <span className="font-semibold">{streak} day streak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-200" />
                  <span>Joined {new Date(userData?.createdAt || Date.now()).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {totalXP.toLocaleString()}
                </div>
                <div className="text-sm text-slate-500">Total XP</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card className="text-center">
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {level}
                </div>
                <div className="text-sm text-slate-500">Level</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center">
                <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {streak}
                </div>
                <div className="text-sm text-slate-500">Day Streak</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card className="text-center">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {achievements.filter(a => a.unlocked).length}
                </div>
                <div className="text-sm text-slate-500">Achievements</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Level Progress */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Level Progress
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    {levelProgress}% to Level {level + 1}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">
                    {levelTitle}
                  </div>
                  <div className="text-sm text-slate-500">Current Title</div>
                </div>
              </div>
              <ProgressBar value={levelProgress} color="purple" size="lg" />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Course Progress */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Course Progress
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courseProgress.map((progress, index) => {
              const course = courses.find(c => c.id === progress.courseId);
              if (!course) return null;

              const Icon = progress.courseId === 'web-dev' ? Code : progress.courseId === 'python-ml' ? Brain : Trophy;
              const percent = Math.round((progress.completed / progress.total) * 100);

              return (
                <motion.div
                  key={progress.courseId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                >
                  <Link href={`/learn/${progress.courseId}`}>
                    <Card hover className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`,
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 dark:text-white">
                            {course.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {progress.completed} / {progress.total} lessons
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <ProgressBar
                        value={progress.completed}
                        max={progress.total}
                        color={percent === 100 ? 'green' : 'blue'}
                      />
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Achievements
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <div
                  className={`relative p-4 rounded-xl border-2 text-center transition-all ${
                    achievement.unlocked
                      ? `${rarityColors[achievement.rarity as keyof typeof rarityColors]} bg-white dark:bg-slate-800`
                      : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">
                    {achievement.unlocked ? achievement.icon : '🔒'}
                  </div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">
                    {achievement.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
