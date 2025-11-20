import { Button } from "@/components/ui/button";
import { BookOpen, Plug, Users, Blocks } from "lucide-react";

export const WhyEmertech = () => {
  const reasons = [
    {
      icon: BookOpen,
      title: "Deep Regulatory Understanding",
      description: "Our team stays ahead of evolving regulations including ESPR, EUDR, CSRD, and Battery Regulation. We translate complex legal requirements into actionable technical specifications."
    },
    {
      icon: Plug,
      title: "ERP & PLM Integration-Ready",
      description: "Seamlessly connect with SAP, Oracle, Infor, Microsoft Dynamics, and other enterprise systems. No data silos — our platform works with your existing infrastructure."
    },
    {
      icon: Users,
      title: "Supplier Onboarding Expertise",
      description: "Years of experience managing India–EU supply chains. We help you bring your suppliers online with structured data contribution, training, and verification protocols."
    },
    {
      icon: Blocks,
      title: "Modular Architecture with Blockchain",
      description: "Choose the level of verification you need. Optional blockchain-backed immutability for critical data points, with flexible deployment models for different compliance levels."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Emertech Innovations?
          </h2>
          <p className="text-lg text-muted-foreground">
            Credibility built on expertise, technology, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-trust-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 hover:bg-accent transition-all"
          >
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};
