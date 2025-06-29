"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Funnel() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const funnelLayers = useRef<(HTMLDivElement | null)[]>([]);

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
    if (subHeadingRef.current) {
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    funnelLayers.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  const funnelData = [
    { title: "Sales Pipeline", width: 500, cap: 400 },
    { title: "Revenue Conversion", width: 400, cap: 320 },
    { title: "EBITDA", width: 300, cap: 240 },
    { title: "Net Profit", width: 220, cap: 175 },
  ];

  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-xl text-center mb-10">
        {/* <h2 ref={headingRef} className="text-sm font-semibold text-indigo-600">
          Heading
        </h2> */}
        <p
          ref={subHeadingRef}
          className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
        >
          How your Business looks
        </p>
        <p ref={paraRef} className="mt-4 text-base text-gray-600">
          We plan to maximise your work and money by efficient funneling.
        </p>
      </div>

      {/* Funnel Layers */}
      <div className="flex flex-col items-center gap-[10px] transform scale-65 md:scale-100">
        {funnelData.map((layer, i) => (
          <div
            key={i}
            ref={(el) => {
              funnelLayers.current[i] = el;
            }}
            style={{
              width: `${layer.width}px`,
              position: "relative",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Top Cap */}
            <div
              className={"funnel-top "}
              style={{
                height: "40px",
                width: `${layer.width}px`,
                background: "#818cf8",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginBottom: "-20px",
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                position: "relative",
                zIndex: 10,
              }}
            />

            {/* Funnel Body */}
            <div
              className="funnel-layer bg-indigo-500 flex justify-center items-center"
              style={{ height: "120px", width: `${layer.width}px` }}
            >
              <div className="text-xl font-bold text-white">{layer.title}</div>
            </div>

            {/* Bottom Cap */}
            <div
              className="bg-indigo-500"
              style={{
                height: "40px",
                width: `${layer.cap}px`,
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginTop: "-36px",
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                zIndex: 20,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
