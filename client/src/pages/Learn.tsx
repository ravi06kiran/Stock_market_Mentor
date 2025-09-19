import { Header } from "@/components/Header";
import { LearningModule } from "@/components/LearningModule";
import { UsageStats } from "@/components/UsageStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Clock,
  TrendingUp,
  Star
} from "lucide-react";

export default function Learn() {
  // Learning progress data //todo: remove mock functionality
  const learningStats = {
    modulesCompleted: 2,
    totalModules: 4,
    currentStreak: 5,
    totalPoints: 350,
    nextBadge: "Portfolio Expert"
  };

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first learning module",
      icon: BookOpen,
      earned: true,
      date: "2 days ago"
    },
    {
      title: "Quick Learner", 
      description: "Completed 3 modules in one week",
      icon: Clock,
      earned: true,
      date: "1 day ago"
    },
    {
      title: "Risk Master",
      description: "Mastered risk assessment techniques",
      icon: Target,
      earned: false,
      progress: 75
    },
    {
      title: "Portfolio Expert",
      description: "Build and analyze 10 different portfolios",
      icon: TrendingUp,
      earned: false,
      progress: 40
    }
  ];

  const learningPath = [
    {
      category: "Fundamentals",
      modules: ["Stock Market Basics", "Understanding Risk"],
      progress: 100,
      color: "text-risk-low"
    },
    {
      category: "Portfolio Management",
      modules: ["Portfolio Diversification", "Asset Allocation"],
      progress: 50,
      color: "text-risk-medium"
    },
    {
      category: "Advanced Strategies",
      modules: ["Technical Analysis", "Options Trading", "Market Psychology"],
      progress: 0,
      color: "text-muted-foreground"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isAuthenticated={true}
        onSignOut={() => console.log('Sign out clicked')}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span>Learning Center</span>
          </h1>
          <p className="text-muted-foreground">
            Master investing through structured lessons and interactive exercises
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Your Learning Path</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {learningPath.map((path, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold ${path.color}`}>
                          {path.category}
                        </h3>
                        <Badge variant="outline">
                          {path.progress}% Complete
                        </Badge>
                      </div>
                      
                      <Progress value={path.progress} className="h-2" />
                      
                      <div className="flex flex-wrap gap-2">
                        {path.modules.map((module, moduleIndex) => (
                          <Badge 
                            key={moduleIndex}
                            variant={path.progress === 100 ? "default" : "outline"}
                            className="text-xs"
                          >
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Modules */}
            <LearningModule 
              onStartModule={(moduleId) => console.log('Starting module:', moduleId)}
            />

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border hover-elevate ${
                          achievement.earned 
                            ? 'bg-primary/5 border-primary/20' 
                            : 'bg-muted/30 border-muted'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${
                            achievement.earned 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{achievement.title}</h4>
                              {achievement.earned && (
                                <Star className="h-4 w-4 text-primary fill-primary" />
                              )}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {achievement.description}
                            </p>
                            
                            {achievement.earned ? (
                              <div className="text-xs text-primary">
                                Earned {achievement.date}
                              </div>
                            ) : (
                              <div className="space-y-1">
                                <div className="text-xs text-muted-foreground">
                                  Progress: {achievement.progress}%
                                </div>
                                <Progress value={achievement.progress} className="h-1" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Stats */}
            <UsageStats 
              portfoliosAnalyzed={8}
              streakDays={learningStats.currentStreak}
              modulesCompleted={learningStats.modulesCompleted}
              totalScore={learningStats.totalPoints}
            />

            {/* Quick Actions */}
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-demo-mode"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Try Demo Mode
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-practice-portfolio"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Practice Portfolio
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-view-dashboard"
                >
                  <Target className="h-4 w-4 mr-2" />
                  View Dashboard
                </Button>
              </CardContent>
            </Card>

            {/* Progress Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {Math.round((learningStats.modulesCompleted / learningStats.totalModules) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Overall Progress
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Modules Completed</span>
                    <span className="font-medium">
                      {learningStats.modulesCompleted}/{learningStats.totalModules}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Streak</span>
                    <span className="font-medium text-risk-low">
                      {learningStats.currentStreak} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Points</span>
                    <span className="font-medium text-primary">
                      {learningStats.totalPoints}
                    </span>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <div className="text-sm font-medium mb-1">Next Badge</div>
                  <div className="text-xs text-muted-foreground">
                    Complete 2 more modules to earn "{learningStats.nextBadge}"
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}