import React from "react";
import AboutHero from "./AboutHero";
import { WhatWeDo } from "./WhatWeDo";
import { OurStoryImpact } from "./OurStoryImpact";
import { MeetOurTeam } from "./MeetOurTeam";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <div className="">
        <AboutHero />
        <WhatWeDo />
        <OurStoryImpact />
        <MeetOurTeam />
      </div>
    </div>
  );
}
