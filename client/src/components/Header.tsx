import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TrendingUp, User, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignIn?: () => void;
  onSignUp?: () => void;
  onSignOut?: () => void;
}

export function Header({ isAuthenticated = false, onSignIn, onSignUp, onSignOut }: HeaderProps) {
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
          <Button
            variant="ghost"
            onClick={onSignIn}
            data-testid="button-sign-in"
            className="hover-elevate"
          >
            Sign In
          </Button>
          <Button
            onClick={onSignUp}
            data-testid="button-sign-up"
            className="hover-elevate active-elevate-2"
          >
            Get Started
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="ghost"
            size="icon"
            data-testid="button-profile"
            className="hover-elevate"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            onClick={onSignOut}
            data-testid="button-sign-out"
            className="hover-elevate"
          >
            Sign Out
          </Button>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center space-x-2 hover-elevate rounded-md px-2 py-1">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AI Stock Mentor</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavItems />
        </nav>

        {/* Desktop Auth & Theme */}
        <div className="hidden md:flex items-center space-x-2">
          <AuthButtons />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavItems />
                <div className="border-t pt-4 space-y-2">
                  <AuthButtons />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}