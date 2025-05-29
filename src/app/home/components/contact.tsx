"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";
import { Toaster, toast } from "react-hot-toast";

// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

const contactInfos = [
  {
    id: 1,
    icon: BuildingOffice2Icon,
    label: "Address",
    value: (
      <>
        128 City Road
        <br />
        London, EC1V 2NX
      </>
    ),
  },
  {
    id: 2,
    icon: PhoneIcon,
    label: "Telephone",
    value: (
      <a href="tel:+447828994591" className="hover:text-gray-900">
        +44 7828 994591
      </a>
    ),
  },
  {
    id: 3,
    icon: EnvelopeIcon,
    label: "Email",
    value: (
      <a
        href="mailto:burry.yilmazkaya@bykoxford.com"
        className="hover:text-gray-900"
      >
        burry.yilmazkaya@bykoxford.com
      </a>
    ),
  },
];

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, handleSubmit] = useForm("xjkwndqj");

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll(
        "input, textarea, label, button"
      );
      gsap.fromTo(
        inputs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
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
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    infoRefs.current.forEach((el, index) => {
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
  }, []);
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
    }
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <Toaster position="top-right" />
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-5 pt-20 pb-16 sm:pt-24 lg:static lg:px-20 lg:py-36">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
              <h2
                ref={headingRef}
                className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
              >
                Get in touch
              </h2>
              <p ref={paragraphRef} className="mt-5 text-base/7 text-gray-600">
                Have questions or need tailored financial solutions? Our team is
                here to help. Reach out to discover how we can support your
                business growth and clarity.
              </p>
              <dl className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {contactInfos.map(({ id, icon: Icon, label, value }, index) => (
                  <div
                    key={id}
                    ref={(el) => {
                      infoRefs.current[index] = el;
                    }}
                    className="flex gap-x-3"
                  >
                    <dt className="flex-none">
                      <span className="sr-only">{label}</span>
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-400"
                      />
                    </dt>
                    <dd className="text-sm leading-tight">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="px-5 pt-16 pb-20 sm:pb-24 lg:px-20 lg:py-36"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xs/5 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="First Name"
                    type="text"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xs/5 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="Last Name"
                    type="text"
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-xs/5 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs/5 font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={4}
                    className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
