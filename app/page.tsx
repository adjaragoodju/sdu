import "@/SDU/styles/SDU.scss";
import { Footer } from "@/SDU/components/Footer/Footer";
import { Header } from "@/SDU/components/Header/Header";
import { AchievementsSection } from "@/SDU/components/Sections/AchievementsSection/AchievementsSection";
import { DevelopmentsSection } from "@/SDU/components/Sections/DevelopmentsSection/DevelopmentsSection";
import { FeedbackSection } from "@/SDU/components/Sections/FeedbackSection/FeedbackSection";
import { IntroSection } from "@/SDU/components/Sections/IntroSection/IntroSection";
import { SduSection } from "@/SDU/components/Sections/SduSection/SduSection";
import ToolsSectionServer from "@/SDU/components/Sections/ToolsSection/ToolsSectionServer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <ToolsSectionServer />
                <DevelopmentsSection />
                <SduSection />
                <AchievementsSection />
                <FeedbackSection /></main>
            <Footer />
        </>
    );
}
