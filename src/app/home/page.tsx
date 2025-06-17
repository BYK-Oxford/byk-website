// Home.jsx

import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";
import WorldMap from "@/app/home/components/map";
import Contact from "@/app/home/components/contact";
import Funnel from "@/app/home/components/funnel";

export default function Home() {
  return (
    <div>
      <WorldMap />
      <Hero />
      <Stats />
      <Screen />
      <Funnel />
      <Contact />
    </div>
  );
}
