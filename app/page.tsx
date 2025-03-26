import { AchievementsSection } from "@/components/Sections/AchievementsSection/AchievementsSection";
import { DevelopmentsSection } from "@/components/Sections/DevelopmentsSection/DevelopmentsSection";
import { FeedbackSection } from "@/components/Sections/FeedbackSection/FeedbackSection";
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
      <AchievementsSection />
      <FeedbackSection />
    </>
  );
}
