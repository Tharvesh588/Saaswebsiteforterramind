import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-terramind-green to-sky-blue rounded-lg flex items-center justify-center text-white">
                🌾
              </div>
              <span className="text-white">TerraMind Technologies</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Nagai Branch
              <br />
              Revolutionizing agriculture with AI-driven intelligence.
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Vision:</strong> Democratize agricultural intelligence for every farmer.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Language Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Farming Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Team</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="text-white">Tharvesh Muhaideen A</strong>
                <br />Co-Founder
              </li>
              <li>
                <strong className="text-white">Kiruthika B</strong>
                <br />Co-Founder
              </li>
              <li>
                <strong className="text-white">Keethivasan R</strong>
                <br />Co-Founder
              </li>
              <li className="pt-2 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919994021042" className="hover:text-white transition-colors">
                  +91-9994021042
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:tharvesh2026@gmail.com" className="hover:text-white transition-colors">
                  tharvesh2026@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 TerraMind Technologies, Nagai. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/tharvesh_muhaideen" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/tharvesh2005" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:tharvesh2026@gmail.com" 
              className="hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
