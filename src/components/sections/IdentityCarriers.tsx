import { QrCode, Nfc, Radio, Link } from "lucide-react";

export const IdentityCarriers = () => {
  const carriers = [
    {
      icon: QrCode,
      title: "QR Codes",
      description: "Widely accessible and cost-effective solution for instant product information access via smartphone cameras.",
      useCases: "Ideal for consumer goods, packaging, and retail environments"
    },
    {
      icon: Nfc,
      title: "NFC Tags",
      description: "Near-field communication enables secure, contactless data exchange with tap authentication.",
      useCases: "Perfect for premium products, authentication, and brand protection"
    },
    {
      icon: Radio,
      title: "RFID",
      description: "Radio-frequency identification for automated tracking and logistics throughout the supply chain.",
      useCases: "Essential for warehouse management, inventory, and bulk processing"
    },
    {
      icon: Link,
      title: "GS1 Digital Link",
      description: "Industry-standard digital identifiers that work across platforms and systems globally.",
      useCases: "Critical for cross-border compliance and interoperability"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-soft-sky to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Identity & Carriers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A DPP becomes accessible through physical identifiers attached to products. These carriers bridge the physical and digital worlds, enabling stakeholders to access verified product information instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {carriers.map((carrier, index) => {
            const Icon = carrier.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {carrier.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {carrier.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-primary font-medium">
                    {carrier.useCases}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-xl bg-accent/50 border border-border text-center">
          <p className="text-foreground font-medium">
            Why it matters for compliance: The EU requires machine-readable data carriers on products. Our platform supports all standard formats, ensuring your products meet regulatory requirements while providing flexibility in implementation.
          </p>
        </div>
      </div>
    </section>
  );
};
