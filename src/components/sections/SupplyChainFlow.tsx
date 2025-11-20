import { Factory, Package, Building2, Store, User, ArrowRight } from "lucide-react";

export const SupplyChainFlow = () => {
  const stakeholders = [
    { icon: Factory, label: "Suppliers" },
    { icon: Package, label: "Manufacturers" },
    { icon: Building2, label: "Assemblers" },
    { icon: Store, label: "Brands" },
    { icon: Store, label: "Retailers" },
    { icon: User, label: "Consumers" }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How DPP Data Flows Across the Supply Chain
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A DPP is only possible when every stakeholder contributes secure, structured, and verified data. Our platform orchestrates this data exchange safely and efficiently.
          </p>
        </div>

        {/* Horizontal flow diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Desktop flow */}
            <div className="hidden lg:flex items-center justify-between gap-4">
              {stakeholders.map((stakeholder, index) => {
                const Icon = stakeholder.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all flex items-center justify-center">
                        <Icon className="w-9 h-9 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground text-center">
                        {stakeholder.label}
                      </span>
                    </div>
                    {index < stakeholders.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet flow */}
            <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-8">
              {stakeholders.map((stakeholder, index) => {
                const Icon = stakeholder.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all flex items-center justify-center">
                      <Icon className="w-9 h-9 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {stakeholder.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info box */}
          <div className="mt-16 p-8 rounded-xl bg-soft-sky border border-border">
            <p className="text-center text-lg text-foreground font-medium">
              Each stakeholder adds verified data at their stage, creating a complete, trustworthy digital record that travels with the product throughout its entire lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
