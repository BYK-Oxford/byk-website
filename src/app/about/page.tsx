import Hero from "@/app/about/components/hero";
import CEO from "@/app/about/components/ceo";
import Values from "@/app/about/components/values";
import Mission from "@/app/about/components/mission";

export default function About() {
  return (
    <div className="bg-white">
      <Hero />
      <Mission />
      <Values />
      <CEO />
    </div>
  );
}
