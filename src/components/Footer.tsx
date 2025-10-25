import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#333333] text-[#C0C0C0] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-[#2E8B57] to-[#8B4513] rounded-lg flex items-center justify-center text-white">
                🌾
              </div>
              <span className="text-white">TerraMind Technologies</span>
            </div>
            <p className="text-sm text-[#C0C0C0]/80 mb-4">
              Nagai Branch
              <br />
              Revolutionizing agriculture with AI-driven intelligence.
            </p>
            <p className="text-sm text-[#C0C0C0]/80">
              <strong className="text-[#2E8B57]">Vision:</strong> Democratize agricultural intelligence for every farmer.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Download App</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">API Access</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Language Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#testimonials" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Farming Guides</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Team</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="text-[#2E8B57]">Tharvesh Muhaideen A</strong>
                <br /><span className="text-[#C0C0C0]/80">Co-Founder</span>
              </li>
              <li>
                <strong className="text-[#2E8B57]">Kiruthika B</strong>
                <br /><span className="text-[#C0C0C0]/80">Co-Founder</span>
              </li>
              <li>
                <strong className="text-[#2E8B57]">Keethivasan R</strong>
                <br /><span className="text-[#C0C0C0]/80">Co-Founder</span>
              </li>
              <li className="pt-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#00AEEF]" />
                <a href="tel:+919994021042" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">
                  +91-9994021042
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00AEEF]" />
                <a href="mailto:tharvesh2026@gmail.com" className="text-[#C0C0C0]/80 hover:text-[#2E8B57] transition-colors">
                  tharvesh2026@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#C0C0C0]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#C0C0C0]/60">
            © 2025 TerraMind Technologies, Nagai. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/tharvesh_muhaideen" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0C0C0]/80 hover:text-[#00AEEF] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/tharvesh2005" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0C0C0]/80 hover:text-[#00AEEF] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:tharvesh2026@gmail.com" 
              className="text-[#C0C0C0]/80 hover:text-[#00AEEF] transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
