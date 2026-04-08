"use client";

import { EastRide } from '@/components/projects/EastRide';
import { EastSideUrban } from '@/components/projects/EastSide';
import { SixpointProject } from '@/components/projects/Sixpoint';
import { SkillBridge } from '@/components/projects/SkillBridge';
import { Trendify } from '@/components/projects/Step254';

const SelectedProjects = () => {
  return (
    <section id="projects" className="w-full py-20  ">
      <div className=" mx-auto padded">
        
        {/* HEADER SECTION*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/*  Small Badge*/}
          <div className="lg:col-span-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase text-xs">
              Notable Projects
            </span>
          </div>

          {/* 2. Main Heading (Middle) */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-foreground">
              Architecting Digital <br /> 
              <span className="text-muted-foreground">Experiences with Precision.</span>
            </h2>
          </div>

          {/* 3. Description (Right) */}
          <div className="lg:col-span-3 lg:mt-2">
            <p className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-6">
              A showcase of technical craftsmanship where performance meets 
              pixel-perfect design. I build applications that are as fast 
              as they are functional.
            </p>
          </div>

        </div>

       <SixpointProject />
       <SkillBridge />
       <EastRide/>
       <EastSideUrban/> 
       <Trendify />

      </div>
    </section>
  )
}

export default SelectedProjects;
