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
  const sizes = [50, 80, 100];
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-xl text-center mb-10">
        <h2 ref={headingRef} className="text-sm font-semibold text-indigo-600">
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

      <div className="mx-auto max-w-xl text-center justify-center mb-10 flex gap-3">
        <button className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          button1
        </button>
        <button className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          button1
        </button>
        <button className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          button1
        </button>
        <button className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          button1
        </button>
      </div>

      {/* Funnel Layers */}
      <div className="flex flex-col items-center gap-[10px] transform scale-65 md:scale-100">
        {/* <div className="flex items-center gap-4">
            <div className="w-40 text-right pr-4">
              <p className="text-gray-700 font-semibold">Sales Pipeline</p>
            </div>
            <div
              ref={(el) => {
                funnelLayers.current[0] = el;
              }}
              className="full-funnel"
              style={{
                width: "500px",
                position: "relative",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="funnel-top"
                style={{
                  height: "40px",
                  width: "500px",
                  background: "#818cf8",
                  borderRadius: "50% / 100%",
                  margin: "0 auto",
                  marginBottom: "-20px",
                  boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                  position: "relative",
                  zIndex: 10,
                }}
              />
              <div
                className="funnel-layer bg-indigo-500 flex justify-center items-center"
                style={{ height: "120px", width: "500px" }}
              >
                <div className="text-xl font-bold text-white">
                  Sales Pipeline
                </div>
              </div>
              <div
                className="bg-indigo-500"
                style={{
                  height: "40px",
                  width: "400px",
                  borderRadius: "50% / 100%",
                  margin: "0 auto",
                  marginTop: "-36px",
                  boxShadow: "0 8px 20px rgb(99 102 241 / 0.3)",
                  zIndex: "20",
                }}
              />
            </div>
          </div> */}

        <div
          ref={(el) => {
            funnelLayers.current[0] = el;
          }}
          className="full-funnel"
          style={{
            width: "500px",
            position: "relative",
            transition: "transform 0.3s ease",
          }}
          id="funnel-layer-0"
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
          ref={(el) => {
            funnelLayers.current[1] = el;
          }}
          className="full-funnel"
          style={{
            width: "400px",
            position: "relative",
            transition: "transform 0.3s ease",
          }}
          id="funnel-layer-0"
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
          ref={(el) => {
            funnelLayers.current[2] = el;
          }}
          className="full-funnel"
          style={{
            width: "300px",
            position: "relative",
            transition: "transform 0.3s ease",
          }}
          id="funnel-layer-0"
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
        <div
          ref={(el) => {
            funnelLayers.current[3] = el;
          }}
          className="full-funnel"
          style={{
            width: "240px",
            position: "relative",
            transition: "transform 0.3s ease",
          }}
          id="funnel-layer-0"
        >
          {/* Top Cap - simple ellipse */}
          <div
            className="funnel-top"
            style={{
              height: "40px",
              width: "240px", // slightly narrower or equal to funnel top width
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
            style={{ height: "120px", width: "240px" }}
          >
            <div className="text-xl font-bold">Net Profit</div>
          </div>
          {/* Bottom Cap - simple ellipse */}
          <div
            className="bg-indigo-500"
            style={{
              height: "40px",
              width: "190px",
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
  );
}
