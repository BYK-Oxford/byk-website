import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ServiceContainerProps {
  heading: string;
  description: string;
  includedFeatures: string[];
  label: string;
  labelBody: string;
  tag: string;
}
export default function ServiceContainer({
  heading,
  description,
  includedFeatures,
  label,
  labelBody,
  tag,
}: ServiceContainerProps) {
  const card1 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (card1.current) {
      gsap.fromTo(
        card1.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card1.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={card1}
      className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
    >
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          {heading}
        </h3>
        <p className="mt-6 text-base/7 text-gray-600">{description}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">
            What’s included
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                aria-hidden="true"
                className="h-6 w-5 flex-none text-indigo-600"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">{label}</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              {/* <span className="text-5xl font-semibold tracking-tight text-gray-900">
                {labelBody}
              </span> */}
              <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                {labelBody}
              </span>
            </p>
            <Link
              href="/contact"
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Consultation
            </Link>
            <p className="mt-6 text-xs/5 text-gray-600">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
