import {
  ShieldCheckIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

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
  return (
    <>
      <div className="mx-auto mt-32 items-center max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-md/8 text-gray-600">
              At the heart of our work is a commitment to accuracy, trust, and
              partnership. We strive to deliver financial clarity and confidence
              through ethical practices, expert insight, and tailored support.
            </p>
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="flex items-center gap-2">
                <value.icon className="h-6 w-6 text-indigo-600" />
                <span className="font-semibold text-gray-900">
                  {value.name}
                </span>
              </dt>
              <dd className="mt-2 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
