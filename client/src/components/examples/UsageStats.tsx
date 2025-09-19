import { UsageStats } from '../UsageStats';

export default function UsageStatsExample() {
  return (
    <UsageStats 
      portfoliosAnalyzed={7}
      streakDays={5}
      modulesCompleted={2}
      totalScore={350}
    />
  );
}