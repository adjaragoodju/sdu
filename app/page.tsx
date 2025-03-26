import { DevelopmentsSection } from "@/components/Sections/DevelopmentsSection/DevelopmentsSection";
import { IntroSection } from "@/components/Sections/IntroSection/IntroSection";
import { SduSection } from "@/components/Sections/SduSection/SduSection";
import { ToolsSection } from "@/components/Sections/ToolsSection/ToolsSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ToolsSection />
      <DevelopmentsSection />
      <SduSection />
    </>
  );
}
