import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useEffect, useState } from "react";

type MoodType = "bullish" | "neutral" | "bearish";

interface MarketMoodProps {
  mood?: MoodType;
  autoUpdate?: boolean;
}

export function MarketMood({ mood, autoUpdate = true }: MarketMoodProps) {
  const [currentMood, setCurrentMood] = useState<MoodType>(mood || "neutral");

  // Auto-update mood for demo //todo: remove mock functionality
  useEffect(() => {
    if (!autoUpdate) return;
    
    const interval = setInterval(() => {
      const moods: MoodType[] = ["bullish", "neutral", "bearish"];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setCurrentMood(randomMood);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoUpdate]);

  const getMoodConfig = (mood: MoodType) => {
    switch (mood) {
      case "bullish":
        return {
          icon: TrendingUp,
          label: "Bullish Market",
          color: "text-risk-low",
          bgColor: "bg-risk-low/10",
          badge: "default" as const,
          description: "Markets are showing positive momentum. Good time for growth investments."
        };
      case "bearish":
        return {
          icon: TrendingDown,
          label: "Bearish Market",
          color: "text-risk-high",
          bgColor: "bg-risk-high/10",
          badge: "destructive" as const,
          description: "Markets are declining. Consider defensive stocks and risk management."
        };
      default:
        return {
          icon: Minus,
          label: "Neutral Market",
          color: "text-risk-medium",
          bgColor: "bg-risk-medium/10",
          badge: "secondary" as const,
          description: "Markets are stable. Balanced approach recommended."
        };
    }
  };

  const config = getMoodConfig(currentMood);
  const Icon = config.icon;

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <span>Market Mood</span>
          <Badge variant={config.badge} className="ml-auto">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full ${config.bgColor}`}>
            <Icon className={`h-8 w-8 ${config.color}`} />
          </div>
          
          <div className="flex-1">
            <h3 className={`text-xl font-semibold ${config.color}`}>
              {config.label}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {config.description}
            </p>
          </div>
        </div>
        
        {/* Market Indicators */}
        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <div className="text-center p-2 rounded bg-muted/30">
            <div className="font-medium text-risk-low">+2.5%</div>
            <div className="text-muted-foreground">S&P 500</div>
          </div>
          <div className="text-center p-2 rounded bg-muted/30">
            <div className="font-medium text-risk-high">-1.2%</div>
            <div className="text-muted-foreground">NASDAQ</div>
          </div>
          <div className="text-center p-2 rounded bg-muted/30">
            <div className="font-medium text-risk-medium">+0.8%</div>
            <div className="text-muted-foreground">DOW</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}