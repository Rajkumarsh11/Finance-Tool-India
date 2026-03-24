import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PPFCalculator() {
  const [annualInvestment, setAnnualInvestment] = useState(150000);
  const [interestRate, setInterestRate] = useState(7.1);
  const [maturityPeriod, setMaturityPeriod] = useState(15);

  const { totalInvested, maturityValue, wealthGained } = useMemo(() => {
    // PPF compounded yearly. Assuming investment is made at the beginning of the year
    const r = interestRate / 100;
    const n = maturityPeriod;
    const P = annualInvestment;

    const M = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;

    return {
      totalInvested: invested,
      maturityValue: Math.round(M),
      wealthGained: Math.round(M - invested)
    };
  }, [annualInvestment, interestRate, maturityPeriod]);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="PPF Calculator 2026: Calculate Interest & Maturity Value"
        description="Estimate your Public Provident Fund (PPF) returns. Plan your long-term 15-year tax-free savings with our accurate PPF interest tool."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How is PPF interest calculated?",
              "answer": {
                "@type": "Answer",
                "text": "PPF interest is calculated monthly on the lowest balance between the 5th and the end of the month, but credited annually on March 31st."
              }
            },
            {
              "@type": "Question",
              "name": "Is PPF investment tax-free?",
              "answer": {
                "@type": "Answer",
                "text": "Yes, PPF follows the EEE (Exempt-Exempt-Exempt) model: contributions are tax-deductible, interest is tax-free, and maturity amount is also tax-free."
              }
            },
            {
              "@type": "Question",
              "name": "What is the maximum limit for PPF?",
              "answer": {
                "@type": "Answer",
                "text": "The maximum investment limit for a Public Provident Fund (PPF) account is ₹1.5 Lakh per financial year."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <div className="flex-1 min-h-screen w-full">
        <Breadcrumbs pageName="PPF Calculator" />
        <div className="px-6 py-12 md:px-12">
      {/* Hero Header */}
      <header className="mb-12">
        <span className="font-label uppercase tracking-widest text-primary font-bold text-xs">Retirement Planning</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mt-2 tracking-tight">PPF Calculator</h1>
        <p className="text-on-surface-variant text-lg mt-4 max-w-2xl leading-relaxed">
          Plan your long-term wealth with the Public Provident Fund. Calculate maturity amounts and interest earnings for India's most trusted tax-saving instrument.
        </p>
      </header>

      {/* Calculator Section (Asymmetric Bento Layout) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-16">
        {/* Input Panel */}
        <div className="xl:col-span-5 bg-surface-container-low p-8 rounded-[2rem] space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-on-surface">Annual Investment</label>
              <span className="text-primary font-bold text-xl">₹ {annualInvestment.toLocaleString('en-IN')}</span>
            </div>
            <input
              className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-secondary"
              max="150000"
              min="500"
              step="500"
              type="range"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(Number(e.target.value))}
            />
            <div className="flex justify-between mt-2 text-xs text-outline font-medium">
              <span>₹500</span>
              <span>₹1.5L (Max)</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-on-surface">Current Interest Rate (%)</label>
              <span className="text-primary font-bold text-xl">{interestRate}%</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">trending_up</span>
              <span className="text-sm text-on-surface-variant">Default set to latest Govt. of India rate (Q1 2026).</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-on-surface">Maturity Period</label>
              <span className="text-primary font-bold text-xl">{maturityPeriod} Years</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 25].map(years => (
                <button
                  key={years}
                  onClick={() => setMaturityPeriod(years)}
                  className={`py-2 px-4 rounded-lg font-bold text-sm transition-all ${maturityPeriod === years ? "bg-primary text-on-primary" : "bg-surface-container-highest text-on-surface-variant font-medium"}`}
                >
                  {years} Yrs
                </button>
              ))}
            </div>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-[0px_10px_40px_rgba(7,30,39,0.06)] active:scale-95 transition-all">
            Recalculate Growth
          </button>
        </div>

        {/* Results Display Panel */}
        <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* High-End Result Card (Full Width) */}
          <div className="md:col-span-2 bg-surface-container-high p-8 rounded-[2rem] relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-label uppercase tracking-widest text-on-surface-variant text-xs mb-2">Estimated Maturity Value</p>
              <h2 className="text-5xl md:text-6xl font-extrabold text-secondary tracking-tighter">₹ {maturityValue.toLocaleString('en-IN')}</h2>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">Total Invested</p>
                  <p className="text-xl font-bold text-on-surface">₹ {totalInvested.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">Wealth Gained</p>
                  <p className="text-xl font-bold text-on-secondary-container">+ ₹ {wealthGained.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
            {/* Abstract Growth Pattern */}
            <div className="absolute right-[-10%] bottom-[-20%] opacity-10">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
          </div>

          {/* Glassmorphism Stats */}
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/15">
            <span className="material-symbols-outlined text-primary mb-3">shield</span>
            <h4 className="font-bold text-on-surface">Risk Category</h4>
            <p className="text-sm text-on-surface-variant mt-1">Sovereign Guarantee (Low Risk)</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/15">
            <span className="material-symbols-outlined text-secondary mb-3">account_balance</span>
            <h4 className="font-bold text-on-surface">Tax Benefit</h4>
            <p className="text-sm text-on-surface-variant mt-1">Exempt-Exempt-Exempt (EEE)</p>
          </div>
        </div>
      </div>

      {/* SEO Content & Editorial Section */}
      <section className="mt-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">Mastering Your PPF Investment</h2>
            <div className="h-1 w-20 bg-secondary mt-4"></div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">The Power of Compounding</h3>
              <p className="text-on-surface-variant leading-relaxed">The Public Provident Fund (PPF) is more than just a savings account; it's a compounding engine. Interest is calculated on the minimum balance between the 5th and the last day of every month. To maximize returns, experts recommend depositing your annual contribution before the 5th of April each year.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <h4 className="font-bold text-on-surface mb-2">Withdrawal Rules</h4>
                <p className="text-sm text-on-surface-variant">Lock-in period is 15 years. Partial withdrawals are allowed from the 7th year onwards, capped at 50% of the balance at the end of the 4th year.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <h4 className="font-bold text-on-surface mb-2">Extension Benefits</h4>
                <p className="text-sm text-on-surface-variant">Post maturity, you can extend the account in blocks of 5 years indefinitely, with or without fresh contributions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Accent Image */}
        <div className="rounded-[3rem] overflow-hidden h-64 md:h-96 relative group">
          <img alt="Financial Growth Concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCniRzgYobW_UrAiQJBi40SLhvQeu9ssFw2u_eQmGrfKSXP13g5klHxJcad-c8JavOITcO5y97Be_my22867h9Uqnu9lvjkYq3DjCvRBT5ZWm5nHQG__RVBlGA3nYfdZeJZftXfMdF0q7se2s3ig5yqr2If6egLThXNmDerYRZSN0qDfL6gtRE73RBbqblv3RM14rNsYqoc67r3xYzIct9kgrh8_6TDdv3BxFdBorXZcjE0rzHCZGESUZsmSPNv1XdpPndS8x0UGnA" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
            <p className="text-white text-2xl font-bold max-w-lg">Secure your tomorrow, today. FinTools provides the precision you need for retirement.</p>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section className="mt-24 max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">PPF Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">Can I open two PPF accounts?</h3>
              <p className="text-on-surface-variant leading-relaxed">No, an individual can open only one PPF account in their own name. You can, however, open another account as a guardian for a minor child.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">What happens if I forget to deposit money in my PPF?</h3>
              <p className="text-on-surface-variant leading-relaxed">If you don't deposit the minimum ₹500 annually, the account becomes discontinued. You can revive it by paying a ₹50 penalty per year of default plus the minimum deposit.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
