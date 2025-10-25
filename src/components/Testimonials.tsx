import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Wheat Farmer, Punjab",
    content: "TerraMind told me exactly when to plant based on weather and soil data. My yield increased by 30% this season. The voice feature in Punjabi is so easy to use!",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Lakshmi Devi",
    role: "Small Farm Owner, Tamil Nadu",
    content: "I can use it even without internet! The pest detection saved my tomato crop. Just took a photo and got instant advice in Tamil.",
    rating: 5,
    initials: "LD",
  },
  {
    name: "Suresh Patil",
    role: "Sugarcane Farmer, Maharashtra",
    content: "Market price alerts helped me sell at the right time. Made ₹50,000 extra profit this year. Every farmer should use this!",
    rating: 5,
    initials: "SP",
  },
  {
    name: "Anita Sharma",
    role: "Organic Farmer, Uttarakhand",
    content: "The soil sensor integration shows exactly what nutrients my land needs. No more guessing or wasting money on wrong fertilizers.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Mohammed Ismail",
    role: "Rice Farmer, Kerala",
    content: "Crop rotation suggestions from TerraMind improved my soil health dramatically. The Malayalam voice assistant feels like talking to a farming expert.",
    rating: 5,
    initials: "MI",
  },
  {
    name: "Ramesh Yadav",
    role: "Farmer Cooperative Leader, Bihar",
    content: "We use the Cooperative plan for 150 farmers. Bulk insights help us plan together. Government scheme alerts are very helpful!",
    rating: 5,
    initials: "RY",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#333333]">
            Trusted by Farmers Across India
          </h2>
          <p className="text-xl text-[#333333]/70">
            Real stories from farmers who transformed their farming with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-[#C0C0C0]/30 hover:border-[#2E8B57] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#00AEEF] text-[#00AEEF]" />
                  ))}
                </div>
                
                <p className="text-[#333333]/80">{testimonial.content}</p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-[#C0C0C0]/30">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-[#2E8B57] to-[#8B4513] text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#333333]">{testimonial.name}</div>
                    <div className="text-sm text-[#333333]/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
