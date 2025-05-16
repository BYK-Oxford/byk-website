// Home.jsx
import React from "react";
import Hero from "@/app/home/components/hero";
import Stats from "@/app/home/components/stats";
import Screen from "@/app/home/components/screen";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats/>
      <Screen/>
    </div>
  );
}