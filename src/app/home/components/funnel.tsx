"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Funnel() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-xl text-center mb-10">
          <h2 className="text-sm font-semibold text-indigo-600">Heading</h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            How your Business looks
          </p>
          <p className="mt-4 text-base text-gray-600">
            We plan to maximise your work and money by efficient funneling.
          </p>
        </div>

        {/* Funnel Layers */}
        <div className="flex flex-col items-center gap-[10px]">
          <div
            className="full-funnel"
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
