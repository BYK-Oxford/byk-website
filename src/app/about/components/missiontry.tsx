"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const heading1Ref = useRef<HTMLHeadingElement | null>(null);
  const heading2Ref = useRef<HTMLHeadingElement | null>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement | null>(null);

  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  // ref for images array
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (heading1Ref.current) {
      gsap.fromTo(
        heading1Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading1Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (heading2Ref.current) {
      gsap.fromTo(
        heading2Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading2Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (paragraph1Ref.current) {
      gsap.fromTo(
        paragraph1Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph1Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paragraph2Ref.current) {
      gsap.fromTo(
        paragraph2Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph2Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paragraph3Ref.current) {
      gsap.fromTo(
        paragraph3Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph3Ref.current,
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
    <div className="overflow-hidden bg-white py-20 sm:py-28 sm:px-20">
      <div className="mx-auto max-w-2xl px-30 sm:px-30 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          {/* <p className="text-sm font-semibold text-indigo-600">About us</p> */}
          <h1
            ref={heading1Ref}
            className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          >
            Turning Complex Data Into Clear Business Decisions
          </h1>
          <p
            ref={paragraph1Ref}
            className="mt-6 text-base sm:text-lg text-gray-700"
          >
            To turn Financial data into decisions through custom, clear, and
            intelligent reporting — built for each business, not borrowed from a
            template.
          </p>
        </div>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2
              ref={heading2Ref}
              className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900"
            >
              Our mission
            </h2>
            <p ref={paragraph2Ref} className="mt-6 text-base text-gray-600">
              We help businesses gain control of their numbers — not with
              generic templates, but with tailor-made financial reports and KPIs
              designed specifically for their goals, operations, and strategy.
            </p>
            <p ref={paragraph3Ref} className="mt-8 text-base text-gray-600">
              At BYK Oxford, we believe that reporting should do more than just
              tick boxes. It should inform decisions, highlight opportunities,
              and drive growth. That’s why we build robust, flexible, and
              easy-to-use reporting tools that adapt to your business — not the
              other way around.
            </p>
          </div>

          <div className="pt-12 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-6 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div
                ref={(el) => {
                  imageRefs.current[0] = el;
                }}
                className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              >
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[1] = el;
                }}
                className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-32"
              >
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[2] = el;
                }}
                className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              >
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[3] = el;
                }}
                className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-32"
              >
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
