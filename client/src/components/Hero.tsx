import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Brain } from "lucide-react";
import heroImage from "@assets/generated_images/Educational_investing_hero_image_bb25c900.png";

interface HeroProps {
  onGetStarted?: () => void;
  onTryDemo?: () => void;
}

export function Hero({ onGetStarted, onTryDemo }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Master the Stock Market with
            <span className="text-primary"> AI Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
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
              className="bg-background/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Try Demo Mode
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-gray-300 space-y-2">
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