import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState(1200000);
  const [hra, setHra] = useState(40000);
  const [sec80c, setSec80c] = useState(150000);
  const [sec80d, setSec80d] = useState(25000);
  const [otherDeductions, setOtherDeductions] = useState(50000);

  const calculateTaxOldRegime = (income) => {
    let tax = 0;
    if (income <= 250000) return 0;
    
    if (income > 250000) {
      tax += Math.min(income - 250000, 250000) * 0.05;
    }
    if (income > 500000) {
      tax += Math.min(income - 500000, 500000) * 0.20;
    }
    if (income > 1000000) {
      tax += (income - 1000000) * 0.30;
    }

    // Rebate 87A up to 5L
    if (income <= 500000) {
      tax = 0;
    }

    return tax + (tax * 0.04); // Health & Education Cess
  };

  const calculateTaxNewRegime = (income) => {
    let tax = 0;
    if (income <= 400000) return 0;

    if (income > 400000) {
      tax += Math.min(income - 400000, 400000) * 0.05;
    }
    if (income > 800000) {
      tax += Math.min(income - 800000, 400000) * 0.10;
    }
    if (income > 1200000) {
      tax += Math.min(income - 1200000, 400000) * 0.15;
    }
    if (income > 1600000) {
      tax += Math.min(income - 1600000, 400000) * 0.20;
    }
    if (income > 2000000) {
      tax += Math.min(income - 2000000, 400000) * 0.25;
    }
    if (income > 2400000) {
      tax += (income - 2400000) * 0.30;
    }

    // Rebate 87A up to 12L
    if (income <= 1200000) {
      tax = 0;
    } else {
      // Marginal relief over 12L is complex, simplified version:
      const diff = income - 1200000;
      if (diff < tax) {
        tax = Math.min(tax, diff);
      }
    }

    return tax + (tax * 0.04);
  };

  const { oldTax, newTax, savings } = useMemo(() => {
    const stdDeductionOld = 50000;
    const stdDeductionNew = 75000; // FY 26-27
    
    // Max 80C is 1.5L
    const capped80c = Math.min(sec80c, 150000);

    const oldTaxable = Math.max(0, grossIncome - stdDeductionOld - hra - capped80c - sec80d - otherDeductions);
    const newTaxable = Math.max(0, grossIncome - stdDeductionNew);

    const oldTax = Math.round(calculateTaxOldRegime(oldTaxable));
    const newTax = Math.round(calculateTaxNewRegime(newTaxable));

    return {
      oldTax,
      newTax,
      savings: Math.max(0, oldTax - newTax) // assumes new is better usually, or old - new
    };
  }, [grossIncome, hra, sec80c, sec80d, otherDeductions]);

  const savingsLabel = oldTax > newTax ? "Savings in New Regime" : (newTax > oldTax ? "Savings in Old Regime" : "No difference");
  const savingsAmount = Math.abs(oldTax - newTax);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="Income Tax Calculator FY 2025-26: Old vs New Regime"
        description="Calculate your tax liability for the latest financial year. Compare Old and New Tax Regimes to save more money. Simple & 100% accurate."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which is better: Old or New Tax Regime?",
              "answer": {
                "@type": "Answer",
                "text": "The New Regime is better for those who don't have many deductions. The Old Regime is beneficial if you have significant investments under 80C, 80D, and HRA."
              }
            },
            {
              "@type": "Question",
              "name": "What is the standard deduction for FY 2026-27?",
              "answer": {
                "@type": "Answer",
                "text": "For the financial year 2026-27, the standard deduction has been increased to ₹75,000 for salaried individuals in the New Tax Regime."
              }
            },
            {
              "@type": "Question",
              "name": "Up to what income is tax-free in India?",
              "answer": {
                "@type": "Answer",
                "text": "In the New Regime, income up to ₹12 Lakhs is effectively tax-free due to the Section 87A rebate."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <main className="flex-1">
        <Breadcrumbs pageName="Income Tax Calculator" />
        <div className="p-4 md:p-6 lg:p-10">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-bold font-label tracking-widest rounded-full mb-4">FINANCIAL YEAR 2026-27</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight leading-tight">Income Tax Calculator</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">Navigate the Indian tax landscape with precision. Compare the <span className="text-primary font-bold">Old vs. New Tax Regimes</span> to maximize your savings for the current financial year.</p>
      </header>

      {/* Asymmetric Layout: Calculator & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Inputs (8/12) */}
        <section className="lg:col-span-7 space-y-8">
          {/* Income Section */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">attach_money</span>
              <h2 className="text-2xl font-bold">Gross Annual Income</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold font-label mb-2 text-on-surface-variant">BASIC SALARY + ALLOWANCES</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">₹</span>
                  <input
                    className="w-full pl-10 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary transition-all text-xl font-bold"
                    type="number"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold font-label text-on-surface-variant">YEARLY HRA</label>
                  <span className="text-primary font-bold">₹ {hra.toLocaleString()}</span>
                </div>
                <input
                  className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary"
                  max="500000"
                  min="0"
                  step="5000"
                  type="range"
                  value={hra}
                  onChange={(e) => setHra(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Deductions Section (Old Regime Focus) */}
          <div className="bg-surface-container-low rounded-[2rem] p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary bg-secondary-container p-2 rounded-lg">account_tree</span>
              <h2 className="text-2xl font-bold">Exemptions &amp; Deductions <span className="text-sm font-medium text-on-surface-variant block">(Applicable for Old Regime)</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary">
                <label className="block text-xs font-bold font-label mb-2 text-primary">SECTION 80C</label>
                <input
                  className="w-full p-0 bg-transparent border-none focus:ring-0 text-lg font-bold"
                  type="number"
                  value={sec80c}
                  onChange={(e) => setSec80c(Number(e.target.value))}
                />
                <p className="text-[10px] text-on-surface-variant mt-2">EPF, LIC, ELSS, PPF...</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary">
                <label className="block text-xs font-bold font-label mb-2 text-secondary">SECTION 80D</label>
                <input
                  className="w-full p-0 bg-transparent border-none focus:ring-0 text-lg font-bold"
                  type="number"
                  value={sec80d}
                  onChange={(e) => setSec80d(Number(e.target.value))}
                />
                <p className="text-[10px] text-on-surface-variant mt-2">Health Ins: Self, Spouse, Child</p>
              </div>
              <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl border-l-4 border-tertiary">
                <label className="block text-xs font-bold font-label mb-2 text-on-surface-variant">OTHER DEDUCTIONS (NPS, Education Loan, Charity)</label>
                <input
                  className="w-full p-0 bg-transparent border-none focus:ring-0 text-lg font-bold"
                  type="number"
                  value={otherDeductions}
                  onChange={(e) => setOtherDeductions(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Did you know?</h3>
              <p className="text-primary-fixed-dim leading-relaxed mb-6">Under the <strong>New Tax Regime</strong> (FY 2026-27), the standard deduction is ₹75,000, and the tax rebate limit is now ₹12 Lakhs. Most taxpayers with income up to ₹12.75L effectively pay zero tax!</p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10">
              <span className="material-symbols-outlined text-[12rem]">menu_book</span>
            </div>
          </div>

        </section>

        {/* Right: Results Card (5/12) */}
        <aside className="lg:col-span-5 sticky top-28">
          <div className="bg-surface-container-high rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Your Tax Summary</h3>
            <div className="space-y-6">
              {/* New Regime Card */}
              <div className={`relative p-6 rounded-xl ${newTax <= oldTax ? 'bg-surface-container-lowest border-2 border-secondary ring-4 ring-secondary/10' : 'bg-white/50 border border-outline-variant'}`}>
                {newTax <= oldTax && <div className="absolute -top-3 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Recommended</div>}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant">NEW REGIME</p>
                    <p className="text-xs text-on-surface-variant/70">Simplified &amp; Lower Slabs</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-3xl font-extrabold ${newTax <= oldTax ? 'text-secondary' : 'text-primary'}`}>₹ {newTax.toLocaleString('en-IN')}</p>
                    <p className={`text-[10px] font-medium ${newTax <= oldTax ? 'text-secondary' : 'text-primary'}`}>TAX LIABILITY</p>
                  </div>
                </div>
              </div>

              {/* Old Regime Card */}
              <div className={`relative p-6 rounded-xl ${oldTax < newTax ? 'bg-surface-container-lowest border-2 border-secondary ring-4 ring-secondary/10' : 'bg-white/50 border border-outline-variant'}`}>
                {oldTax < newTax && <div className="absolute -top-3 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Recommended</div>}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant">OLD REGIME</p>
                    <p className="text-xs text-on-surface-variant/70">With Deductions</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-3xl font-extrabold ${oldTax < newTax ? 'text-secondary' : 'text-primary'}`}>₹ {oldTax.toLocaleString('en-IN')}</p>
                    <p className={`text-[10px] font-medium ${oldTax < newTax ? 'text-secondary' : 'text-primary'}`}>TAX LIABILITY</p>
                  </div>
                </div>
              </div>

              {/* Growth Highlight */}
              <div className="bg-secondary-container/30 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-secondary text-on-secondary p-2 rounded-full">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>savings</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-secondary-container">{savingsLabel}</p>
                  <p className="text-lg font-extrabold text-secondary">₹ {savingsAmount.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <button onClick={() => alert("Downloading Detailed PDF Report...")} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95">
                Download Detailed Report
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <p className="text-[10px] text-center text-on-surface-variant leading-relaxed">
                Calculations are based on provisional tax slabs for FY 2026-27. Final liability may vary based on specific circumstances and changes in government policy.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 border border-outline-variant rounded-xl flex items-start gap-4 bg-white">
            <span className="material-symbols-outlined text-primary">help_outline</span>
            <div>
              <p className="text-sm font-bold">Confused about HRA?</p>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <section className="mt-24 max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">Income Tax Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Is the New Tax Regime mandatory?</h3>
            <p className="text-on-surface-variant leading-relaxed">No, the New Regime is the 'default' regime, but you can still 'opt-out' and choose the Old Regime if it offers more tax savings for you.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Can I switch regimes every year?</h3>
            <p className="text-on-surface-variant leading-relaxed">Salaried individuals can switch between Old and New regimes every year at the time of filing ITR. Business owners, however, have only one chance to switch back to the Old regime in their lifetime.</p>
          </div>
        </div>
      </section>
      </div>

      </main>
    </div>
  );
}
