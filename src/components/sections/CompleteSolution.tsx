import { Button } from "@/components/ui/button";
import { Database, GitBranch, CheckCircle, Eye } from "lucide-react";

export const CompleteSolution = () => {
  const features = [
    {
      icon: Database,
      title: "Product Data Management",
      description: "Centralize specifications, materials, certifications, and technical information in a structured, compliance-ready format. Import from existing PLM/ERP systems or build from scratch."
    },
    {
      icon: GitBranch,
      title: "Lifecycle Traceability",
      description: "Track manufacturing, processing, logistics, and transformation events across your supply chain. Capture verified data from each stakeholder with secure supplier onboarding."
    },
    {
      icon: CheckCircle,
      title: "Compliance Engine",
      description: "Automated validation against ESPR, CSRD, Battery Regulation, and EUDR requirements. Stay ahead of evolving regulations with built-in regulatory updates."
    },
    {
      icon: Eye,
      title: "Consumer-Facing Passport View",
      description: "Beautiful, branded product passports accessible via QR, NFC, or RFID. Provide transparency to customers while protecting sensitive supply chain information."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A Complete Digital Product Passport Solution
          </h2>
          <p className="text-xl text-muted-foreground">
            From Data to Compliance to Consumer Transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};
