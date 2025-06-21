import ServiceContainer from "./components/serviceContainer";
("@/app/service/components/serviceContainer");
export default function Service() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Simple no-tricks pricing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <ServiceContainer
          heading="Financial Modelling"
          description="We build dynamic, tailored financial models that empower confident decision-making. Whether you are preparing for investment, scaling operations, or planning for multiple scenarios, our models offer clarity, flexibility, and precision."
          includedFeatures={[
            "3-statement models",
            "Cash flow forecastes",
            "Budgeting tools",
            "Valuation Models",
            "Investor-ready projections",
          ]}
        />
        <ServiceContainer
          heading="System Implementation & Data Migration"
          description="We support businesses through both pre- and post-system implementation—ensuring financial data flows accurately and seamlessly across platforms. From ERP rollouts to custom reporting systems, we safeguard data integrity, minimize disruption, and ensure your systems work for your unique processes."
          includedFeatures={[
            "Implementation advisory",
            "Data Cleansing",
            "Migration strategy",
            "Reconciliation",
            "Post-Go-Live support",
          ]}
        />
        <ServiceContainer
          heading="Due Diligence & M&A Support"
          description="Navigate complex transactions with confidence. We offer financial due diligence and analysis for mergers, acquisitions, and investment rounds. Our team identifies risks, validates assumptions, and creates models that reflect realistic post-deal scenarios."
          includedFeatures={[
            "Buyer/Seller-side due diligence",
            "Quality of earnings",
            "Synergy modelling",
            "Deal structuring support",
          ]}
        />
        <ServiceContainer
          heading="Business-as-Usual (BAU) Support & Interim Cover"
          description="Need temporary financial expertise during a team transition or leave? We provide flexible, short-term cover for finance roles—ensuring business continuity and informed decision-making during periods of attrition or organizational change."
          includedFeatures={[
            "Interim CFO/controller support",
            "Financial analysis",
            "Reporting continuity",
            "Team onboarding assistance",
          ]}
        />
      </div>
    </div>
  );
}
