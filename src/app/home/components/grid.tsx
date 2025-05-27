"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Grid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate heading
    gsap.fromTo(
      containerRef.current.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector("h2"),
          start: "top 90%",
          once: true,
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      containerRef.current.querySelector("p"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector("p"),
          start: "top 90%",
          once: true,
        },
      }
    );

    // Animate each card (grid children of .grid container)
    const cards = containerRef.current.querySelectorAll(".grid > div");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.1 + index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    // Cleanup function to kill ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className="bg-gray-50 py-20 sm:py-26" ref={containerRef}>
      <div className="mx-auto max-w-[1600px] px-5 lg:max-w-[5600px] lg:px-6">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Power in Every Report
        </h2>
        <p className="mx-auto mt-1.5 max-w-lg text-center text-[32px] font-semibold tracking-tight text-balance text-gray-950 sm:text-[40px]">
          Financial Clarity, Delivered Fast
        </p>
        <div className="mt-8 grid gap-3.5 sm:mt-13 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[1.6rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)*0.8+1px)] lg:rounded-l-[calc(1.6rem+1px)]">
              <div className="px-6 pt-6 pb-2.5 sm:px-8 sm:pt-8 sm:pb-0">
                <p className="mt-1.6 text-[1.28rem] font-bold tracking-tight text-gray-950 max-lg:text-center">
                  Access Anywhere
                </p>
                <p className="mt-1.6 max-w-lg text-[0.8rem]/5 text-gray-600 max-lg:text-center">
                  Review sales, cashflow, or expenses on the go. Our dashboards
                  adapt to any screen so your business travels with you.
                </p>
              </div>
              <div className="@container relative min-h-[24rem] w-full grow max-lg:mx-auto max-lg:max-w-[19rem]">
                <div className="absolute inset-x-8 top-8 bottom-0 overflow-hidden rounded-t-[9.6cqw] border-x-[2.4cqw] border-t-[2.4cqw] border-gray-700 bg-gray-900 shadow-xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[1.6rem]"></div>
          </div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[1.6rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)*0.8+1px)] max-lg:rounded-t-[calc(1.6rem+1px)]">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-1.6 text-[1.28rem] font-bold tracking-tight text-gray-950 max-lg:text-center">
                  Lightning-Fast Load Times
                </p>
                <p className="mt-1.6 max-w-lg text-[0.8rem]/5 text-gray-600 max-lg:text-center">
                  Optimized Power BI and backend configurations ensure reports
                  load in seconds—even with large, complex data sets.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 max-lg:pt-8 max-lg:pb-10 sm:px-8 lg:pb-1.6">
                <img
                  className="w-full max-lg:max-w-[13rem]"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[1.6rem]"></div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)*0.8+1px)]">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-1.6 text-[1.28rem] font-bold tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-1.6 max-w-lg text-[0.8rem]/5 text-gray-600 max-lg:text-center">
                  Role-based access, SSL encryption, and secure cloud hosting
                  keep your financial data safe from unauthorized access.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-4 lg:pb-1.6">
                <img
                  className="h-[min(121px,32cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[1.6rem] lg:rounded-r-[1.6rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)*0.8+1px)] max-lg:rounded-b-[calc(1.6rem+1px)] lg:rounded-r-[calc(1.6rem+1px)]">
              <div className="px-6 pt-6 pb-2.5 sm:px-8 sm:pt-8 sm:pb-0">
                <p className="mt-1.6 text-[1.28rem] font-bold tracking-tight text-gray-950 max-lg:text-center">
                  Automated Integrations
                </p>
                <p className="mt-1.6 max-w-lg text-[0.8rem]/5 text-gray-600 max-lg:text-center">
                  Seamlessly connect with your accounting software or ERP
                  system. Automatically sync and visualize real-time data.
                </p>
              </div>
              <div className="relative min-h-[24rem] w-full grow">
                <div className="absolute top-8 right-0 bottom-0 left-8 overflow-hidden rounded-tl-lg bg-gray-900 shadow-xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-[0.8px] flex text-[0.8rem]/5 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-3 py-1.6 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-3 py-1.6">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pt-5 pb-11">
                    {/* Your code example */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[1.6rem] lg:rounded-r-[1.6rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
