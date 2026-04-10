import { ShoppingBag } from "lucide-react";
import { ProjectCard } from "../general/ProjectCard";

export function EastSideUrban() {
  return (
    <ProjectCard 
      imageSide="right"
      Icon={ShoppingBag}
      category="E-commerce Marketplace"
      headline="East Side Urban"
      description="A sophisticated retail platform engineered for high-performance apparel commerce. The implementation features a centralized state management system to handle complex product variations, dynamic inventory filtering, and a secure multi-step checkout pipeline, all optimized for sub-second transitions between product discovery and conversion."
      tags={["React", "Node.js", "MongoDB", "Redux", "Tailwind"]}
      images={[
        "/eastside_home.png",     // Landing page
        "/eastside_shop.png",     // Product grid with filters
        "/eastside_product.png",  // Single product view
        "/eastside_cart.png"      // Checkout flow
      ]}
      liveLink="https://east-side-urban-frontend.onrender.com/"
      caseStudyLink="/projects/eastside"
    />
  );
}

