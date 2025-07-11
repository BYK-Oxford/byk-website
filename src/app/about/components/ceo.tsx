"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CEO() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

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
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: paragraphRef.current,
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
  }, []);
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 sm:mt-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <Image alt="BYK Oxford Logo" src="/logo.png" className="mx-auto h-12" /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-l/6  text-gray-900 sm:text-l/9">
            <p ref={headingRef}>
              “At BYK Oxford, we built our service because no two businesses are
              alike — so why should their financial reports be? Our mission is
              to provide every client with insights that truly fit their unique
              needs, empowering smarter decisions and real growth.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              ref={imageRef}
              alt="CEO Image"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHIsWb4wu_gXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680788661265?e=1753315200&v=beta&t=L9_UIY_59hPU_6XP5h4BT8b0x_oo_vUxodCfeMnmuSU"
              className="mx-auto size-10 rounded-full"
              width={768}
              height={528}
            />
            <div
              ref={paragraphRef}
              className="mt-4 flex items-center justify-center space-x-3 text-base"
            >
              <div className="font-semibold text-gray-900">
                Burak Yilmazkaya
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Founder BYK Oxford</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
