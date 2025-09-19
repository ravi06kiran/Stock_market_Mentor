import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  riskLevel: "low" | "medium" | "high";
  sector: string;
  change?: number;
}

interface PortfolioCardProps {
  stocks: Stock[];
  healthScore: number;
  badge: string;
  totalValue: number;
}

export function PortfolioCard({ stocks, healthScore, badge, totalValue }: PortfolioCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-risk-low";
      case "medium": return "text-risk-medium";
      case "high": return "text-risk-high";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadgeVariant = (risk: string): "default" | "secondary" | "destructive" => {
    switch (risk) {
      case "low": return "default";
      case "medium": return "secondary";
      case "high": return "destructive";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 20) return "text-risk-low";
    if (score >= 10) return "text-risk-medium";
    return "text-risk-high";
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Portfolio Overview</CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ₹{totalValue.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Value</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Health Score */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Portfolio Health Score</span>
            <span className={`text-lg font-bold ${getScoreColor(healthScore)}`}>
              {healthScore}/50
            </span>
          </div>
          <Progress value={(healthScore / 50) * 100} className="h-2" />
          <Badge variant="outline" className="w-fit">
            {badge}
          </Badge>
        </div>

        {/* Stock Holdings */}
        <div className="space-y-3">
          <h4 className="font-medium">Holdings</h4>
          <div className="space-y-2">
            {stocks.map((stock, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover-elevate"
                data-testid={`stock-item-${stock.symbol}`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stock.symbol}</span>
                    <Badge variant={getRiskBadgeVariant(stock.riskLevel)}>
                      {stock.riskLevel}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stock.quantity} shares • {stock.sector}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-medium">₹{stock.price.toFixed(2)}</div>
                  {stock.change !== undefined && (
                    <div className={`text-sm flex items-center ${
                      stock.change > 0 ? 'text-risk-low' : stock.change < 0 ? 'text-risk-high' : 'text-muted-foreground'
                    }`}>
                      {stock.change > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : 
                       stock.change < 0 ? <TrendingDown className="h-3 w-3 mr-1" /> : 
                       <Minus className="h-3 w-3 mr-1" />}
                      {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}