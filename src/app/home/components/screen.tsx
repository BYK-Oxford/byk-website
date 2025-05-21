import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Fast Performance",
    description:
      "Optimized dashboards that load quickly, even with large datasets — no delays, just insights.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Low Load Time",
    description:
      "Clean data models and backend tuning ensure dashboards open in seconds, not minutes.",
    icon: ArrowPathIcon,
  },
  {
    name: "Custom Reporting",
    description:
      "Tailored dashboards built around your KPIs — from cash flow to expense breakdowns.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Data Accuracy",
    description:
      "Reliable and precise calculations ensure your reports reflect the real financial picture.",
    icon: FingerPrintIcon,
  },
  {
    name: "Scheduled Refresh",
    description:
      "Automated data updates at regular intervals so you always have up-to-date information.",
    icon: ClockIcon,
  },
  {
    name: "Secure Access",
    description:
      "Role-based permissions and SSL encryption ensure your data stays safe and private.",
    icon: LockClosedIcon,
  },
];

export default function Screen() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-semibold text-indigo-600">
            Real-Time Business Insights
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Smart Reports, Smarter Decisions.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Our Power BI dashboards turn complex financial data into clear,
            actionable insights — helping you stay ahead and in control.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pt-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <img
            alt="App screenshot"
            src="https://www.newhorizons.com/Portals/2/power-bi-service-dashboard-sm.png"
            width={1200}
            height={720}
            className="rounded-lg shadow-lg ring-1 ring-gray-200"
          />
          {/* Gradient fade at bottom */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-white to-transparent"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-4 lg:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((value) => (
            <div key={value.name}>
              <dt className="flex items-center gap-2">
                <value.icon className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold text-gray-900">
                  {value.name}
                </span>
              </dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
