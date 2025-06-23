import Hero from "@/app/about/components/hero";
import CEO from "@/app/about/components/ceo";
import Values from "@/app/about/components/values";
import Mission from "@/app/about/components/mission";
import SEOHead from "@/app/ui/seo";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | BYK Oxford"
        description="Learn about BYK Oxford’s mission to turn complex financial data into clear business decisions, backed by industry expertise and precision."
        url="https://bykoxford.com/about"
        image="https://bykoxford.com/logo.png"
      />

      <div className="bg-white">
        <Hero />
        <Mission />
        <Values />
        <CEO />
      </div>
    </>
  );
}
