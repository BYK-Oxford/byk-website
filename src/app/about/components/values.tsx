"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    name: "Integrity First",
    description:
      "We uphold the highest ethical standards, ensuring honesty, transparency, and trust in everything we do.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Client-Centered Approach",
    description:
      "Your goals guide our work. We listen, understand, and tailor our services to support your long-term success.",
    icon: UserGroupIcon,
  },
  {
    name: "Precision Matters",
    description:
      "In accounting, details make the difference. We commit to accuracy, compliance, and reliable reporting every step of the way.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Continuous Improvement",
    description:
      "We’re always learning—adapting to regulatory changes, new technologies, and industry best practices to serve you better.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Confidentiality & Trust",
    description:
      "Your data and business information are handled with the utmost discretion and security at all times.",
    icon: EyeSlashIcon,
  },
  {
    name: "Collaborative Culture",
    description:
      "We work as one team—with you and within our firm—to deliver timely, strategic, and effective financial solutions.",
    icon: UserIcon,
  },
];

export default function Values() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Animate each value card
    valueRefs.current.forEach((el, index) => {
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
    <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 sm:mb-20 lg:px-8">
      <div className="max-w-2xl mx-auto text-center" ref={headingRef}>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Our values
        </h2>
        <p className="mt-4 text-base/7 text-gray-600 sm:text-base/7 max-w-xl mx-auto">
          At the heart of our work is a commitment to accuracy, trust, and
          partnership. We strive to deliver financial clarity and confidence
          through ethical practices, expert insight, and tailored support.
        </p>
      </div>

      <dl className="mt-16 grid px-20 max-w-2xl grid-cols-1 gap-x-8 gap-y-12 text-base text-gray-700 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.name}
            className="flex flex-col"
            ref={(el) => {
              valueRefs.current[index] = el;
            }}
          >
            <dt className="flex items-center gap-3">
              <value.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <span className="font-semibold text-gray-900">{value.name}</span>
            </dt>
            <dd className="mt-2 text-sm leading-relaxed">
              {value.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
