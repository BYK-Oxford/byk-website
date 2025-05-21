export default function Mission() {
  return (
    <div className="overflow-hidden bg-white py-20 sm:py-28 sm:px-20">
      <div className="mx-auto max-w-2xl px-30 sm:px-30 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          {/* <p className="text-sm font-semibold text-indigo-600">About us</p> */}
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            On a mission to empower businesses
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700">
            We help businesses simplify their finances, stay compliant, and
            focus on growth — all through reliable accounting support.
          </p>
        </div>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Our mission
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Our mission is to empower businesses with seamless, reliable, and
              remote accounting solutions. We help companies stay financially
              organized, tax-compliant, and ready to make informed
              decisions—without the burden of in-house overhead.
            </p>
            <p className="mt-8 text-base text-gray-600">
              By combining expert support with smart technology, we aim to
              simplify financial operations and become a long-term partner in
              your growth. Wherever you are, we’re here to keep your finances
              clear, compliant, and under control.
            </p>
          </div>

          <div className="pt-12 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-6 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-sm font-semibold text-gray-500">The numbers</p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm text-gray-600">Raised</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm text-gray-600">Companies</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm text-gray-600">Deals Closed</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm text-gray-600">Leads Generated</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
