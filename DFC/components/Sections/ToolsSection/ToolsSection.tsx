import { Container } from "@/SDU/components/Container/Container";
import "./ToolsSection.scss";

export const ToolsSection = () => {
    return (
        <section className="tools">
            <Container>
                <div className="tools_content">
                    <h2 className="tools_title">Tools</h2>
                    <p className="tools_description">
                        Discover the tools that can help you achieve your goals.
                    </p>
                    <div className="tools_grid">
                        <div className="tools_card">Tool 1</div>
                        <div className="tools_card">Tool 2</div>
                        <div className="tools_card">Tool 3</div>
                        <div className="tools_card">Tool 4</div>
                    </div>
                </div>
            </Container>

        </section>
    );
}