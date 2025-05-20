import Hero from "@/app/about/components/hero";
import CEO from "@/app/about/components/ceo";
import Timeline from "@/app/about/components/timeline";
import Abouts from "@/app/about/components/about";

export default function About() {
  return (
    <div className="bg-white">
      <Hero />

      <Timeline />
      <CEO />
    </div>
  );
}
