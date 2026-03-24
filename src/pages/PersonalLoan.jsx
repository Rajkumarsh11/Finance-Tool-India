import React, { useState, useMemo } from "react";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PersonalLoan() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenureYears, setTenureYears] = useState(3);

  const results = useMemo(() => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate);
    const N = parseFloat(tenureYears);

    if (isNaN(P) || isNaN(R) || isNaN(N) || N <= 0 || P <= 0) {
      return { emi: 0, totalInterest: 0, totalPayable: 0, amortization: [] };
    }

    const r = R / (12 * 100); // monthly interest rate
    const n = N * 12; // number of months

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;

    // Amortization Schedule (Yearly)
    let balance = P;
    let schedule = [];
    let year = 1;

    for (let i = 1; i <= n; i++) {
        let interestForMonth = balance * r;
        let principalForMonth = emi - interestForMonth;
        
        let yearlyPrincipal = 0;
        let yearlyInterest = 0;
        let openingBalance = balance;

        for(let j=0; j<12 && i<=n; j++) {
            interestForMonth = balance * r;
            principalForMonth = emi - interestForMonth;
            yearlyInterest += interestForMonth;
            yearlyPrincipal += principalForMonth;
            balance -= principalForMonth;
            if(j < 11) i++;
        }
        
        schedule.push({
            year: `Year ${year}`,
            opening: openingBalance,
            emiPaid: emi * 12, // approx for full year
            interest: yearlyInterest,
            principal: yearlyPrincipal,
            closing: Math.max(0, balance)
        });
        year++;
    }

    return {
      emi: emi.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      totalPayable: totalPayable.toFixed(0),
      schedule,
      principalPerc: ((P / totalPayable) * 100).toFixed(1),
      interestPerc: ((totalInterest / totalPayable) * 100).toFixed(1)
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="Personal Loan EMI Calculator: Instant EMI & Interest Check"
        description="Calculate personal loan EMIs for any bank in India. Understand total repayment amount and plan your monthly budget easily."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the formula for Personal Loan EMI?",
              "answer": {
                "@type": "Answer",
                "text": "The formula is: [P x R x (1+R)^N]/[(1+R)^N-1]. P is for principal, R is for monthly interest rate, and N is for tenure in months."
              }
            },
            {
              "@type": "Question",
              "name": "What is the minimum salary for a personal loan?",
              "answer": {
                "@type": "Answer",
                "text": "Most banks in India require a minimum monthly net income of ₹15,000 to ₹25,000, depending on the city and the lender."
              }
            },
            {
              "@type": "Question",
              "name": "How long does personal loan approval take?",
              "answer": {
                "@type": "Answer",
                "text": "Instant personal loans can be approved in minutes, while traditional bank processes may take 2-5 working days for documentation and verification."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <div className="flex-1 overflow-hidden w-full">
        <Breadcrumbs pageName="Personal Loan Calculator" />
        <div className="p-4 md:p-8 lg:p-12">
      {/* Hero Header */}
      <header className="mb-12">
        <span className="text-secondary font-label text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Calculator</span>
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight leading-none mb-4">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Calculate your monthly repayments with precision. Plan your finances with our architecturally structured personal loan tool.
        </p>
      </header>

      {/* Calculator Bento Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-16">
        {/* Input Section */}
        <div className="xl:col-span-7 bg-surface-container-low rounded-xl p-5 md:p-8 space-y-8 md:space-y-10">
          {/* Loan Amount */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="font-headline font-bold text-primary">Loan Amount</label>
              <div className="bg-surface-container-lowest px-4 py-2 rounded-lg flex items-center gap-2 outline-none focus-within:ring-2 focus-within:ring-primary transition-all line-height-none">
                <span className="text-outline font-medium">₹</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="border-none p-0 focus:ring-0 font-bold text-lg w-28 text-right bg-transparent"
                />
              </div>
            </div>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
              <span>50k</span>
              <span>50L</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="font-headline font-bold text-primary">Interest Rate (p.a)</label>
              <div className="bg-surface-container-lowest px-4 py-2 rounded-lg flex items-center gap-2 outline-none focus-within:ring-2 focus-within:ring-primary transition-all">
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="border-none p-0 focus:ring-0 font-bold text-lg w-16 text-right bg-transparent"
                />
                <span className="text-outline font-medium">%</span>
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="36"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
              <span>5%</span>
              <span>36%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="font-headline font-bold text-primary">Loan Tenure</label>
              <div className="bg-surface-container-lowest px-4 py-2 rounded-lg flex items-center gap-2 outline-none focus-within:ring-2 focus-within:ring-primary transition-all">
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(e.target.value)}
                  className="border-none p-0 focus:ring-0 font-bold text-lg w-12 text-right bg-transparent"
                />
                <span className="text-outline font-medium">Years</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(e.target.value)}
              className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
              <span>1 Yr</span>
              <span>5 Yrs</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          <div className="bg-primary-container text-white rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-label text-xs uppercase tracking-[0.2em] opacity-80 mb-2">Monthly EMI</p>
              <h2 className="text-5xl font-extrabold font-headline mb-8">{formatCurrency(results.emi)}</h2>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-widest opacity-70 mb-1">Principal Amount</p>
                  <p className="font-bold text-lg">{formatCurrency(loanAmount)}</p>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-widest opacity-70 mb-1">Total Interest</p>
                  <p className="font-bold text-lg">{formatCurrency(results.totalInterest)}</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-label text-[10px] uppercase tracking-widest opacity-70 mb-1">Total Payable</p>
                <p className="font-bold text-2xl">{formatCurrency(results.totalPayable)}</p>
              </div>
            </div>
            {/* Abstract Visual Decor */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-white rounded-full blur-[60px] opacity-10"></div>
          </div>

          <div className="bg-surface-container-high rounded-xl p-6 md:p-8">
            <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">trending_up</span>
              Amortization Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Principal</span>
                <span className="font-bold text-primary">{results.principalPerc}%</span>
              </div>
              <div className="w-full h-3 bg-surface-variant rounded-full overflow-hidden flex">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${results.principalPerc}%` }}></div>
                <div className="h-full bg-secondary-container transition-all duration-500" style={{ width: `${results.interestPerc}%` }}></div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Interest</span>
                <span className="font-bold text-secondary">{results.interestPerc}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repayment Schedule Table */}
      {results.schedule && results.schedule.length > 0 && (
          <section className="mb-20 overflow-x-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-headline text-primary">Repayment Schedule</h2>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden min-w-[600px]">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant text-[10px] uppercase font-label tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Opening Balance</th>
                    <th className="px-6 py-4">EMI Paid</th>
                    <th className="px-6 py-4">Interest</th>
                    <th className="px-6 py-4">Principal</th>
                    <th className="px-6 py-4">Closing Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {results.schedule.map((row, idx) => (
                      <tr key={idx} className="hover:bg-surface-container-low transition-colors text-sm">
                        <td className="px-6 py-4 font-bold text-primary">{row.year}</td>
                        <td className="px-6 py-4">{formatCurrency(row.opening)}</td>
                        <td className="px-6 py-4">{formatCurrency(row.emiPaid)}</td>
                        <td className="px-6 py-4 text-error">{formatCurrency(row.interest)}</td>
                        <td className="px-6 py-4 text-secondary">{formatCurrency(row.principal)}</td>
                        <td className="px-6 py-4 font-semibold">{formatCurrency(row.closing)}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
      )}

      {/* FAQ Section */}
      <section className="mt-24 max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">Personal Loan Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Can I get a personal loan with a low credit score?</h3>
            <p className="text-on-surface-variant leading-relaxed">It's possible, but you may face higher interest rates or stricter eligibility criteria. Some NBFCs specialized in lending to those with scores below 750.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Is a Personal Loan better than a Credit Card loan?</h3>
            <p className="text-on-surface-variant leading-relaxed">Generally, personal loans have lower interest rates (10-18%) compared to credit card interest (36-48%), making them a better choice for debt consolidation.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
    </div>
  );
}
