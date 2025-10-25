import { Satellite, Cloud, Sprout, MessageSquare, Wifi, Bug, TrendingUp, Languages } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Satellite,
    title: "Satellite & IoT Sensors",
    description: "Real-time data from satellites and IoT soil sensors to monitor soil health, moisture levels, and nutrient content.",
  },
  {
    icon: Cloud,
    title: "Localized Weather Forecasts",
    description: "Hyper-local weather predictions tailored to your farm location for better planning and risk management.",
  },
  {
    icon: Sprout,
    title: "AI Crop Recommendations",
    description: "Personalized crop suggestions based on soil type, climate, historical data, and current market demand.",
  },
  {
    icon: MessageSquare,
    title: "Voice & Chat Interface",
    description: "Interact in your native language through voice commands or chat - no reading or typing required.",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "Full functionality even in low-connectivity areas. Sync data when connection is available.",
  },
  {
    icon: Bug,
    title: "Pest & Disease Detection",
    description: "AI-powered image analysis identifies crop diseases and pests instantly from a photo.",
  },
  {
    icon: TrendingUp,
    title: "Market Trends & Pricing",
    description: "Live agri-market trends help you choose crops with the best profitability potential.",
  },
  {
    icon: Languages,
    title: "15+ Indian Languages",
    description: "Multilingual support ensuring every farmer can use the platform comfortably.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#333333]">
            Smart Farming at Your Fingertips
          </h2>
          <p className="text-xl text-[#333333]/70">
            Cutting-edge AI technology designed for Indian farmers, accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 border-[#C0C0C0]/30 hover:border-[#2E8B57] transition-colors hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-[#2E8B57] to-[#00AEEF] rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl text-[#333333]">{feature.title}</h3>
                  <p className="text-[#333333]/70">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
