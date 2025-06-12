// Home.jsx
import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";
import Grid from "@/app/home/components/grid";
import Contact from "@/app/home/components/contact";
import Funnel from "@/app/home/components/funnel";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Screen />
      <Funnel />
      <Grid />
      <Contact />
    </div>
  );
}
