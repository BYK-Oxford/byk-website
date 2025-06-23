// Home.jsx

import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";
import Contact from "@/app/home/components/contact";
import Funnel from "@/app/home/components/funnel";
import SEOHead from "@/app/ui/seo";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home | BYK Oxford"
        description="No Templates. Just Tailored Financial Intelligence. See how BYK Oxford saves time and money with expert custom reporting."
        url="https://bykoxford.com"
        image="https://bykoxford.com/logo.png"
      />
      <div>
        <Hero />
        <Stats />
        <Screen />
        <Funnel />
        <Contact />
      </div>
    </>
  );
}
