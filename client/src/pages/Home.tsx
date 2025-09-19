import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Shield, 
  BookOpen, 
  Target,
  Star,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Mentoring",
      description: "Get personalized investment advice from our advanced AI that learns from your portfolio and goals."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Analysis",
      description: "Comprehensive analysis of your holdings with risk assessment and diversification recommendations."
    },
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Master investing through gamified modules covering everything from basics to advanced strategies."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn to balance risk and reward with our intelligent risk scoring and management tools."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set investment goals and track your progress with detailed analytics and milestone rewards."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join thousands of learners sharing insights and growing their investment knowledge together."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Beginning Investor",
      content: "I went from knowing nothing about stocks to confidently building my first diversified portfolio in just 2 weeks!",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      role: "Small Business Owner",
      content: "The AI mentor helped me understand risk management. My portfolio is now much more balanced and stable.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "College Student", 
      content: "The gamified learning made investing fun! I earned all the beginner badges and feel ready to start investing.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isAuthenticated={false}
        onSignIn={() => setShowSignIn(true)}
        onSignUp={() => setShowSignUp(true)}
      />
      
      <Hero 
        onGetStarted={() => setShowSignUp(true)}
        onTryDemo={() => console.log('Navigate to demo')}
      />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Master Investing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From complete beginner to confident investor with AI-powered guidance every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Try It Free</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Learning with <span className="text-primary">Demo Mode</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the full platform with guided tutorials and sample portfolios. 
              No signup required - jump right in and start learning!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" data-testid="button-demo-cta" className="hover-elevate active-elevate-2">
                Try Demo Mode Now
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-signup-cta" className="hover-elevate">
                Create Free Account
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Students Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Learning Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Students Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real success stories from people who transformed their financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-primary">Investment Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are building their financial future with AI-powered guidance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-final-cta" className="hover-elevate active-elevate-2">
              Get Started Free
              <CheckCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}