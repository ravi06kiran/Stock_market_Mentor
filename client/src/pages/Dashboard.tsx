import { useState } from "react";
import { Header } from "@/components/Header";
import { PortfolioCard } from "@/components/PortfolioCard";
import { StockForm } from "@/components/StockForm";
import { MarketMood } from "@/components/MarketMood";
import { AIAdvice } from "@/components/AIAdvice";
import { UsageStats } from "@/components/UsageStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, BarChart3 } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  riskLevel: "low" | "medium" | "high";
  sector: string;
  change?: number;
}

export default function Dashboard() {
  const [portfolioAnalyzed, setPortfolioAnalyzed] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState<Stock[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [portfolioCount, setPortfolioCount] = useState(3); // Demo data

  // Mock stock data //todo: remove mock functionality
  const stockDatabase = {
    "TCS": { name: "Tata Consultancy Services", price: 3750, riskLevel: "low" as const, sector: "IT" },
    "RELIANCE": { name: "Reliance Industries", price: 2430, riskLevel: "medium" as const, sector: "Energy" },
    "HDFC": { name: "HDFC Bank", price: 1600, riskLevel: "high" as const, sector: "Finance" },
    "INFOSYS": { name: "Infosys", price: 1550, riskLevel: "low" as const, sector: "IT" },
    "WIPRO": { name: "Wipro", price: 750, riskLevel: "medium" as const, sector: "IT" },
    "ADANI": { name: "Adani Enterprises", price: 2000, riskLevel: "high" as const, sector: "Energy" }
  };

  const handlePortfolioSubmit = async (stocks: { symbol: string; quantity: number }[]) => {
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const analysisResults: Stock[] = stocks.map(stock => {
        const stockInfo = stockDatabase[stock.symbol as keyof typeof stockDatabase];
        return {
          symbol: stock.symbol,
          name: stockInfo?.name || stock.symbol,
          quantity: stock.quantity,
          price: stockInfo?.price || 1000,
          riskLevel: stockInfo?.riskLevel || "medium",
          sector: stockInfo?.sector || "Unknown",
          change: (Math.random() - 0.5) * 10 // Random change for demo
        };
      });
      
      setCurrentPortfolio(analysisResults);
      setPortfolioAnalyzed(true);
      setIsAnalyzing(false);
      setPortfolioCount(prev => prev + 1);
    }, 2000);
  };

  const calculateHealthScore = (stocks: Stock[]) => {
    return stocks.reduce((score, stock) => {
      switch (stock.riskLevel) {
        case "low": return score + 10;
        case "medium": return score + 5;
        case "high": return score - 10;
        default: return score;
      }
    }, 0);
  };

  const getBadge = (score: number) => {
    if (score >= 20) return "Diversification Master 🏆";
    if (score >= 10) return "Balanced Investor 🌟";
    return "Risk Buster ⚡";
  };

  const healthScore = calculateHealthScore(currentPortfolio);
  const totalValue = currentPortfolio.reduce((sum, stock) => sum + (stock.quantity * stock.price), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isAuthenticated={true}
        onSignOut={() => console.log('Sign out clicked')}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span>Investment Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Analyze your portfolio, get AI insights, and track your learning progress
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Portfolio Tools */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portfolio Form */}
            {!portfolioAnalyzed && (
              <StockForm 
                onSubmit={handlePortfolioSubmit}
                isLoading={isAnalyzing}
              />
            )}

            {/* Portfolio Results */}
            {portfolioAnalyzed && currentPortfolio.length > 0 && (
              <div className="space-y-6">
                <PortfolioCard
                  stocks={currentPortfolio}
                  healthScore={healthScore}
                  badge={getBadge(healthScore)}
                  totalValue={totalValue}
                />
                
                {/* New Analysis Button */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Analyze Another Portfolio</h3>
                        <p className="text-sm text-muted-foreground">
                          Test different combinations and see how they perform
                        </p>
                      </div>
                      <Button 
                        onClick={() => {
                          setPortfolioAnalyzed(false);
                          setCurrentPortfolio([]);
                        }}
                        data-testid="button-new-analysis"
                        className="hover-elevate active-elevate-2"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        New Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* AI Advice */}
            {portfolioAnalyzed && (
              <AIAdvice 
                portfolioScore={healthScore}
                isLoading={isAnalyzing}
              />
            )}
          </div>

          {/* Right Column - Stats & Market */}
          <div className="space-y-6">
            {/* Usage Stats */}
            <UsageStats 
              portfoliosAnalyzed={portfolioCount}
              streakDays={5}
              modulesCompleted={2}
              totalScore={450}
            />

            {/* Market Mood */}
            <MarketMood />

            {/* Quick Actions */}
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-view-learning"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Learning Modules
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-demo-mode"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Try Demo Mode
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-market-trends"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Market Trends
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}