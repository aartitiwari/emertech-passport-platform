import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-soft-sky to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wide text-primary uppercase">
                Emertech Innovations
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Digital Product Passport Platform for{" "}
              <span className="text-primary">ESPR</span> &{" "}
              <span className="text-growth-green">Global Sustainability</span> Compliance
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
        </div>
      </div>
    </section>
  );
};
