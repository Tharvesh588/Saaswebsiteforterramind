import { Button } from "./ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-50 text-terramind-green rounded-full border border-terramind-green/20">
              🌱 Empowering Indian Farmers with AI
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Grow Smarter with{" "}
              <span className="bg-gradient-to-r from-terramind-green to-sky-blue bg-clip-text text-transparent">
                AI-Powered Farming
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Get personalized crop recommendations based on real-time satellite data, 
              soil health, weather patterns, and market trends - right on your mobile, 
              in your language, even offline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-terramind-green hover:bg-terramind-green/90">
                <Smartphone className="h-4 w-4" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-terramind-green text-terramind-green hover:bg-emerald-50">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl">50K+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div>
                <div className="text-3xl">15+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div>
                <div className="text-3xl">100%</div>
                <div className="text-sm text-gray-600">Offline Ready</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-terramind-green to-sky-blue rounded-2xl blur-3xl opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1715198901384-0b7ff9f37a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwZmllbGQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTEyNTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Smart farming technology"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
