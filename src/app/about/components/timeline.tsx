const timeline = [
  {
    name: "Initial concept and planning",
    description:
      "Brainstormed ideas, conducted market research, and laid the groundwork for the company's vision and strategy.",
    date: "Jan 2024",
    dateTime: "2024-01",
  },
  {
    name: "First client acquired",
    description:
      "Secured the company’s first client, marking the beginning of real-world application and feedback.",
    date: "Oct 2024",
    dateTime: "2024-10",
  },
  {
    name: "Product development underway",
    description:
      "Started building the initial version of the product with a focus on customer needs and usability.",
    date: "Mar 2025",
    dateTime: "2025-03",
  },
  {
    name: "Product development",
    description:
      "Started building the initial version of the product with a focus on customer needs and usability.",
    date: "Mar 2025",
    dateTime: "2025-03",
  },
];

export default function Timeline() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-y-12 gap-x-12 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-3 h-1 w-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-4 text-md font-semibold tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
