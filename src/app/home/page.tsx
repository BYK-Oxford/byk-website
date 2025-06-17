// Home.jsx

import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";
import Contact from "@/app/home/components/contact";
import FunnelBody from "@/app/home/components/funnelBody";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Screen />
      <FunnelBody />
      <Contact />
    </div>
  );
}
