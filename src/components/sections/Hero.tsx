import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown } from "lucide-react";
import heroDiagram from "@/assets/dpp-hero-diagram.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-soft-sky to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wide text-primary uppercase">
                Emertech Innovations
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Digital Product Passport Platform for{" "}
              <span className="text-primary">ESPR</span> &{" "}
              <span className="text-secondary">Global Sustainability</span> Compliance
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A unified system that helps manufacturers meet EU's Digital Product Passport requirements by structuring product data, lifecycle information, and transparency across supply chains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-accent transition-all"
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download Overview
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <img 
                src={heroDiagram} 
                alt="Digital Product Passport Flow Diagram" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements for depth */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
