// ToolsSectionServer.tsx
import { getCarouselLogos } from "@/utils/getCarouselLogos";
import { ToolsSectionClient } from "./ToolsSectionClient";

export default function ToolsSectionServer() {
    const logos = getCarouselLogos();
    return <ToolsSectionClient logos={logos} />;
}
