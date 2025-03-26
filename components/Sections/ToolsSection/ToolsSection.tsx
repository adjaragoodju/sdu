import { Carousel } from "@/components/Carousel/Carousel";
import { getCarouselLogos } from "@/utils/getCarouselLogos";
import "./ToolsSection.scss";

export const ToolsSection = () => {
  const logos = getCarouselLogos();
  return (
    <section
      id="tools"
      className="tools"
    >
      <h2 className="tools_title">Используем Open-Source инструменты</h2>
      <Carousel logos={logos} />
    </section>
  );
};
