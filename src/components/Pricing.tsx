import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "For individual small-scale farmers",
    features: [
      "AI crop recommendations",
      "Basic weather forecasts",
      "Voice interface (3 languages)",
      "Offline mode",
      "Pest detection (5 scans/month)",
      "Community support",
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Premium",
    price: "₹499/year",
    description: "For progressive farmers & medium farms",
    features: [
      "Everything in Basic",
      "Advanced satellite analytics",
      "IoT sensor integration",
      "All 15+ languages",
      "Unlimited pest detection",
      "Market price alerts",
      "Crop rotation planning",
      "Priority support",
      "Personalized farm insights",
    ],
    popular: true,
    cta: "Start 30-Day Trial",
  },
  {
    name: "Cooperative",
    price: "Custom",
    description: "For farmer groups & agri-cooperatives",
    features: [
      "Everything in Premium",
      "Multi-farm management",
      "Bulk procurement insights",
      "Custom training sessions",
      "Dedicated account manager",
      "API access for integration",
      "Custom reporting",
      "On-ground support visits",
      "Government scheme alerts",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-b from-white to-[#2E8B57]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#333333]">
            Affordable Plans for Every Farmer
          </h2>
          <p className="text-xl text-[#333333]/70">
            Start free, upgrade when you need more. No hidden costs, no complicated terms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-[#2E8B57] border-2 shadow-xl scale-105"
                  : "border-2 border-[#C0C0C0]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#2E8B57] text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl mb-2 text-[#333333]">{plan.name}</h3>
                <p className="text-[#333333]/70 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl text-[#2E8B57]">{plan.price}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="h-5 w-5 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#2E8B57]" />
                    </div>
                    <span className="text-[#333333]/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-8">
                <Button
                  className={`w-full ${plan.popular ? 'bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white' : 'border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57]/10'}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
