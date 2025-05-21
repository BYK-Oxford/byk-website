export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              alt="People working on laptops"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/60" />
          </div>
          <div className="relative px-6 py-12 sm:py-20 lg:px-12 lg:py-28 text-center">
            <h1 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              <span className="block">About Us</span>
              <span className="block text-indigo-200 mt-1 text-xl sm:text-2xl lg:text-3xl">
                Your financial Partner
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-indigo-200 text-sm sm:text-base lg:text-lg">
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
