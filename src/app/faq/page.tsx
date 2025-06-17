import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What types of financial models do you build?",
    answer:
      "We specialize in a wide range of models, including startup financial projections, 3 Statement Model, Budgeting and Forecasting tools, M&A analysis, and custom dashboards tailored to your business.",
  },
  {
    question: "Can you customize a financial model for my industry?",
    answer:
      "Absolutely. We tailor every model to your business needs, whether you're in tech, real estate, healthcare, SaaS, or another sector.",
  },
  {
    question: "Do you offer consulting beyond financial modelling?",
    answer:
      "Yes—we offer strategic financial advisory services including fundraising support, investment readiness, scenario planning, and CFO-level insights.",
  },
  {
    question: "What software or tools do you use for modelling?",
    answer:
      "We primarily use Excel and Google Sheets, enhanced with automation tools, APIs, leveraging modern programming tools like Python and integrating SQL (for Database) and visualisation platforms like PowerBI.",
  },
  {
    question: "Can the models integrate with our existing systems?",
    answer:
      "Yes. We can design models to integrate with tools like Netsuite, Oracle, Microsoft D365, Xero.",
  },
  {
    question: "How long does it take to complete a financial model?",
    answer:
      "Depending on complexity, a model can take anywhere from 2 to 8 weeks. We provide a clear project timeline before starting.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing is project-based and depends on complexity, scope, and timeline. We will provide a transparent quote after a free initial consultation. There will be no hidden fees.",
  },
  {
    question: "Is my financial data secure and confidential?",
    answer:
      "Absolutely. We follow strict confidentiality protocols and can sign NDAs to ensure your data always remains protected.",
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
