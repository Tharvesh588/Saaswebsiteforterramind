import { Button } from "./ui/button";
import { Smartphone, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-terramind-green via-earth-brown to-sky-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623211267197-b8b4bc48a0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkfGVufDF8fHx8MTc2MTEyNTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indian farmer in field"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Join 50,000+ Farmers Growing Smarter
          </h2>
          
          <p className="text-xl text-white/90">
            Download TerraMind today and start making data-driven decisions for your farm. 
            Available in 15+ Indian languages, works offline, completely free to start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2 bg-white text-terramind-green hover:bg-white/90">
              <Smartphone className="h-4 w-4" />
              Download for Android
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20 gap-2">
              <Phone className="h-4 w-4" />
              Call +91-9994021042
            </Button>
          </div>

          <p className="text-sm text-white/80">
            Free forever • No credit card needed • Works offline
          </p>
        </div>
      </div>
    </section>
  );
}
