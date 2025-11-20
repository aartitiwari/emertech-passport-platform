import { Hero } from "@/components/sections/Hero";
import { WhatIsDPP } from "@/components/sections/WhatIsDPP";
import { DPPComponents } from "@/components/sections/DPPComponents";
import { SupplyChainFlow } from "@/components/sections/SupplyChainFlow";
import { IdentityCarriers } from "@/components/sections/IdentityCarriers";
import { CompleteSolution } from "@/components/sections/CompleteSolution";
import { Industries } from "@/components/sections/Industries";
import { WhyEmertech } from "@/components/sections/WhyEmertech";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatIsDPP />
      <DPPComponents />
      <SupplyChainFlow />
      <IdentityCarriers />
      <CompleteSolution />
      <Industries />
      <WhyEmertech />
      <FinalCTA />
    </main>
  );
};

export default Index;
