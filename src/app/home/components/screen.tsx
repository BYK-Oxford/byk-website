import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ClockIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Fast Performance',
    description: 'Optimized dashboards that load quickly, even with large datasets — no delays, just insights.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Low Load Time',
    description: 'Clean data models and backend tuning ensure dashboards open in seconds, not minutes.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Custom Reporting',
    description: 'Tailored dashboards built around your KPIs — from cash flow to expense breakdowns.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Data Accuracy',
    description: 'Reliable and precise calculations ensure your reports reflect the real financial picture.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Scheduled Refresh',
    description: 'Automated data updates at regular intervals so you always have up-to-date information.',
    icon: ClockIcon, 
  },
  {
    name: 'Secure Access',
    description: 'Role-based permissions and SSL encryption ensure your data stays safe and private.',
    icon: LockClosedIcon,
  },
]


export default function Screen() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Real-Time Business Insights</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            Smart Reports, Smarter Decisions.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Our Power BI dashboards turn complex financial data into clear, actionable insights — helping you stay ahead and in control.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="https://www.newhorizons.com/Portals/2/power-bi-service-dashboard-sm.png"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
