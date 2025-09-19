import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Brain } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
  onTryDemo?: () => void;
}

export function Hero({ onGetStarted, onTryDemo }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Master the Stock Market with
            <span className="text-primary"> AI Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Learn smart investing through interactive tutorials, AI-powered insights, and gamified progress tracking
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI-Powered Mentoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Portfolio Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Risk Management</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onGetStarted}
              data-testid="button-get-started"
              className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-border px-8 py-4 text-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onTryDemo}
              data-testid="button-try-demo"
              className="px-8 py-4 text-lg hover-elevate"
            >
              Try Demo Mode
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Join thousands learning smart investing</p>
            <div className="flex justify-center space-x-8 text-xs">
              <span>✓ Free Forever</span>
              <span>✓ No Credit Card</span>
              <span>✓ Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}