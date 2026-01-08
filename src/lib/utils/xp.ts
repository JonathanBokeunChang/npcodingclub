// XP thresholds for each level (exponential scaling)
export function getXPForLevel(level: number): number {
  if (level <= 1) return 0;
  let xp = 0;
  for (let i = 2; i <= level; i++) {
    xp += i * 100;
  }
  return xp;
}

// Get the current level based on total XP
export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  let xpNeeded = 0;
  while (xpNeeded <= totalXP) {
    level++;
    xpNeeded += level * 100;
  }
  return level - 1;
}

// Get progress to next level (0-100)
export function getProgressToNextLevel(totalXP: number): number {
  const currentLevel = getLevelFromXP(totalXP);
  const currentLevelXP = getXPForLevel(currentLevel);
  const nextLevelXP = getXPForLevel(currentLevel + 1);
  const xpInCurrentLevel = totalXP - currentLevelXP;
  const xpNeededForNext = nextLevelXP - currentLevelXP;
  return Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNext) * 100));
}

// Level titles based on level
export function getLevelTitle(level: number): string {
  if (level >= 50) return 'Legend';
  if (level >= 40) return 'Master';
  if (level >= 30) return 'Expert';
  if (level >= 20) return 'Engineer';
  if (level >= 15) return 'Developer';
  if (level >= 10) return 'Coder';
  if (level >= 5) return 'Apprentice';
  return 'Newcomer';
}

// Calculate XP reward with bonuses
export function calculateXPReward(
  baseXP: number,
  options?: {
    firstTry?: boolean;
    underTime?: boolean;
    perfectScore?: boolean;
  }
): number {
  let xp = baseXP;
  if (options?.firstTry) xp *= 1.25;
  if (options?.underTime) xp *= 1.1;
  if (options?.perfectScore) xp *= 1.15;
  return Math.round(xp);
}
