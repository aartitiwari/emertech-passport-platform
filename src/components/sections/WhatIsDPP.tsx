import { Database, LifeBuoy, Eye } from "lucide-react";

export const WhatIsDPP = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What is a Digital Product Passport?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The EU's ESPR regulation mandates Digital Product Passports (DPPs) to enable transparency across product lifecycles. A DPP is a structured digital record that captures essential product information—from composition and origin to environmental impact and circularity potential.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Structured, interoperable product data is essential for compliance, supply chain transparency, and meeting stakeholder expectations around sustainability and accountability.
          </p>
        </div>

        {/* 3-part graphic */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Product Data</h3>
            <p className="text-muted-foreground">
              Comprehensive specifications, materials, certifications, and technical details structured for compliance.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
              <LifeBuoy className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Lifecycle Information</h3>
            <p className="text-muted-foreground">
              Manufacturing, processing, logistics, and transformation events tracked across the supply chain.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-trust-blue/10 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-trust-blue" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Transparency</h3>
            <p className="text-muted-foreground">
              Verified, accessible information for regulators, brands, and consumers ensuring trust and accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
