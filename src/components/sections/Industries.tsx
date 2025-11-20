import { Hammer, Box, CircleDot, Shirt, Armchair, Battery } from "lucide-react";

export const Industries = () => {
  const industries = [
    {
      icon: Hammer,
      title: "Iron & Steel",
      features: [
        "Composition traceability",
        "GHG reporting",
        "Circularity metrics"
      ]
    },
    {
      icon: Box,
      title: "Aluminium",
      features: [
        "Origin tracking",
        "Recycled content proof",
        "Energy footprint"
      ]
    },
    {
      icon: CircleDot,
      title: "Tyres & Rubber",
      features: [
        "Natural rubber sourcing",
        "Deforestation mapping",
        "Tyre performance & durability"
      ]
    },
    {
      icon: Shirt,
      title: "Textiles & Apparel",
      features: [
        "Fibre origin",
        "Processing transparency",
        "Certifications (GOTS, Oeko-Tex)"
      ]
    },
    {
      icon: Armchair,
      title: "Furniture & Wood",
      features: [
        "FSC/PEFC mapping",
        "EUDR compliance",
        "Material composition"
      ]
    },
    {
      icon: Battery,
      title: "Batteries & Electronics",
      features: [
        "Chemistry",
        "Carbon footprint",
        "Repairability and reuse metrics"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-soft-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Purpose-Built for Each ESPR-Targeted Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep industry expertise meets regulatory requirements — tailored solutions for the sectors most impacted by Digital Product Passport mandates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {industry.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-xl bg-card border-2 border-primary/20 text-center">
          <p className="text-lg text-foreground font-medium">
            Each industry module is designed with specific compliance requirements, data structures, and reporting formats pre-configured — reducing implementation time and ensuring accuracy from day one.
          </p>
        </div>
      </div>
    </section>
  );
};
