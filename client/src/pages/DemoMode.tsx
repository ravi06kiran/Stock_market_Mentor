import { useState } from "react";
import { Header } from "@/components/Header";
import { LearningModule } from "@/components/LearningModule";
import { PortfolioCard } from "@/components/PortfolioCard";
import { MarketMood } from "@/components/MarketMood";
import { AIAdvice } from "@/components/AIAdvice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  BookOpen, 
  TrendingUp, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export default function DemoMode() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Demo tutorial steps
  const demoSteps = [
    {
      title: "Welcome to Stock Market Learning!",
      description: "Let's start with a guided tour of how investing works.",
      component: "welcome"
    },
    {
      title: "Understanding Portfolio Analysis",
      description: "See how we analyze a sample portfolio for risk and diversification.",
      component: "portfolio"
    },
    {
      title: "AI-Powered Investment Advice",
      description: "Learn how our AI mentor provides personalized recommendations.",
      component: "ai-advice"
    },
    {
      title: "Market Mood & Trends",
      description: "Understand how market conditions affect investment decisions.",
      component: "market"
    },
    {
      title: "Interactive Learning Modules",
      description: "Explore our structured learning path from beginner to expert.",
      component: "learning"
    }
  ];

  // Sample portfolio for demo //todo: remove mock functionality
  const demoPortfolio = [
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      quantity: 10,
      price: 3750,
      riskLevel: "low" as const,
      sector: "IT",
      change: 2.5
    },
    {
      symbol: "RELIANCE", 
      name: "Reliance Industries",
      quantity: 5,
      price: 2430,
      riskLevel: "medium" as const,
      sector: "Energy",
      change: -1.2
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank", 
      quantity: 8,
      price: 1600,
      riskLevel: "high" as const,
      sector: "Finance",
      change: 0.8
    }
  ];

  const portfolioValue = demoPortfolio.reduce((sum, stock) => sum + (stock.quantity * stock.price), 0);
  const healthScore = 25; // Sample calculation
  const badge = "Diversification Master 🏆";

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeDemo = () => {
    setCompletedSteps([...completedSteps, currentStep]);
    console.log('Demo completed!');
  };

  const renderStepContent = () => {
    const step = demoSteps[currentStep];
    
    switch (step.component) {
      case "welcome":
        return (
          <Card className="hover-elevate">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Welcome to AI Stock Mentor!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                This demo will teach you the basics of smart investing through interactive examples.
                You'll learn about risk management, portfolio diversification, and how to make informed decisions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Learn Fundamentals</div>
                  <div className="text-muted-foreground">Stock market basics</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Analyze Portfolios</div>
                  <div className="text-muted-foreground">Risk assessment</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Get AI Advice</div>
                  <div className="text-muted-foreground">Personalized tips</div>
                </div>
              </div>
              
              <Badge variant="outline" className="text-sm">
                No signup required • 100% Free • Beginner friendly
              </Badge>
            </CardContent>
          </Card>
        );
        
      case "portfolio":
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Sample Portfolio Analysis</h3>
              <p className="text-muted-foreground">
                This portfolio shows a good mix of low, medium, and high-risk stocks across different sectors.
              </p>
            </div>
            <PortfolioCard
              stocks={demoPortfolio}
              healthScore={healthScore}
              badge={badge}
              totalValue={portfolioValue}
            />
            <Card className="bg-muted/30">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Portfolio Health Score: 25/50</p>
                    <p className="text-sm text-muted-foreground">
                      This score is calculated by adding +10 for low-risk stocks, +5 for medium-risk, 
                      and -10 for high-risk stocks. A balanced portfolio aims for 20+.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case "ai-advice":
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Investment Advice</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your portfolio composition and provides personalized recommendations.
              </p>
            </div>
            <AIAdvice portfolioScore={healthScore} />
            <Card className="bg-muted/30">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Smart Recommendations</p>
                    <p className="text-sm text-muted-foreground">
                      The AI considers your risk tolerance, sector allocation, and current market conditions 
                      to provide actionable advice for improving your portfolio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case "market":
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Market Mood Indicator</h3>
              <p className="text-muted-foreground">
                Stay informed about current market conditions and how they might affect your investments.
              </p>
            </div>
            <MarketMood mood="bullish" />
            <Card className="bg-muted/30">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Market Analysis</p>
                    <p className="text-sm text-muted-foreground">
                      Understanding market sentiment helps you make better timing decisions and adjust 
                      your strategy based on current economic conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case "learning":
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Structured Learning Path</h3>
              <p className="text-muted-foreground">
                Progress through carefully designed modules that build your investing knowledge step by step.
              </p>
            </div>
            <LearningModule onStartModule={(id) => console.log('Starting module:', id)} />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isAuthenticated={false}
        onSignIn={() => console.log('Sign in clicked')}
        onSignUp={() => console.log('Sign up clicked')}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Demo Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Play className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Demo Mode</h1>
            <Badge variant="outline">Interactive Tutorial</Badge>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-muted-foreground">Progress:</span>
            <div className="flex-1 bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium">
              {currentStep + 1} / {demoSteps.length}
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">{demoSteps[currentStep].title}</h2>
          <p className="text-muted-foreground">{demoSteps[currentStep].description}</p>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline"
            onClick={previousStep}
            disabled={currentStep === 0}
            data-testid="button-previous"
            className="hover-elevate"
          >
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {demoSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-primary' :
                  completedSteps.includes(index) ? 'bg-primary/50' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          {currentStep < demoSteps.length - 1 ? (
            <Button 
              onClick={nextStep}
              data-testid="button-next"
              className="hover-elevate active-elevate-2"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={completeDemo}
              data-testid="button-complete"
              className="hover-elevate active-elevate-2"
            >
              Complete Demo
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}