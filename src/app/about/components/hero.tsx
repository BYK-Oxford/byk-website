export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              alt="People working on laptops"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              className="size-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" /> */}
            <div className="absolute inset-0 bg-neutral-900/80" />
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">About Us</span>
              <span className="block text-indigo-200">
                Your financial Partner
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-md text-indigo-200 sm:max-w-3xl">
              We’re a modern accounting firm helping businesses and individuals
              stay ahead financially. With data-driven insights and tailored
              strategies, we simplify the complex and give you clarity where it
              matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
