"use client";
import ServiceContainer from "@/app/service/components/serviceContainer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SEOHead from "@/app/ui/seo";
export default function Service() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const card1 = useRef<HTMLDivElement | null>(null);
  const card2 = useRef<HTMLDivElement | null>(null);
  const card3 = useRef<HTMLDivElement | null>(null);
  const card4 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (card1.current) {
      gsap.fromTo(
        card1.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card1.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (card2.current) {
      gsap.fromTo(
        card2.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card2.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (card3.current) {
      gsap.fromTo(
        card3.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card3.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (card4.current) {
      gsap.fromTo(
        card4.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card4.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <SEOHead
        title="Services | BYK Oxford"
        description="Explore custom financial modelling, system implementation, M&A support, and more."
        url="https://bykoxford.com/services"
        image="https://bykoxford.com/logo.png"
      />
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2
              ref={headingRef}
              className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl sm:text-balance"
            >
              Expert-Driven Services
            </h2>
            <p
              ref={paragraphRef}
              className="mx-auto mt-6 max-w-2xl text-md font-medium text-pretty text-gray-500 sm:text-md"
            >
              From planning to deployment, our services are designed to support
              your goals at every stage. We collaborate closely to deliver
              reliable, scalable solutions that solve real-world challenges and
              drive long-term success.
            </p>
          </div>
          <ServiceContainer
            heading="Financial Modelling"
            description="We build dynamic, tailored financial models that empower confident decision-making. Whether you are preparing for investment, scaling operations, or planning for multiple scenarios, our models offer clarity, flexibility, and precision."
            includedFeatures={[
              "3-statement models",
              "Cash flow forecasts",
              "Budgeting tools",
              "Valuation Models",
              "Investor-ready projections",
            ]}
            label="Precision & clarity"
            labelBody="Unlock actionable insights with custom-built financial models."
            tag="Designed to guide your business decisions with confidence."
          />

          <ServiceContainer
            heading="System Implementation & Data Migration"
            description="We support businesses through both pre- and post-system implementation—ensuring financial data flows accurately and seamlessly across platforms. From ERP rollouts to custom reporting systems, we safeguard data integrity, minimize disruption, and ensure your systems work for your unique processes."
            includedFeatures={[
              "Implementation advisory",
              "Data Cleansing",
              "Migration strategy",
              "Reconciliation",
              "Post-Go-Live support",
            ]}
            label="Seamless integration"
            labelBody="Ensuring smooth data flow between your systems, always."
            tag="Minimizing downtime and maximizing data integrity."
          />

          <ServiceContainer
            heading="Due Diligence & M&A Support"
            description="Navigate complex transactions with confidence. We offer financial due diligence and analysis for mergers, acquisitions, and investment rounds. Our team identifies risks, validates assumptions, and creates models that reflect realistic post-deal scenarios."
            includedFeatures={[
              "Buyer/Seller-side due diligence",
              "Quality of earnings",
              "Synergy modelling",
              "Deal structuring support",
            ]}
            label="Informed decisions"
            labelBody="Providing comprehensive analysis for confident deal-making."
            tag="Mitigate risks and maximize value in every transaction."
          />

          <ServiceContainer
            heading="Business-as-Usual (BAU) Support & Interim Cover"
            description="Need temporary financial expertise during a team transition or leave? We provide flexible, short-term cover for finance roles—ensuring business continuity and informed decision-making during periods of attrition or organizational change."
            includedFeatures={[
              "Interim CFO/controller support",
              "Financial analysis",
              "Reporting continuity",
              "Team onboarding assistance",
            ]}
            label="Reliable continuity"
            labelBody="Supporting your finance team whenever you need it most."
            tag="Flexible, expert cover to keep your business moving forward."
          />
        </div>
      </div>
    </>
  );
}
