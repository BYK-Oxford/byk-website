"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
  }, []);
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              alt="People working on laptops"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              width={768}
              height={528}
            />
            <div className="absolute inset-0 bg-indigo-900/60" />
          </div>
          <div className="relative px-6 py-12 sm:py-20 lg:px-12 lg:py-28 text-center">
            <h1
              ref={headingRef}
              className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl"
            >
              <span className="block">About Us</span>
              <span
                ref={subHeadingRef}
                className="block text-indigo-200 mt-1 text-xl sm:text-2xl lg:text-3xl"
              >
                Trusted Financial Partner for Business
              </span>
            </h1>
            <p
              ref={paraRef}
              className="mx-auto mt-6 max-w-xl text-indigo-200 text-sm sm:text-base lg:text-lg"
            >
              Precision, Transparency, and Long-Term Partnership. <br />
              We don’t just build models—we help you build confidence in your
              numbers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
