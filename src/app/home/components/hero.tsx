"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  // refs for text elements
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  // ref for images array
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    imageRefs.current.forEach((Image, index) => {
      if (Image) {
        gsap.fromTo(
          Image,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: Image,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);
  return (
    <div className="relative isolate z-10">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-32 sm:pt-60 lg:px-20 lg:pt-10">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div className="flex flex-col gap-8">
                <h1
                  ref={headingRef}
                  className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
                >
                  No Templates. <br />
                  Just Tailored Financial Intelligence
                </h1>
                <p
                  ref={paragraphRef}
                  className="text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-lg/8 lg:max-w-none"
                >
                  Custom KPIs for What Matters Most to You. Our experts will
                  help your business to thrive with confidence
                </p>
                <Link
                  ref={buttonRef}
                  href="/contact"
                  className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-8 sm:-mt-10 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-40 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div
                  ref={(el) => {
                    imageRefs.current[0] = el;
                  }}
                  className="relative"
                >
                  <Image
                    alt="img1"
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width={768}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="mr-auto w-40 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div
                  ref={(el) => {
                    imageRefs.current[1] = el;
                  }}
                  className="relative"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width={768}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div
                  ref={(el) => {
                    imageRefs.current[2] = el;
                  }}
                  className="relative"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width={768}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="w-40 flex-none space-y-8 pt-32 sm:pt-0">
                <div
                  ref={(el) => {
                    imageRefs.current[3] = el;
                  }}
                  className="relative"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width={768}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div
                  ref={(el) => {
                    imageRefs.current[4] = el;
                  }}
                  className="relative"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width={768}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
