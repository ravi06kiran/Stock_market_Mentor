import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Lightbulb, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

interface AdviceItem {
  type: "tip" | "warning" | "insight";
  title: string;
  message: string;
}

interface AIAdviceProps {
  advice?: AdviceItem[];
  portfolioScore?: number;
  isLoading?: boolean;
}

export function AIAdvice({ advice, portfolioScore = 0, isLoading = false }: AIAdviceProps) {
  const [currentAdvice, setCurrentAdvice] = useState<AdviceItem[]>([]);

  // Generate AI advice based on portfolio score //todo: remove mock functionality
  useEffect(() => {
    if (advice) {
      setCurrentAdvice(advice);
      return;
    }

    const generateAdvice = (score: number): AdviceItem[] => {
      if (score >= 20) {
        return [
          {
            type: "insight",
            title: "Excellent Diversification!",
            message: "Your portfolio shows strong diversification across sectors. Consider adding international exposure for even better risk distribution."
          },
          {
            type: "tip",
            title: "Rebalancing Strategy",
            message: "Review your allocation quarterly and rebalance when any sector exceeds 25% of your total portfolio."
          }
        ];
      } else if (score >= 10) {
        return [
          {
            type: "tip",
            title: "Good Foundation",
            message: "Your portfolio has a solid foundation. Consider adding more low-risk stocks like TCS or INFOSYS to improve stability."
          },
          {
            type: "insight",
            title: "Risk Management",
            message: "You're on the right track! Try to limit high-risk positions to 20% of your total portfolio."
          }
        ];
      } else {
        return [
          {
            type: "warning",
            title: "High Risk Detected",
            message: "Your portfolio is heavily weighted toward high-risk stocks. Consider adding stable, low-risk options like TCS to balance your exposure."
          },
          {
            type: "tip",
            title: "Diversification Needed",
            message: "Spread your investments across different sectors (IT, Finance, Energy) to reduce overall portfolio risk."
          }
        ];
      }
    };

    setCurrentAdvice(generateAdvice(portfolioScore));
  }, [advice, portfolioScore]);

  const getIconAndColor = (type: string) => {
    switch (type) {
      case "warning":
        return { icon: AlertTriangle, color: "text-risk-high" };
      case "tip":
        return { icon: Lightbulb, color: "text-risk-medium" };
      default:
        return { icon: MessageSquare, color: "text-risk-low" };
    }
  };

  if (isLoading) {
    return (
      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            <span>AI Mentor is thinking...</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2].map(i => (
              <div key={i} className="h-16 bg-muted/30 rounded animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover-elevate">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Mentor Advice</span>
          <Badge variant="outline" className="ml-auto">
            Personalized
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {currentAdvice.map((item, index) => {
            const { icon: Icon, color } = getIconAndColor(item.type);
            
            return (
              <div 
                key={index}
                className="flex space-x-3 p-3 rounded-lg bg-muted/30 hover-elevate"
                data-testid={`advice-item-${index}`}
              >
                <div className={`p-2 rounded-full bg-background ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })}
          
          {/* AI Learning Progress */}
          <div className="mt-4 p-3 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">AI Confidence</span>
              <span className="font-medium">95%</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Based on your portfolio composition and market analysis
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}