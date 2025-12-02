import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ResumePreview } from "@/components/sections/resume-preview";
import { ATSAnalysis } from "@/components/sections/ats-analysis";
import { TemplatesPreview } from "@/components/sections/templates-preview";
import { CompanyLogos } from "@/components/sections/company-logos";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Hero />
            <HowItWorks />
            <ResumePreview />
            <ATSAnalysis />
            <TemplatesPreview />
            <CompanyLogos />
            <Pricing />
        </div>
    );
}
