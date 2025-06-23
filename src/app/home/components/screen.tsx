"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  RocketLaunchIcon, // Fast Performance
  CursorArrowRaysIcon, // User Friendly
  AdjustmentsHorizontalIcon, // Flexible
  ChartBarIcon, // Robust & Automated Reporting
  BuildingOffice2Icon, // Tailored to Fit Your Business
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Fast Performance",
    description:
      "Optimized dashboards that load quickly, even with large datasets — no delays, just insights.",
    icon: RocketLaunchIcon,
  },
  {
    name: "User Friendly",
    description: "Easy to navigate and even easier to act on.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Flexible",
    description:
      "No templates, no constraints — just insights that adapt to you.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Robust & Automated Reporting",
    description:
      "Reliable and precise calculations ensure your reports reflect the real financial picture.",
    icon: ChartBarIcon,
  },
  {
    name: "Tailored to Fit Your Business",
    description:
      "Pre-packaged analytics solutions often leave businesses adapting to the tool — not the other way around. We reverse that by building the reports around your business.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Secure Access",
    description:
      "Role-based permissions and SSL encryption ensure your data stays safe and private.",
    icon: ShieldCheckIcon,
  },
];

export default function Screen() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate feature items
    featureRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-xl text-center" ref={headingRef}>
          <h2 className="text-sm font-semibold text-indigo-600">
            Real-Time Business Insights
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Smart Reports, Smarter Decisions.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Our Power BI dashboards turn complex financial data into clear,
            actionable insights — helping you stay ahead and in control.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pt-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <Image
            alt="App screenshot"
            src="/screen.png"
            width={1200}
            height={720}
            className="rounded-lg shadow-lg ring-1 ring-gray-200"
            ref={imageRef}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-white to-transparent"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-4 lg:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((value, index) => (
            <div
              key={value.name}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
            >
              <dt className="flex items-center gap-2">
                <value.icon className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold text-gray-900">
                  {value.name}
                </span>
              </dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
