import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-deep-ocean relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Your Digital Product Passport Strategy?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            We help manufacturers achieve compliance, transparency, and future-ready sustainability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Consultation
            </Button>
          </div>

          <div className="pt-12 border-t border-white/20 mt-12">
            <p className="text-white/80">
              Emertech Innovations — Digital Product Passport & ESG Compliance Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
