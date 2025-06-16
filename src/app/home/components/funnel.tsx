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

  const handleHover = (index: number) => {
    const layer = funnelLayers.current[index];
    if (layer) {
      gsap.fromTo(
        layer,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );
    }
  };

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
  }, []);
  const sizes = [50, 80, 100];
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
        <div className="relative w-[600px] h-[600px] mx-auto">
          <div className="absolute z-20" style={{ top: 220, left: 220 }}>
            <CircleButton
              size={sizes[0]}
              label="Sales"
              onHover={() => handleHover(0)}
            />
          </div>
          <div className="absolute z-20" style={{ top: 130, left: 180 }}>
            <CircleButton
              size={sizes[1]}
              label="Revenue"
              onHover={() => handleHover(1)}
            />
          </div>
          <div className="absolute z-20" style={{ top: 260, left: 320 }}>
            <CircleButton
              size={sizes[2]}
              label="EBITDA"
              onHover={() => handleHover(2)}
            />
          </div>

          {/* Funnel Layers */}
          <div className="flex flex-col items-center gap-[10px] transform scale-70 md:scale-100">
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
          </div>
        </div>
      </div>
    </div>
  );
}

function CircleButton({
  label,
  onHover,
  size = 64,
}: {
  label: string;
  onHover: () => void;
  size?: number;
}) {
  return (
    <div
      className="bg-indigo-200 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-indigo-400 transition"
      onMouseEnter={onHover}
      style={{
        width: size,
        height: size,
      }}
    >
      {label}
    </div>
  );
}
