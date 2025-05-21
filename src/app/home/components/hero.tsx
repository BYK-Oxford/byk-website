export default function Hero() {
  return (
    <div className="relative isolate z-10">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[48rem] w-full [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-801/1036 w-[40rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:pt-44 lg:px-6 lg:pt-8">
          <div className="mx-auto max-w-7xl gap-x-14 flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-center">
            <div className="relative w-full lg:max-w-lg xl:max-w-xl">
              <div className="flex flex-col gap-6 items-start text-left">
                <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Precision Accounting for Your Business Growth
                </h1>
                <p className="text-base font-medium text-gray-500 sm:max-w-md sm:text-lg lg:max-w-none">
                  Providing expert accounting and financial services to help
                  your business thrive with confidence.
                </p>
                <a
                  href="#"
                  className="w-fit rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>

            <div className="mt-12 flex justify-end gap-6 sm:-mt-36 sm:justify-start sm:pl-16 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-36 flex-none space-y-6 pt-28 sm:ml-0 sm:pt-64 lg:order-last lg:pt-28 xl:order-none xl:pt-64">
                <HeroImage src="https://images.unsplash.com/photo-1557804506-669a67965ba0?..." />
              </div>
              <div className="mr-auto w-36 flex-none space-y-6 sm:mr-0 sm:pt-40 lg:pt-28">
                <HeroImage src="https://images.unsplash.com/photo-1485217988980-11786ced9454?..." />
                <HeroImage src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?..." />
              </div>
              <div className="w-36 flex-none space-y-6 pt-28 sm:pt-0">
                <HeroImage src="https://images.unsplash.com/photo-1670272504528-790c24957dda?..." />
                <HeroImage src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper to avoid repetition
function HeroImage({ src }: { src: string }) {
  return (
    <div className="relative">
      <img
        alt=""
        src={src}
        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
    </div>
  );
}
