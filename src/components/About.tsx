import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-[#8B4513]/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#333333]">
            About TerraMind Technologies
          </h2>
          <p className="text-xl text-[#333333]/70">
            Bridging the gap between modern AI technology and grassroots agricultural needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl text-[#333333]">
              Transforming Agriculture Through AI
            </h3>
            <p className="text-lg text-[#333333]/70">
              TerraMind Technologies is an AgriTech startup focused on transforming traditional 
              farming through Artificial Intelligence and data-driven solutions. We empower farmers 
              across India by delivering smart, sustainable, and accessible solutions tailored to 
              local contexts.
            </p>
            <p className="text-lg text-[#333333]/70">
              Our flagship innovation is an <strong className="text-[#2E8B57]">AI-Based Crop Recommendation System</strong> that 
              uses real-time satellite data, IoT soil sensors, localized weather forecasts, historical 
              crop rotation data, and live agri-market trends to provide personalized crop suggestions.
            </p>
            <p className="text-lg text-[#333333]/70">
              Built into a mobile-first platform with multilingual, voice-enabled interface and 
              offline functionality, we ensure accessibility in remote, low-connectivity regions. 
              We deliver more than just crop advice - we offer a decision-making companion for farmers.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57] to-[#00AEEF] rounded-2xl blur-3xl opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwc2F0ZWxsaXRlfGVufDF8fHx8MTc2MTEyNTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Agriculture technology"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-[#2E8B57]/30 hover:border-[#2E8B57] transition-colors">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-[#2E8B57] to-[#00AEEF] rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#333333]">Vision</h3>
              <p className="text-[#333333]/70">
                Democratize agricultural intelligence for every farmer across India
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#8B4513]/30 hover:border-[#8B4513] transition-colors">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-[#8B4513] to-[#2E8B57] rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#333333]">Mission</h3>
              <p className="text-[#333333]/70">
                Leverage AI to drive sustainable and profitable farming practices
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#00AEEF]/30 hover:border-[#00AEEF] transition-colors">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-[#00AEEF] to-[#2E8B57] rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#333333]">Focus</h3>
              <p className="text-[#333333]/70">
                Accessibility, Local Language Support, Offline Usability, and Farmer-Centric Design
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border-2 border-[#C0C0C0]/30">
          <h3 className="text-2xl mb-6 text-center text-[#333333]">Our Goals</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-[#2E8B57] rounded-full" />
              </div>
              <div>
                <h4 className="mb-2 text-[#333333]">Boost Crop Yields</h4>
                <p className="text-[#333333]/70">Help farmers increase productivity through data-driven decisions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-[#2E8B57] rounded-full" />
              </div>
              <div>
                <h4 className="mb-2 text-[#333333]">Improve Profitability</h4>
                <p className="text-[#333333]/70">Maximize returns through market insights and optimal crop selection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-[#2E8B57] rounded-full" />
              </div>
              <div>
                <h4 className="mb-2 text-[#333333]">Preserve Soil Health</h4>
                <p className="text-[#333333]/70">Promote sustainable farming practices for long-term land viability</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-[#2E8B57] rounded-full" />
              </div>
              <div>
                <h4 className="mb-2 text-[#333333]">Empower All Farmers</h4>
                <p className="text-[#333333]/70">Make agriculture a data-empowered profession accessible to everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
