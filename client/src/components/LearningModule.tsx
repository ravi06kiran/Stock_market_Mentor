import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, CheckCircle } from "lucide-react";

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  progress: number;
  completed: boolean;
  topics: string[];
}

interface LearningModuleProps {
  modules?: Module[];
  onStartModule?: (moduleId: string) => void;
}

export function LearningModule({ modules, onStartModule }: LearningModuleProps) {
  // Demo modules //todo: remove mock functionality
  const defaultModules: Module[] = [
    {
      id: "1",
      title: "Stock Market Basics",
      description: "Learn the fundamentals of stock trading, market terminology, and how exchanges work.",
      duration: "15 min",
      difficulty: "beginner",
      progress: 100,
      completed: true,
      topics: ["What are stocks?", "How markets work", "Basic terminology"]
    },
    {
      id: "2", 
      title: "Understanding Risk",
      description: "Discover different types of investment risks and how to assess them in your portfolio.",
      duration: "20 min",
      difficulty: "beginner",
      progress: 60,
      completed: false,
      topics: ["Risk types", "Risk assessment", "Risk tolerance"]
    },
    {
      id: "3",
      title: "Portfolio Diversification",
      description: "Master the art of spreading risk across different sectors and asset classes.",
      duration: "25 min", 
      difficulty: "intermediate",
      progress: 0,
      completed: false,
      topics: ["Sector allocation", "Asset classes", "Correlation"]
    },
    {
      id: "4",
      title: "Technical Analysis",
      description: "Learn to read charts, identify patterns, and make informed trading decisions.",
      duration: "30 min",
      difficulty: "advanced", 
      progress: 0,
      completed: false,
      topics: ["Chart patterns", "Indicators", "Support & resistance"]
    }
  ];

  const moduleList = modules || defaultModules;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "default";
      case "intermediate": return "secondary";
      case "advanced": return "destructive";
      default: return "default";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>Learning Modules</span>
        </h2>
        <Badge variant="outline">
          {moduleList.filter(m => m.completed).length}/{moduleList.length} Completed
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {moduleList.map((module) => (
          <Card key={module.id} className="hover-elevate">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    {module.completed && <CheckCircle className="h-5 w-5 text-risk-low" />}
                    <span>{module.title}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>
                <Badge variant={getDifficultyColor(module.difficulty) as any}>
                  {module.difficulty}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
              
              {/* Progress */}
              {module.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              )}
              
              {/* Topics */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Topics covered:</span>
                <div className="flex flex-wrap gap-1">
                  {module.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Action Button */}
              <Button
                onClick={() => onStartModule?.(module.id)}
                className="w-full hover-elevate active-elevate-2"
                variant={module.completed ? "outline" : "default"}
                data-testid={`button-module-${module.id}`}
              >
                {module.completed ? "Review" : 
                 module.progress > 0 ? "Continue" : "Start Learning"}
                {!module.completed && module.progress === 0 && (
                  <Star className="ml-2 h-4 w-4" />
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}