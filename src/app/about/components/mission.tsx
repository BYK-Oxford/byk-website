"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const stats = [
  { id: 1, name: "Raised", value: "$150M" },
  { id: 2, name: "Companies", value: "30K" },
  { id: 3, name: "Deals Closed", value: "11.5M" },
  { id: 4, name: "Leads Generated", value: "200M" },
];
export default function Mission() {
  const heading1Ref = useRef<HTMLHeadingElement | null>(null);
  const heading2Ref = useRef<HTMLHeadingElement | null>(null);
  const heading3Ref = useRef<HTMLHeadingElement | null>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph4Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph5Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph6Ref = useRef<HTMLParagraphElement | null>(null);

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
    if (heading3Ref.current) {
      gsap.fromTo(
        heading3Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading3Ref.current,
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
    if (paragraph4Ref.current) {
      gsap.fromTo(
        paragraph4Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph4Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paragraph5Ref.current) {
      gsap.fromTo(
        paragraph5Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph5Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paragraph6Ref.current) {
      gsap.fromTo(
        paragraph6Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph6Ref.current,
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
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: img,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          {/* <p className="text-base/7 font-semibold text-indigo-600">About us</p> */}
          <h1
            ref={heading1Ref}
            className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
          >
            Turning Complex Data Into Clear Business Decisions
          </h1>
          <p
            ref={paragraph1Ref}
            className="mt-6 text-base/7 text-balance text-gray-700"
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
              className="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
            >
              Our mission
            </h2>
            <hr className="mt-6 border-t border-gray-200" />
            <p ref={paragraph2Ref} className="mt-6 text-base/7 text-gray-600">
              We help businesses gain control of their numbers — not with
              generic templates, but with tailor-made financial reports and KPIs
              designed specifically for their goals, operations, and strategy.
            </p>
            <p ref={paragraph3Ref} className="mt-8 text-base/7 text-gray-600">
              At BYK Oxford, we believe that reporting should do more than just
              tick boxes. It should inform decisions, highlight opportunities,
              and drive growth. That’s why we build robust, flexible, and
              easy-to-use reporting tools that adapt to your business — not the
              other way around.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div
                ref={(el) => {
                  imageRefs.current[0] = el;
                }}
                className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10"
              >
                <img
                  alt=""
                  src="https://images.pexels.com/photos/16009515/pexels-photo-16009515.jpeg"
                  className="block size-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[1] = el;
                }}
                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[2] = el;
                }}
                className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10"
              >
                <img
                  alt=""
                  src="https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg"
                  className="block size-full object-cover"
                />
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[3] = el;
                }}
                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <h2
              ref={heading3Ref}
              className="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
            >
              Who We Are
            </h2>
            <hr className="mt-6 border-t border-gray-200" />
            <p ref={paragraph4Ref} className="mt-6 text-base/7 text-gray-600">
              We are a UK based, forward-thinking financial consultancy firm
              that blends deep financial expertise with cutting-edge technology.
              We aim to empower businesses with data-driven insights and
              custom-built financial models that support smarter, faster
              decision-making.
            </p>
            <p ref={paragraph5Ref} className="mt-8 text-base/7 text-gray-600">
              With a team of seasoned finance professionals and tech innovators,
              we specialize in creating robust, scalable financial models
              tailored to your business goals. Whether you are a startup seeking
              investor-ready forecasts or an established company optimizing your
              financial strategy, we bring clarity to complexity.
            </p>
            <p ref={paragraph6Ref} className="mt-8 text-base/7 text-gray-600">
              At the core of our work is a commitment to precision,
              transparency, and long-term partnership. We don’t just build
              models—we help you build confidence in your numbers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
