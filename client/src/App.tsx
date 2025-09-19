import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { AuthProvider } from "./lib/auth";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DemoMode from "./pages/DemoMode";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/not-found";

const Router = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route 
      path="/dashboard" 
      component={() => (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )} 
    />
    <Route path="/demo" component={DemoMode} />
    <Route 
      path="/learn" 
      component={() => (
        <ProtectedRoute>
          <Learn />
        </ProtectedRoute>
      )} 
    />
    <Route path="/signin" component={SignIn} />
    <Route component={NotFound} />
  </Switch>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider delayDuration={0}>
        <Router />
        <Toaster />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
