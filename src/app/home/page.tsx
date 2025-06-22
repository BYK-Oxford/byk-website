// Home.jsx

import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";
import Contact from "@/app/home/components/contact";
import Funnel from "@/app/home/components/funnel";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Screen />
      <Funnel />
      <Contact />
    </div>
  );
}
