"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Funnel() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const fun1 = useRef<HTMLParagraphElement | null>(null);
  const fun2 = useRef<HTMLParagraphElement | null>(null);
  const fun3 = useRef<HTMLParagraphElement | null>(null);

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
    if (fun1.current) {
      gsap.fromTo(
        fun1.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: fun1.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (fun2.current) {
      gsap.fromTo(
        fun2.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: fun2.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (fun3.current) {
      gsap.fromTo(
        fun3.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: fun3.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-xl text-center mb-10">
          <h2
            ref={headingRef}
            className="text-sm font-semibold text-indigo-600"
          >
            Heading
          </h2>
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
        <div className="flex flex-col items-center gap-[10px] transform scale-70 md:scale-100">
          <div
            ref={fun1}
            className="full-funnel "
            style={{
              width: "500px",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Top Cap - simple ellipse */}
            <div
              className="funnel-top"
              style={{
                height: "40px",
                width: "500px", // slightly narrower or equal to funnel top width
                background: "#818cf8",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginBottom: "-20px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                position: "relative", // Make zIndex effective
                zIndex: 10,
              }}
            />
            {/* Funnel Body */}
            <div
              className="funnel-layer bg-indigo-500"
              style={{ height: "120px", width: "500px" }}
            >
              <div className="text-xl font-bold">Sales Pipeline</div>
            </div>
            {/* Bottom Cap - simple ellipse */}
            <div
              className="bg-indigo-500"
              style={{
                height: "40px",
                width: "400px",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginTop: "-36px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                zIndex: "20",
              }}
            />
          </div>
          <div
            ref={fun2}
            className="full-funnel"
            style={{
              width: "400px",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Top Cap - simple ellipse */}
            <div
              className="funnel-top"
              style={{
                height: "40px",
                width: "400px", // slightly narrower or equal to funnel top width
                background: "#818cf8",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginBottom: "-20px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                position: "relative", // Make zIndex effective
                zIndex: 10,
              }}
            />
            {/* Funnel Body */}
            <div
              className="funnel-layer bg-indigo-500"
              style={{ height: "120px", width: "400px" }}
            >
              <div className="text-xl font-bold">Revenue Conversion</div>
            </div>
            {/* Bottom Cap - simple ellipse */}
            <div
              className="bg-indigo-500"
              style={{
                height: "40px",
                width: "320px",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginTop: "-36px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                zIndex: "20",
              }}
            />
          </div>
          <div
            ref={fun3}
            className="full-funnel"
            style={{
              width: "300px",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Top Cap - simple ellipse */}
            <div
              className="funnel-top"
              style={{
                height: "40px",
                width: "300px", // slightly narrower or equal to funnel top width
                background: "#818cf8",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginBottom: "-20px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                position: "relative", // Make zIndex effective
                zIndex: 10,
              }}
            />
            {/* Funnel Body */}
            <div
              className="funnel-layer bg-indigo-500"
              style={{ height: "120px", width: "300px" }}
            >
              <div className="text-xl font-bold">EBITDA</div>
            </div>
            {/* Bottom Cap - simple ellipse */}
            <div
              className="bg-indigo-500"
              style={{
                height: "40px",
                width: "240px",
                borderRadius: "50% / 100%",
                margin: "0 auto",
                marginTop: "-36px", // overlap with funnel body
                boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                zIndex: "20",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
