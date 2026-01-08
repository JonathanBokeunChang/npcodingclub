export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: Date;
  lastLoginAt: Date;
  totalXP: number;
  level: number;
  streak: number;
  lastActivityDate: Date | null;
  courseXP: {
    'web-dev': number;
    'python-ml': number;
    'usaco': number;
  };
  preferredLanguage: 'javascript' | 'python' | 'cpp';
  theme: 'light' | 'dark' | 'system';
}

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  totalLessons: number;
  totalXP: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  modules: Module[];
}

export interface Module {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  description: string;
  type: 'reading' | 'interactive' | 'challenge' | 'project';
  xpReward: number;
  estimatedMinutes: number;
  order: number;
  content: string;
  codeTemplate?: string;
  solution?: string;
  hints?: string[];
  testCases?: TestCase[];
  language?: 'javascript' | 'python' | 'cpp' | 'html' | 'css';
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  description: string;
  hidden: boolean;
}

export interface Progress {
  lessonId: string;
  courseId: string;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  xpEarned: number;
  completedAt: Date | null;
  attempts: number;
  bestScore: number;
  code?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  xpBonus: number;
  unlockedAt?: Date;
  progress?: number;
  maxProgress?: number;
}

export type LevelStatus = 'locked' | 'available' | 'current' | 'completed';

export interface LevelNode {
  id: string;
  lessonId: string;
  title: string;
  xp: number;
  status: LevelStatus;
  stars: number;
  position: { x: number; y: number };
}
