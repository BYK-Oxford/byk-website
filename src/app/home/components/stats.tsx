"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, name: "Businesses Supported", value: "50+" },
  { id: 2, name: "Average Response Time", value: "< 24 hrs" },
  { id: 3, name: "Monthly Reports Delivered", value: "100+" },
  { id: 4, name: "Client Satisfaction Rate", value: "98%" },
];

export default function Stats() {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
          delay: 0.1,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    statRefs.current.forEach((el, index) => {
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

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2
              ref={headingRef}
              className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl"
            >
              Trusted by Businesses Across Industries
            </h2>
            <p
              ref={paragraphRef}
              className="mt-2 text-base text-gray-600 sm:text-lg"
            >
              From startups to established enterprises, our accounting expertise
              supports long-term financial success.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                ref={(el) => {
                  statRefs.current[index] = el;
                }}
                className="flex flex-col bg-gray-100 p-4 sm:p-6"
              >
                <dt className="text-xs font-semibold text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
