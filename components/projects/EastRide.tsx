import { Car } from "lucide-react";
import { ProjectCard } from "../general/ProjectCard";

export function EastRide() {
  return (
    <ProjectCard 
      imageSide="left"
      Icon={Car}
      category="AI Marketplace"
      headline="EastRide AI Marketplace"
      description="A next-generation automotive marketplace utilizing computer vision and natural language processing to redefine vehicle discovery. The platform features an AI-driven image search engine allowing users to find cars via visual uploads, complemented by an intelligent admin suite that automatically extracts vehicle specifications from photos to streamline the listing process."
      tags={["Next.js", "Cloudinary", "AI", "Mongo DB", "Next-Auth", ]}
      images={[
        "/eastride_home.png",      
        "/eastride_listings.png",      
        "/eastride_contact.png",     
        "/car_details.png",    
        "/book_test_drive.png"    
      ]}
      liveLink="https://east-ride.vercel.app/"
      caseStudyLink="/projects/eastride"
    />
  );
}

