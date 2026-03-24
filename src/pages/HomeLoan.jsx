import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function HomeLoan() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayable, amortization } = useMemo(() => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    
    let emiCalc = 0;
    if (r > 0) {
      emiCalc = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    } else {
      emiCalc = p / n;
    }

    const totalPayableCalc = emiCalc * n;
    const totalInterestCalc = totalPayableCalc - p;

    let balance = p;
    const yearlySchedule = [];
    for (let year = 1; year <= tenure; year++) {
      let principalThisYear = 0;
      let interestThisYear = 0;
      
      for (let month = 1; month <= 12; month++) {
        if (balance <= 0) break;
        const interest = balance * r;
        const principal = emiCalc - interest;
        interestThisYear += interest;
        principalThisYear += principal;
        balance -= principal;
      }
      
      yearlySchedule.push({
        year,
        principal: Math.round(principalThisYear),
        interest: Math.round(interestThisYear),
        balance: Math.max(0, Math.round(balance))
      });
    }

    return {
      emi: Math.round(emiCalc),
      totalInterest: Math.round(totalInterestCalc),
      totalPayable: Math.round(totalPayableCalc),
      amortization: yearlySchedule
    };
  }, [amount, rate, tenure]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <>
      <SEO 
        title="Home Loan EMI Calculator India: Detailed Interest Breakdown"
        description="Plan your home loan with our easy EMI calculator. See total interest, principal amount, and amortization schedule for Indian banks."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much home loan can I get?",
              "answer": {
                "@type": "Answer",
                "text": "Typically, banks lend up to 80-90% of the property value, provided your total EMIs don't exceed 50-60% of your monthly take-home income."
              }
            },
            {
              "@type": "Question",
              "name": "What is the maximum tenure for a home loan?",
              "answer": {
                "@type": "Answer",
                "text": "Most Indian banks offer home loans for a maximum tenure of 30 years, depending on the borrower's age at maturity."
              }
            },
            {
              "@type": "Question",
              "name": "Does home loan save tax?",
              "answer": {
                "@type": "Answer",
                "text": "Yes, you can claim deductions on principal under Section 80C and interest under Section 24(b) of the Income Tax Act."
              }
            }
          ]
        }}
      />
      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        <ToolSidebar />

        <main className="flex-1">
          <Breadcrumbs pageName="Home Loan Calculator" />
          <div className="p-4 md:p-6 lg:p-10">
          <section className="mb-12">
            <span className="label-md uppercase tracking-[0.2em] text-primary font-bold text-xs mb-2 block">Financing Your Dream Home</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight leading-tight mb-4">Home Loan EMI Calculator</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Precision-engineered tool to estimate your monthly payments, understand interest costs, and plan your property purchase with architectural clarity.</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-5 md:p-8 space-y-8 md:space-y-10">
              {/* Loan Amount */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-on-surface-variant font-headline">Loan Amount</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/30 text-primary font-bold text-xl">
                    {formatCurrency(amount)}
                  </div>
                </div>
                <input 
                  className="accent-secondary" 
                  max="50000000" 
                  min="100000" 
                  step="100000" 
                  type="range" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-medium text-outline uppercase tracking-wider">
                  <span>₹ 1L</span>
                  <span>₹ 5Cr</span>
                </div>
              </div>

               {/* Interest Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-on-surface-variant font-headline">Interest Rate (% P.A.)</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/30 text-primary font-bold text-xl">
                    {rate.toFixed(2)}%
                  </div>
                </div>
                <input 
                  className="accent-secondary" 
                  max="20" 
                  min="5" 
                  step="0.05" 
                  type="range" 
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-medium text-outline uppercase tracking-wider">
                  <span>5%</span>
                  <span>20%</span>
                </div>
              </div>

               {/* Loan Tenure */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-on-surface-variant font-headline">Loan Tenure (Years)</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/30 text-primary font-bold text-xl">
                    {tenure} Years
                  </div>
                </div>
                <input 
                  className="accent-secondary" 
                  max="30" 
                  min="1" 
                  step="1" 
                  type="range" 
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-medium text-outline uppercase tracking-wider">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-container-high rounded-xl p-6 md:p-8 border-t-4 border-secondary shadow-sm">
                <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-2">Monthly EMI</p>
                <h2 className="text-5xl font-extrabold font-headline text-primary mb-6">{formatCurrency(emi)}</h2>
                <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant font-medium">Principal Amount</span>
                    <span className="font-bold">{formatCurrency(amount)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant font-medium">Total Interest</span>
                    <span className="font-bold text-secondary">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-outline-variant/20">
                    <span className="text-on-surface font-bold">Total Payable</span>
                    <span className="text-xl font-extrabold text-primary">{formatCurrency(totalPayable)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold font-headline mb-2">Yearly Amortization Schedule</h3>
                <p className="text-on-surface-variant text-sm">A visual breakdown of how your payments are distributed between principal and interest over the loan duration.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                Download Full PDF <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-outline-variant/10 text-outline font-label uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Principal Paid</th>
                    <th className="px-6 py-4">Interest Paid</th>
                    <th className="px-6 py-4">Balance Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {amortization.map((row) => (
                    <tr key={row.year} className={row.year % 2 === 0 ? "bg-surface-container-low/30" : ""}>
                      <td className="px-6 py-4 font-bold">Year {row.year}</td>
                      <td className="px-6 py-4">{formatCurrency(row.principal)}</td>
                      <td className="px-6 py-4">{formatCurrency(row.interest)}</td>
                      <td className="px-6 py-4">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-24 max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">Home Loan Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">What is a good credit score for a home loan?</h3>
                <p className="text-on-surface-variant leading-relaxed">A credit score of 750 or above is considered ideal for a home loan and can help you secure the lowest possible interest rates.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">Fixed vs Floating interest rate: Which is better?</h3>
                <p className="text-on-surface-variant leading-relaxed">Floating rates are usually lower and benefit from RBI rate cuts. Fixed rates provide certainty but are higher. In the current Indian market, floating rates are more popular.</p>
              </div>
            </div>
          </section>
          </div>
        </main>
      </div>
      <button className="fixed bottom-8 right-8 bg-secondary text-on-secondary p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform lg:hidden">
        <span className="material-symbols-outlined">home_work</span>
      </button>
    </>
  );
}
