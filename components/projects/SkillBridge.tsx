import { GraduationCap } from "lucide-react";
import { ProjectCard } from "../general/ProjectCard";

export function SkillBridge() {
  return (
    <ProjectCard 
      imageSide="right"
      Icon={GraduationCap}
      category="EdTech Solution"
      headline="SkillBridge LMS"
      description="A scalable educational ecosystem engineered to facilitate structured learning for over 5,000 active students. The architecture integrates a complex curriculum management engine with real-time progress persistence and a low-latency video delivery pipeline, ensuring an uninterrupted learning flow across diverse network conditions."
      tags={["Next.js", "Tailwind CSS", "PostgreSQL", "S3", "Mpesa"]}
      images={[
        "/skillbridge_home.png",      
      ]}
      liveLink="https://skilly-bridge.vercel.app/"
      caseStudyLink="/projects/skillbridge"
    />
  );
}

