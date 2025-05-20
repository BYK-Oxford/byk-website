import Hero from "@/app/about/components/hero";
import CEO from "@/app/about/components/ceo";
import Timeline from "@/app/about/components/timeline";
import Values from "@/app/about/components/values";

export default function About() {
  return (
    <div className="bg-white">
      <Hero />
      <Values />
      <Timeline />
      <CEO />
    </div>
  );
}
