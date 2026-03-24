import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";

export default function CarLoan() {
  const [amount, setAmount] = useState(850000);
  const [rate, setRate] = useState(8.75);
  const [tenure, setTenure] = useState(5);

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

    // Generate yearly schedule
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
      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        <ToolSidebar />

        <main className="flex-1 p-4 md:p-6 lg:p-10">
          <section className="mb-12">
            <span className="label-md uppercase tracking-[0.2em] text-primary font-bold text-xs mb-2 block">Financing Your Dream Drive</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight leading-tight mb-4">Car Loan EMI Calculator</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Precision-engineered tool to estimate your monthly payments, understand interest costs, and plan your vehicle purchase with architectural clarity.</p>
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
                  max="5000000" 
                  min="100000" 
                  step="50000" 
                  type="range" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-medium text-outline uppercase tracking-wider">
                  <span>₹ 1L</span>
                  <span>₹ 50L</span>
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
                  step="0.25" 
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
                  max="7" 
                  min="1" 
                  step="1" 
                  type="range" 
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-medium text-outline uppercase tracking-wider">
                  <span>1 Year</span>
                  <span>7 Years</span>
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

              <div className="bg-white rounded-xl p-6 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl">directions_car</span>
                </div>
                <h4 className="font-bold text-on-surface mb-3 font-headline">Impact Analysis</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Increasing your downpayment by <span className="font-bold text-secondary">₹ 1,00,000</span> could save you <span className="font-bold">{formatCurrency((amount * rate / 1200 * Math.pow(1 + rate / 1200, tenure * 12) / (Math.pow(1 + rate / 1200, tenure * 12) - 1) * tenure * 12 - amount) - ((amount-100000) * rate / 1200 * Math.pow(1 + rate / 1200, tenure * 12) / (Math.pow(1 + rate / 1200, tenure * 12) - 1) * tenure * 12 - (amount-100000)))}</span> in interest over {tenure} years.
                </p>
              </div>

              <div className="bg-secondary text-on-secondary rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-1">Check Eligibility</p>
                  <p className="font-headline font-bold">Instant Approval</p>
                </div>
                <button onClick={() => alert("Eligibility checked and application started in a new secure window. (Demo logic)")} className="bg-white text-secondary px-6 py-2 rounded-full font-bold text-sm">Apply Now</button>
              </div>
            </div>
          </div>

          <section className="mt-16 md:mt-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-8 gap-4">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-2">Yearly Amortization Schedule</h3>
                <p className="text-on-surface-variant text-sm">A visual breakdown of how your payments are distributed between principal and interest over the loan duration.</p>
              </div>
              <button onClick={() => alert("Downloading PDF Amortization Schedule... (Demo logic)")} className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary/20 hover:border-primary transition-all pb-1 text-sm md:text-base">
                Download Full PDF <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-outline-variant/10 w-full">
              <table className="w-full text-left text-sm min-w-[500px]">
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
        </main>
      </div>
      <button className="fixed bottom-8 right-8 bg-secondary text-on-secondary p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform lg:hidden">
        <span className="material-symbols-outlined">directions_car</span>
      </button>
    </>
  );
}
