import React, { useState, useMemo } from "react";
import ToolSidebar from "../components/ToolSidebar";

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7.5);
  const [tenureYears, setTenureYears] = useState(5);
  const [compounding, setCompounding] = useState("Quarterly");

  const results = useMemo(() => {
    let n = 4; // Quarterly
    if (compounding === "Monthly") n = 12;
    if (compounding === "Quarterly") n = 4;
    if (compounding === "Half-Yearly") n = 2;
    if (compounding === "Yearly") n = 1;

    // A = P(1 + r/n)^(nt)
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(tenureYears);
    
    if (isNaN(p) || isNaN(r) || isNaN(t) || t <= 0) return { maturity: 0, interest: 0, yield: 0 };

    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;

    // Effective Annual Yield = (1 + r/n)^n - 1
    const effectiveYield = (Math.pow(1 + r / n, n) - 1) * 100;

    return {
      maturity: amount.toFixed(0),
      interest: interest.toFixed(0),
      yield: effectiveYield.toFixed(2),
    };
  }, [principal, rate, tenureYears, compounding]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <ToolSidebar />
      <main className="flex-1 w-full max-w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <span className="font-label text-xs font-bold tracking-[0.2em] text-secondary mb-3 block uppercase">Precision Tools</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter leading-tight mb-4">
          Fixed Deposit <br /><span className="text-primary">Interest Calculator</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
          Plan your wealth growth with architectural precision. Calculate maturity values across various compounding frequencies and tenures.
        </p>
      </div>

      {/* Calculator Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] shadow-sm">
            <div className="flex flex-col gap-8">
              {/* Principal */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-headline font-semibold text-on-surface">Principal Amount</label>
                  <span className="bg-surface-container-high px-4 py-1 rounded-full text-primary font-bold">{formatCurrency(principal)}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="5000"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-outline font-medium">
                  <span>₹ 1k</span>
                  <span>₹ 1 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-headline font-semibold text-on-surface">Interest Rate (p.a.)</label>
                  <span className="bg-surface-container-high px-4 py-1 rounded-full text-primary font-bold">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-outline font-medium">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Tenure Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-headline text-sm font-semibold text-on-surface">Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(e.target.value)}
                    className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl p-3 text-on-surface"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-headline text-sm font-semibold text-on-surface">Compounding</label>
                  <select
                    value={compounding}
                    onChange={(e) => setCompounding(e.target.value)}
                    className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl p-3 text-on-surface"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Half-Yearly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Visualization Placeholder */}
          <div className="bg-surface-container p-1 rounded-full overflow-hidden relative h-48">
            <img alt="Growth Chart" className="w-full h-full object-cover rounded-full opacity-40 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRc6Y_voNgSLm3AK3V2ZWxCJOGqDrWhTg9K-C4o9ws4Wrf8sLwoC3mtjqrWliZh0ohISJwFLqfIuAXh8e_UlxfvGUjt3k7vH6hPHmt1wI8uZ6ghoHICx5W2ni0d6eGmK9xRTwN8yjCarYTPjPaeMPvWwvkBFMsLy0klXTg2sZAVM0wXT9s_lP1L-dSRiH6FjJzxmIbHLIIGlqJzNN7QqycASclXvMo76N8PX7bJ3S4qUaTesrzLHk7MtenBK1sl1V-6ijxeCHfNT9n" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full font-headline font-bold text-secondary text-sm shadow-xl">Wealth Growth Projection</span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5">
          <div className="bg-primary-container text-on-primary-container p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined">insights</span>
                Maturity Summary
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-on-primary-container/70 text-sm font-medium uppercase tracking-widest mb-1">Total Interest Earned</p>
                  <p className="text-4xl font-extrabold text-secondary-fixed">{formatCurrency(results.interest)}</p>
                </div>
                <div>
                  <p className="text-on-primary-container/70 text-sm font-medium uppercase tracking-widest mb-1">Maturity Value</p>
                  <p className="text-5xl font-extrabold text-white tracking-tighter">{formatCurrency(results.maturity)}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 space-y-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-between border border-white/20">
                <span className="text-sm font-medium text-white">Effective Annual Yield</span>
                <span className="font-bold text-white text-lg">{results.yield}%</span>
              </div>
              <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-extrabold text-lg shadow-2xl hover:opacity-90 transition-all">
                Start This Investment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Content Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">compare_arrows</span>
          </div>
          <h4 className="font-headline text-xl font-bold text-primary">FD vs Savings Account</h4>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            While savings accounts offer liquidity, Fixed Deposits provide significantly higher interest rates, often 2-3% more, locking in your returns against market volatility.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <h4 className="font-headline text-xl font-bold text-primary">Tax on FD interest (TDS)</h4>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Interest earned above ₹40,000 (₹50,000 for seniors) is subject to 10% TDS. Understanding post-tax returns is crucial for architectural wealth planning.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">event_note</span>
          </div>
          <h4 className="font-headline text-xl font-bold text-primary">Choosing Right Tenure</h4>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Tenure choice should align with your goal. Short-term (6-12 months) for emergency funds; Long-term (3-5 years) for compounding magic.
          </p>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}
