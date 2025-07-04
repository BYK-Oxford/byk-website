"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";
import { Toaster, toast } from "react-hot-toast";
import SEOHead from "@/app/ui/seo";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const paraRef = useRef<HTMLDivElement | null>(null);
  const headingRef1 = useRef<HTMLDivElement | null>(null);
  const paraRef1 = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Formspree hook
  const [state, handleSubmit] = useForm("xjkwndqj");

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
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
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
    if (headingRef1.current) {
      gsap.fromTo(
        headingRef1.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef1.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (paraRef1.current) {
      gsap.fromTo(
        paraRef1.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef1.current,
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

    // Animate form fields
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll(
        "label, input, textarea, button"
      );
      gsap.fromTo(
        fields,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", { duration: 8000 });
    }
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <SEOHead
        title="Contact Us | BYK Oxford"
        description="Get in touch with BYK Oxford’s expert team. Whether you need support, advice, or a custom proposal, we’re here to help."
        url="https://bykoxford.com/contact"
        image="https://bykoxford.com/logo.png"
      />

      <Toaster position="top-center" />
      <div className="relative isolate bg-white px-6 py-10 sm:py-32 lg:px-8">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-64}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2
            ref={headingRef1}
            className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            Let’s talk about your project
          </h2>
          <p ref={paraRef1} className="mt-6 text-lg/8 text-gray-600">
            From startups to established businesses <br />— we’re here to
            simplify your finances and support your growth.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:flex-auto"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="First Name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="Last Name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="Phone Number"
                      type="text"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="Message"
                      rows={4}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={""}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </div>
              <p className="mt-6 text-sm/6 text-gray-500">
                By submitting this form, I agree to the{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <figure className="mt-10">
                <blockquote className="text-lg/8 text-gray-900">
                  <p ref={headingRef}>
                    “We don’t just balance books — we build confidence. At BYK
                    Oxford, we’re committed to guiding you through every
                    financial step with clarity and care.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <Image
                    ref={imageRef}
                    alt="CEO Image"
                    src="https://media.licdn.com/dms/image/v2/D4E03AQHIsWb4wu_gXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680788661265?e=1753315200&v=beta&t=L9_UIY_59hPU_6XP5h4BT8b0x_oo_vUxodCfeMnmuSU"
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                  <div ref={paraRef}>
                    <div className="text-base font-semibold text-gray-900">
                      Burak Yilmazkaya
                    </div>
                    <div className="text-sm/6 text-gray-600">
                      Founder BYK Oxford
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
