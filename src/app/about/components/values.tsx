const values = [
  {
    name: "Integrity First",
    description:
      "We uphold the highest ethical standards, ensuring honesty, transparency, and trust in everything we do.",
  },
  {
    name: "Client-Centered Approach",
    description:
      "Your goals guide our work. We listen, understand, and tailor our services to support your long-term success.",
  },
  {
    name: "Precision Matters",
    description:
      "In accounting, details make the difference. We commit to accuracy, compliance, and reliable reporting every step of the way.",
  },
  {
    name: "Continuous Improvement",
    description:
      "We’re always learning—adapting to regulatory changes, new technologies, and industry best practices to serve you better.",
  },
  {
    name: "Confidentiality & Trust",
    description:
      "Your data and business information are handled with the utmost discretion and security at all times.",
  },
  {
    name: "Collaborative Culture",
    description:
      "We work as one team—with you and within our firm—to deliver timely, strategic, and effective financial solutions.",
  },
];

export default function Values() {
  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-md/8 text-gray-600">
            At the heart of our work is a commitment to accuracy, trust, and
            partnership. We strive to deliver financial clarity and confidence
            through ethical practices, expert insight, and tailored support.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
