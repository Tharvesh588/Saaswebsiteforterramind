import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C0C0C0]/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-[#2E8B57] to-[#8B4513] rounded-lg flex items-center justify-center text-white">
              🌾
            </div>
            <span className="text-xl text-[#333333]">TerraMind Technologies</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
              Features
            </a>
            <a href="#about" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
              About
            </a>
            <a href="#team" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
              Team
            </a>
            <a href="#pricing" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
              Testimonials
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-[#333333] hover:text-[#2E8B57] hover:bg-[#2E8B57]/10">Sign In</Button>
            <Button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#333333]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#C0C0C0]/20">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
                Features
              </a>
              <a href="#about" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
                About
              </a>
              <a href="#team" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
                Team
              </a>
              <a href="#pricing" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-[#333333]/70 hover:text-[#2E8B57] transition-colors">
                Testimonials
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#C0C0C0]/20">
                <Button variant="ghost" className="text-[#333333] hover:text-[#2E8B57] hover:bg-[#2E8B57]/10">Sign In</Button>
                <Button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
