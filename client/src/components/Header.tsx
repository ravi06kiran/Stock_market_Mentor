import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TrendingUp, User, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export function Header({ isAuthenticated = false, onSignOut }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link href="/demo" data-testid="link-demo">
        <Button variant="ghost" className="hover-elevate">Demo Mode</Button>
      </Link>
      <Link href="/dashboard" data-testid="link-dashboard">
        <Button variant="ghost" className="hover-elevate">Dashboard</Button>
      </Link>
      <Link href="/learn" data-testid="link-learn">
        <Button variant="ghost" className="hover-elevate">Learn</Button>
      </Link>
    </>
  );

  const AuthButtons = () => (
    <>
      {!isAuthenticated ? (
        <>
          <Link href="/signin">
            <Button
              variant="ghost"
              data-testid="button-sign-in"
              className="hover-elevate"
            >
              <User className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="default"
              data-testid="button-sign-up"
              className="hover-elevate"
            >
              Get Started
            </Button>
          </Link>
        </>
      ) : (
        <Button
          variant="ghost"
          onClick={onSignOut}
          data-testid="button-sign-out"
          className="hover-elevate"
        >
          <User className="h-5 w-5 mr-2" />
          Sign Out
        </Button>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <TrendingUp className="h-6 w-6" />
            <span className="font-bold">StockMentorAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavItems />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <AuthButtons />
          </div>
          <ThemeToggle />

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-80">
              <nav className="flex flex-col gap-4">
                <NavItems />
                <div className="flex flex-col gap-4">
                  <AuthButtons />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
