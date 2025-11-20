import { Package, Route, Leaf, Shield } from "lucide-react";

export const DPPComponents = () => {
  const components = [
    {
      icon: Package,
      title: "Product Data",
      items: [
        "Composition",
        "Materials",
        "Origin",
        "Certifications"
      ],
      color: "primary"
    },
    {
      icon: Route,
      title: "Lifecycle Information",
      items: [
        "Manufacturing steps",
        "Processing details",
        "Logistics data",
        "Transformation events"
      ],
      color: "secondary"
    },
    {
      icon: Leaf,
      title: "Environmental & Sustainability Metrics",
      items: [
        "Durability",
        "Repairability",
        "Carbon footprint",
        "Circularity requirements"
      ],
      color: "growth-green"
    },
    {
      icon: Shield,
      title: "Safe Data Sharing Infrastructure",
      items: [
        "Supplier inputs",
        "Documentation",
        "Interoperability",
        "Trust & verification"
      ],
      color: "trust-blue"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-soft-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Makes Up a Digital Product Passport?
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are the building blocks of a DPP — each component contributes to complete product transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-${component.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${component.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {component.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-[72px]">
                  {component.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
