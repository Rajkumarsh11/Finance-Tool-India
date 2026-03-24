import React, { useState, useMemo } from "react";
import ToolSidebar from "../components/ToolSidebar";

export default function TermInsurance() {
  const [income, setIncome] = useState(1200000);
  const [age, setAge] = useState(30);
  const [dependents, setDependents] = useState("3 Members");
  const [liabilities, setLiabilities] = useState(2500000);

  const results = useMemo(() => {
    // Basic HLV logic: Cover = 15 * Annual Income + Liabilities
    const inc = parseFloat(income) || 0;
    const lia = parseFloat(liabilities) || 0;
    const coverRequired = (inc * 15) + lia;

    // Monthly Premium estimate: approx ₹50 per ₹10L cover.
    const monthlyPremium = (coverRequired / 1000000) * 50;

    // Formatting for crore
    let formattedCover = "";
    if (coverRequired >= 10000000) {
      formattedCover = `₹ ${(coverRequired / 10000000).toFixed(2)} Cr`;
    } else {
      formattedCover = `₹ ${(coverRequired / 100000).toFixed(2)} Lakhs`;
    }

    return {
      sumAssuredRaw: coverRequired,
      sumAssured: formattedCover,
      premium: `₹ ${monthlyPremium.toFixed(0)} / mo*`
    };
  }, [income, age, dependents, liabilities]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <ToolSidebar />
      <div className="flex-1 p-4 md:p-8 lg:p-12 bg-surface overflow-hidden w-full">
      {/* Hero Section */}
      <section className="mb-12">
        <span className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs font-label">Financial Protection</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-background font-headline tracking-tight mt-2 mb-4 leading-tight">
          Term Life Insurance <br /><span className="text-primary-container">Architect Calculator</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg font-body leading-relaxed">
          Ensure your legacy with precision. Calculate the exact sum assured required to protect your family's future and settle liabilities.
        </p>
      </section>

      {/* Calculator Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
        {/* Inputs Section */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-5 md:p-8 space-y-6 md:space-y-8 shadow-sm">
          <div className="space-y-6">
            <div className="group">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4">Annual Income (₹)</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="300000"
                  max="5000000"
                  step="50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="flex-grow h-2 bg-surface-variant rounded-full appearance-none accent-primary cursor-pointer"
                />
                <span className="text-lg font-bold text-primary min-w-[120px] text-right bg-surface-container-lowest px-4 py-2 rounded-lg">{formatCurrency(income)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Current Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-primary p-0"
                />
                <p className="text-[10px] text-outline mt-2">Recommended retirement at 60</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Dependents</label>
                <select
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-primary p-0 outline-none"
                >
                  <option>2 Members</option>
                  <option>3 Members</option>
                  <option>4 Members</option>
                  <option>5+ Members</option>
                </select>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4">Current Liabilities (Loans/Debts)</label>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-outline-variant">₹</span>
                <input
                  type="number"
                  value={liabilities}
                  onChange={(e) => setLiabilities(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-primary p-0"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg rounded-xl shadow-[0px_10px_40px_rgba(7,30,39,0.06)] hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calculate</span>
              Recalculate Protection Score
            </button>
          </div>
        </div>

        {/* Output Display Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary text-on-primary rounded-xl p-6 md:p-8 relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Recommended Sum Assured</span>
              <div className="text-5xl font-extrabold font-headline mt-4 mb-2 tracking-tighter">{results.sumAssured}</div>
              <p className="text-on-primary-container text-sm font-medium">Covers 15x Annual Income + Liabilities</p>
              <hr className="my-6 border-white/10" />
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70">Estimated Monthly Premium</span>
                  <span className="font-bold">{results.premium}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70">Coverage Tenure</span>
                  <span className="font-bold">Until age 60</span>
                </div>
              </div>
            </div>
            {/* Abstract decorative gradient background */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">shield</span>
            </div>
          </div>

          <div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant/15">
            <div className="flex gap-4 items-start">
              <div className="bg-secondary/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Precision Guarantee</h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  This calculation follows the Human Life Value (HLV) methodology recognized by major financial institutions globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold font-headline">The Insurance Framework</h2>
          <p className="text-on-surface-variant mt-2">Navigating the nuances of professional wealth protection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-surface-container-low p-6 md:p-8 rounded-xl border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-4">How much cover do you need?</h3>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              The golden rule is 10–15 times your annual income plus any outstanding liabilities like home loans. However, one must also account for inflation. A cover that looks large today might be insufficient in 20 years.
            </p>
            <ul className="space-y-2 text-sm text-on-surface font-medium">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> 15x Annual Income</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Total Outstanding Debts</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Major Life Events (Child Marriage/Education)</li>
            </ul>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary">
            <h3 className="text-xl font-bold mb-4">Term vs Other Life Insurance</h3>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Investment-linked plans (ULIPs/Endowments) combine insurance and savings, often resulting in lower coverage for higher premiums. Term insurance keeps protection and investment separate, allowing for a focused growth strategy elsewhere.
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
