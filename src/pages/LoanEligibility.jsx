import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function LoanEligibility() {
  const [monthlyIncome, setMonthlyIncome] = useState(120000);
  const [existingEMIs, setExistingEMIs] = useState(15000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const { maxEligibleAmount, newEMI, foir } = useMemo(() => {
    // Fixed Obligation to Income Ratio (FOIR) is typically capped at 50% for standard loans
    const maxTotalEMI = monthlyIncome * 0.5;
    const maxNewEMI = Math.max(0, maxTotalEMI - existingEMIs);

    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    // EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
    // => P = maxNewEMI / { [r x (1+r)^n] / [(1+r)^n - 1] }
    let principal = 0;
    if (r > 0 && n > 0 && maxNewEMI > 0) {
      principal = maxNewEMI / ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    }

    const calculatedFOIR = ((existingEMIs + maxNewEMI) / monthlyIncome) * 100;

    return {
      maxEligibleAmount: Math.round(principal),
      newEMI: Math.round(maxNewEMI),
      foir: Math.round(calculatedFOIR)
    };
  }, [monthlyIncome, existingEMIs, tenureYears, interestRate]);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="Loan Eligibility Calculator: Check Your Borrowing Limit In India"
        description="Check your car or home loan eligibility instantly. Understand debt-to-income ratio and bank criteria for Indian loans. Professional planning tool."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How is loan eligibility calculated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Loan eligibility is primarily calculated using your monthly income and current EMIs. Banks usually cap your total EMI (existing + new) at 50-60% of your net monthly income."
              }
            },
            {
              "@type": "Question",
              "name": "What is FOIR in loan eligibility?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOIR stands for Fixed Obligation to Income Ratio. it is a parameter used by banks to determine if a borrower can afford a new loan after paying existing debts."
              }
            },
            {
              "@type": "Question",
              "name": "How much home loan can I get on a ₹1 Lakh salary?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On a ₹1 Lakh monthly salary, with no other EMIs, you can typically get a home loan of ₹55-65 Lakhs for a 20-year tenure at current interest rates."
              }
            },
            {
              "@type": "Question",
              "name": "Can I get a loan with a 650 credit score?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 650 score is considered 'Fair'. While you may get a loan, the interest rates will be higher and you might need a co-applicant with a better score to increase eligibility."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <div className="flex-1 min-h-screen w-full">
        <Breadcrumbs pageName="Loan Eligibility" />
        <div className="px-6 md:px-12 py-12 bg-surface">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
          Loan Eligibility <span className="text-primary-container">Architect</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Precision engineering for your financial future. Determine your borrowing capacity with our institutional-grade assessment tool.
        </p>
      </section>

      {/* Calculator Bento Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-16">
        {/* Inputs Section */}
        <div className="xl:col-span-7 space-y-8 bg-surface-container-low p-8 rounded-[3rem] border border-outline-variant/15">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-on-surface-variant uppercase text-xs tracking-widest">Gross Monthly Income</label>
              <span className="text-xl font-bold text-primary">₹ {monthlyIncome.toLocaleString('en-IN')}</span>
            </div>
            <input
              className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-secondary"
              max="1000000"
              min="20000"
              step="5000"
              type="range"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-on-surface-variant uppercase text-xs tracking-widest">Existing EMIs</label>
              <span className="text-xl font-bold text-primary">₹ {existingEMIs.toLocaleString('en-IN')}</span>
            </div>
            <input
              className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-secondary"
              max="200000"
              min="0"
              step="1000"
              type="range"
              value={existingEMIs}
              onChange={(e) => setExistingEMIs(Number(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-semibold text-on-surface-variant uppercase text-xs tracking-widest mb-4">Loan Tenure (Years)</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 20, 30].map(years => (
                  <button
                    key={years}
                    onClick={() => setTenureYears(years)}
                    className={`py-2 rounded-lg font-bold transition-all ${tenureYears === years ? "bg-primary text-on-primary" : "bg-surface-container-lowest border border-outline-variant/15 text-primary"}`}
                  >
                    {years}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-semibold text-on-surface-variant uppercase text-xs tracking-widest mb-4">Interest Rate (%)</label>
              <div className="bg-surface-container-lowest rounded-xl p-3 flex items-center justify-between border border-outline-variant/15">
                <span className="font-bold text-primary">{interestRate.toFixed(1)}%</span>
                <div className="flex gap-2">
                  <button onClick={() => setInterestRate(Math.max(5, interestRate - 0.1))} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined scale-75">remove</span>
                  </button>
                  <button onClick={() => setInterestRate(Math.min(20, interestRate + 0.1))} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined scale-75">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="xl:col-span-5 bg-gradient-to-br from-primary to-primary-container p-1 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-primary h-full w-full rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-on-primary-container font-semibold uppercase text-xs tracking-widest opacity-80 mb-2">Maximum Eligible Amount</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-4">₹ {maxEligibleAmount.toLocaleString('en-IN')}</h2>
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-fixed-dim px-4 py-1.5 rounded-full text-sm font-bold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                {maxEligibleAmount > 0 ? "High Approval Probability" : "Not Eligible"}
              </div>
            </div>
            <div className="space-y-6 pt-12 border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Monthly Outgo (New)</span>
                <span className="text-white font-bold">₹ {newEMI.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">FOIR (Debt-to-Income)</span>
                <span className="text-white font-bold">{foir}%</span>
              </div>
              <button onClick={() => alert("Checking live bank offers...")} className="w-full py-4 bg-secondary text-on-secondary rounded-xl font-bold text-lg hover:opacity-95 transition-all shadow-xl">
                Check Offers Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Informational Sections (Bento Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Factors */}
        <div className="md:col-span-2 bg-surface-container-high p-8 rounded-[3rem]">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">analytics</span>
            <h3 className="text-2xl font-bold text-on-surface">Factors affecting loan eligibility</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-surface-container-lowest rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Employment Type</h4>
                <p className="text-sm text-on-surface-variant">Lenders prefer stable income from salaried or established self-employed individuals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-surface-container-lowest rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">cake</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Age Bracket</h4>
                <p className="text-sm text-on-surface-variant">Younger applicants often qualify for longer tenures, increasing the loan amount.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-surface-container-lowest rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Debt-to-Income</h4>
                <p className="text-sm text-on-surface-variant">Your current EMI commitments significantly impact your new borrowing limit.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-surface-container-lowest rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Location</h4>
                <p className="text-sm text-on-surface-variant">Property value and city-specific caps play a role in housing and personal loans.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Score Tips */}
        <div className="bg-surface-container p-8 rounded-[3rem] border border-primary/5">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">trending_up</span>
            <h3 className="text-xl font-bold text-on-surface">Improve your score</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary scale-75">done</span>
              <span className="text-sm text-on-surface-variant">Automate all credit card and EMI payments.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary scale-75">done</span>
              <span className="text-sm text-on-surface-variant">Maintain credit utilization below 30%.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary scale-75">done</span>
              <span className="text-sm text-on-surface-variant">Avoid multiple loan inquiries in a short period.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary scale-75">done</span>
              <span className="text-sm text-on-surface-variant">Keep older credit accounts open to build history.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Documents Section */}
      <section className="mt-8 bg-surface-container-lowest p-8 rounded-[3rem] border border-outline-variant/15">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-on-surface">Documents required for loan application</h3>
            <p className="text-on-surface-variant">Keep these ready to expedite your approval process.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold">Salaried</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">Self-Employed</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-surface rounded-xl border border-outline-variant/5 text-center">
            <span className="material-symbols-outlined text-primary-container mb-2 block">badge</span>
            <p className="text-sm font-bold text-on-surface">Identity Proof</p>
            <p className="text-xs text-on-surface-variant">PAN, Aadhaar, Passport</p>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-outline-variant/5 text-center">
            <span className="material-symbols-outlined text-primary-container mb-2 block">home_pin</span>
            <p className="text-sm font-bold text-on-surface">Address Proof</p>
            <p className="text-xs text-on-surface-variant">Utility Bills, Rent Agreement</p>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-outline-variant/5 text-center">
            <span className="material-symbols-outlined text-primary-container mb-2 block">payments</span>
            <p className="text-sm font-bold text-on-surface">Income Proof</p>
            <p className="text-xs text-on-surface-variant">3 Months Salary Slips</p>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-outline-variant/5 text-center">
            <span className="material-symbols-outlined text-primary-container mb-2 block">account_balance</span>
            <p className="text-sm font-bold text-on-surface">Bank Statements</p>
            <p className="text-xs text-on-surface-variant">Last 6 Months History</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">Loan Eligibility Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">How much home loan can I get on a ₹50,000 salary?</h3>
            <p className="text-on-surface-variant leading-relaxed">Assuming no other EMIs and a 20-year tenure at 8.5% interest, you might be eligible for a loan of approximately ₹25-30 Lakhs.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">How much home loan can I get on a ₹1 Lakh salary?</h3>
            <p className="text-on-surface-variant leading-relaxed">On a ₹1 Lakh monthly salary, with no other EMIs, you can typically get a home loan of ₹55-65 Lakhs for a 20-year tenure at current interest rates.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Can I get a loan with a 650 credit score?</h3>
            <p className="text-on-surface-variant leading-relaxed">A 650 score is considered 'Fair'. While you may get a loan, the interest rates will be higher and you might need a co-applicant with a better score to increase eligibility.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
    </div>
  );
}
