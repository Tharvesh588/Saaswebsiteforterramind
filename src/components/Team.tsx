import { Card, CardContent } from "./ui/card";
import { Linkedin, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Tharvesh Muhaideen A",
    role: "Initiator & Chief Technology Officer (CTO)",
    initials: "TM",
  },
  {
    name: "Kiruthika B",
    role: "Director & Chief Executive Officer (CEO)",
    initials: "KB",
  },
  {
    name: "Afiret Mohsen M",
    role: "Director & Chief Creative Officer (CCO)",
    initials: "AM",
  },
  {
    name: "Hariharan S",
    role: "Research & Development Engineer",
    initials: "HS",
  },
  {
    name: "Bhawana K.R",
    role: "Document & Compliance Manager",
    initials: "BK",
  },
  {
    name: "Keerthivasan R",
    role: "Marketing & Business Analyst",
    initials: "KR",
  },
];

export function Team() {
  const handleCardClick = () => {
    window.open("https://tharvesh588.github.io", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="team" className="py-20 sm:py-32 bg-gradient-to-b from-white to-[#8B4513]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#333333]">
            Meet Our Team
          </h2>
          <p className="text-xl text-[#333333]/70">
            The passionate minds behind TerraMind Technologies, working together to revolutionize agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              onClick={handleCardClick}
              className="border-2 border-[#C0C0C0]/30 hover:border-[#2E8B57] transition-all duration-300 hover:shadow-xl cursor-pointer group"
            >
              <CardContent className="p-8 space-y-4 text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2E8B57] to-[#8B4513] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">{member.initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl text-[#333333] mb-2 group-hover:text-[#2E8B57] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#333333]/70 text-sm">
                    {member.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C0C0C0]/30">
                  <div className="flex items-center justify-center gap-2 text-[#00AEEF] text-sm group-hover:text-[#2E8B57] transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span>View Profile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#333333]/60 text-sm">
            Click on any team member to visit our portfolio website
          </p>
        </div>
      </div>
    </section>
  );
}
