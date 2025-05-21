import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does BYK Oxford provide?",
    answer:
      "We offer accounting, bookkeeping, tax planning, payroll management, and business advisory services tailored for individuals and businesses.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we specialize in helping startups and SMEs set up solid financial foundations and grow with confidence.",
  },
  {
    question: "Can I switch to BYK Oxford from my current accountant?",
    answer:
      "Absolutely. We’ll guide you through a smooth transition, handle all the paperwork, and ensure minimal disruption.",
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer:
      "We use secure, encrypted systems and comply with GDPR to protect your data and ensure confidentiality at every step.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. We offer flexible online consultations to suit your schedule—no matter where you're based.",
  },
];

export default function FAQ() {
  return (
    <div className="relative isolate z-10">
      <div
        aria-hidden="true"
        className="absolute top-[-5rem] right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-[4/3] w-[30rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20 ">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
