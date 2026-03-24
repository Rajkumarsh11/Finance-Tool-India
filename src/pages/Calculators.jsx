import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Calculators() {
  const categories = [
    {
      title: "Wealth & Investments",
      icon: "trending_up",
      description: "Grow your money intelligently",
      tools: [
        { name: "SIP Calculator", path: "/sip", icon: "payments", tag: "POPULAR" },
        { name: "FD Calculator", path: "/fd", icon: "account_balance" },
        { name: "PPF Calculator", path: "/ppf", icon: "account_balance_wallet" },
        { name: "Retirement & NPS", path: "/retirement", icon: "elderly" },
      ]
    },
    {
      title: "Loans & EMI",
      icon: "home_work",
      description: "Plan your borrowing wisely",
      tools: [
        { name: "Home Loan EMI", path: "/home-loan", icon: "home" },
        { name: "Car Loan EMI", path: "/car-loan", icon: "directions_car" },
        { name: "Personal Loan EMI", path: "/personal-loan", icon: "person" },
        { name: "Loan Eligibility", path: "/loan-eligibility", icon: "verified", tag: "NEW" },
      ]
    },
    {
      title: "Taxation",
      icon: "receipt_long",
      description: "Navigate Indian tax systems",
      tools: [
        { name: "Income Tax (24-25)", path: "/income-tax", icon: "request_quote", tag: "UPDATED" },
        { name: "GST Calculator", path: "/gst", icon: "price_change" },
      ]
    },
    {
      title: "Protection & Insurance",
      icon: "shield_with_heart",
      description: "Secure your family's future",
      tools: [
        { name: "Term Life Insurance", path: "/term-insurance", icon: "health_and_safety" },
        { name: "Health Insurance", path: "/health-insurance", icon: "local_hospital" },
      ]
    }
  ];

  return (
    <main className="px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
      <SEO 
        title="All Financial Tools India: Free Calculators & Planning"
        description="Access our full suite of free financial tools. Calculate SIP, GST, EMI, and Income Tax with precision. All-in-one financial planning for Indian citizens."
      />
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="label-md uppercase tracking-[0.2em] text-primary font-bold text-xs mb-3 block">Complete Suite</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight leading-tight mb-6">
          All Financial Tools
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Access our entire ecosystem of precision-engineered calculators. From daily EMI checks to decades-long wealth projections.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, idx) => (
          <section key={idx} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{category.icon}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">{category.title}</h2>
                <p className="text-sm text-on-surface-variant">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.tools.map((tool, toolIdx) => (
                <Link 
                  key={toolIdx} 
                  to={tool.path}
                  className="group bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4"
                >
                  <div className="flex justify-between items-start w-full">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">{tool.icon}</span>
                    </div>
                    {tool.tag && (
                      <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                        {tool.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface mb-1">{tool.name}</h3>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                      Open Tool <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
