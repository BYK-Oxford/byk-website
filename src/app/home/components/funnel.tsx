"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function funnel() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-xl text-center">
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
    </div>
  );
}
