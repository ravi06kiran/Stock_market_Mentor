import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Calendar, Target, TrendingUp } from "lucide-react";

interface UsageStatsProps {
  portfoliosAnalyzed?: number;
  streakDays?: number;
  modulesCompleted?: number;
  totalScore?: number;
}

export function UsageStats({ 
  portfoliosAnalyzed = 0, 
  streakDays = 0, 
  modulesCompleted = 0,
  totalScore = 0 
}: UsageStatsProps) {
  const stats = [
    {
      icon: BarChart3,
      label: "Portfolios Analyzed",
      value: portfoliosAnalyzed,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Calendar,
      label: "Learning Streak",
      value: `${streakDays} days`,
      color: "text-risk-low",
      bgColor: "bg-risk-low/10"
    },
    {
      icon: Target,
      label: "Modules Completed", 
      value: modulesCompleted,
      color: "text-risk-medium",
      bgColor: "bg-risk-medium/10"
    },
    {
      icon: TrendingUp,
      label: "Total Score",
      value: totalScore,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10"
    }
  ];

  const getAchievementBadge = () => {
    if (portfoliosAnalyzed >= 10) return "Portfolio Master";
    if (modulesCompleted >= 3) return "Quick Learner";
    if (streakDays >= 7) return "Consistent Learner";
    if (portfoliosAnalyzed >= 5) return "Active Analyzer";
    return "Getting Started";
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Your Progress</span>
          <Badge variant="outline">
            {getAchievementBadge()}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover-elevate"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className={`text-lg font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Achievement Progress */}
        <div className="mt-4 p-3 border-t">
          <div className="text-sm font-medium mb-2">Next Achievement</div>
          <div className="text-xs text-muted-foreground">
            {portfoliosAnalyzed < 10 
              ? `Analyze ${10 - portfoliosAnalyzed} more portfolios to become a Portfolio Master`
              : "You've unlocked all achievements! Keep learning to maintain your streak."}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}