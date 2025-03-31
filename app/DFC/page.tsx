import { GovServicesSection } from "@/DFC/components/Sections/GovServicesSection/GovServicesSection";
import { IntroSection } from "@/DFC/components/Sections/IntroSection/IntroSecton";
import { NitecSection } from "@/DFC/components/Sections/NitecSection/NitecSection";
import { ToolsSection } from "@/DFC/components/Sections/ToolsSection/ToolsSection";

export default function Home() {
    return <>
        <IntroSection />
        <ToolsSection />
        <GovServicesSection />
        <NitecSection />
    </>
}