//import { Zap } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
  <img
    src="/stratora-logo.jpg"
    alt="Stratora logo"
    className="h-10 md:h-12 w-auto"
  />
</div>


          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </a>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 text-sm text-white hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/20">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
