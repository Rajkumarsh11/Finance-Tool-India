import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RetirementNPS() {
  const [monthlyContribution, setMonthlyContribution] = useState(15000);
  const [currentAge, setCurrentAge] = useState(28);
  const [retirementAge, setRetirementAge] = useState(60);
  const [expectedReturn, setExpectedReturn] = useState(10);

  const { totalCorpus, monthlyPension } = useMemo(() => {
    const years = Math.max(0, retirementAge - currentAge);
    const n = years * 12; // total months
    const r = expectedReturn / 12 / 100;
    
    // Future Value of monthly investments
    let fv = 0;
    if (r > 0 && n > 0) {
      fv = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }
    
    // Assuming 40% of corpus goes to annuity and it returns 6% per annum
    const annuityAmount = fv * 0.40;
    const estimatedYearlyPension = annuityAmount * 0.06;
    const estimatedMonthlyPension = estimatedYearlyPension / 12;

    return {
      totalCorpus: Math.round(fv),
      monthlyPension: Math.round(estimatedMonthlyPension)
    };
  }, [monthlyContribution, currentAge, retirementAge, expectedReturn]);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="NPS Calculator: Plan Your Retirement & Monthly Pension"
        description="Calculate your National Pension System (NPS) corpus and monthly pension amount. Plan a secure retirement with this easy Indian tax-saving tool."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the benefit of NPS?",
              "answer": {
                "@type": "Answer",
                "text": "NPS offers low-cost professional management, choice of asset allocation (Equity/Debt), and extra tax benefit of ₹50,000 under Section 80CCD(1B)."
              }
            },
            {
              "@type": "Question",
              "name": "Is NPS maturity fully tax-free?",
              "answer": {
                "@type": "Answer",
                "text": "60% of the NPS corpus withdrawn at maturity is tax-free. The remaining 40% must be used to buy an annuity, which is taxable as per your income slab."
              }
            },
            {
              "@type": "Question",
              "name": "How much pension will I get from NPS?",
              "answer": {
                "@type": "Answer",
                "text": "Your pension depends on your total accumulated corpus and the annuity rate at retirement. Typically, 40% of the corpus must be used to provide a monthly pension."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <div className="flex-1 overflow-y-auto bg-surface min-h-screen w-full">
        <Breadcrumbs pageName="NPS Calculator" />
        <div className="p-6 md:p-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <span className="font-label uppercase tracking-[0.2em] font-semibold text-primary mb-4 block">National Pension System</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">NPS Retirement <br/><span className="text-secondary italic">Pension Calculator</span>.</h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-8">Precision engineering for your retirement. Calculate your NPS corpus, estimated pension, and tax benefits under Section 80CCD with our architectural precision tools.</p>
          </div>
          <div className="md:w-2/5 w-full">
            <div className="relative rounded-full overflow-hidden aspect-square bg-surface-container-high flex items-center justify-center p-8">
              <img alt="Abstract architectural visualization" className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwchIopQk-kYCKBDt2fXHijp5FYLNB_z4ah9qTXfAgc6laGRMA2_QJ0TpQR1e44hyWfm099Bv2yqcLiL5edyCL36ivOjY_zaq4-2K3Oy4BwF7vg-1uv27R6kkareO-GUDT7Mw4JxbOfZoobIzu2_5HDkB-XPhwWZgSsXdT8Jgr_NAfz_bf77idCHQj5g6Yvoz9nXdB1w6yszEO0GGsW4rV9d_01F9jOuzjs0OlIGHWSNI0D45se3-1RZMRSow9YvKsTYuS2wtDH94"/>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Layout: Asymmetric Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {/* Input Block */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 rounded-[3rem]">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">edit_note</span> Input Parameters
          </h3>
          <div className="space-y-10">
            {/* Monthly Contribution Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-public-sans font-medium text-on-surface-variant uppercase tracking-wider text-xs">Monthly Contribution</label>
                <span className="text-xl font-bold text-primary">₹ {monthlyContribution.toLocaleString('en-IN')}</span>
              </div>
              <input
                className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
                max="150000"
                min="500"
                step="500"
                type="range"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Age */}
              <div className="space-y-4">
                <label className="font-public-sans font-medium text-on-surface-variant uppercase tracking-wider text-xs">Current Age</label>
                <input
                  className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface font-semibold"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                />
              </div>
              {/* Retirement Age */}
              <div className="space-y-4">
                <label className="font-public-sans font-medium text-on-surface-variant uppercase tracking-wider text-xs">Retirement Age</label>
                <input
                  className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface font-semibold"
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                />
              </div>
            </div>
            {/* Expected Return Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-public-sans font-medium text-on-surface-variant uppercase tracking-wider text-xs">Expected Return (%)</label>
                <span className="text-xl font-bold text-secondary">{expectedReturn}%</span>
              </div>
              <input
                className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary"
                max="15"
                min="5"
                step="0.5"
                type="range"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Result Block */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-primary text-white p-8 rounded-[3rem] flex-1 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
            </div>
            <span className="font-label uppercase tracking-widest text-primary-fixed-dim font-bold mb-2">Total Corpus at Retirement</span>
            <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter">₹{totalCorpus.toLocaleString('en-IN')}</div>
            <p className="text-primary-fixed text-sm opacity-80">Accumulated wealth based on {Math.max(0, retirementAge - currentAge)} years of compounding.</p>
          </div>
          <div className="bg-secondary text-white p-8 rounded-[3rem] flex-1 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <span className="font-label uppercase tracking-widest text-secondary-fixed font-bold mb-2">Estimated Monthly Pension</span>
            <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter">₹{monthlyPension.toLocaleString('en-IN')}</div>
            <p className="text-secondary-fixed text-sm opacity-80">Assuming 40% annuity purchase at 6% yield.</p>
          </div>
        </div>
      </section>

      {/* Insights Section: Editorial Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-surface-container-low p-8 rounded-[2rem]">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">verified</span>
          <h4 className="text-xl font-bold mb-4">Benefits of NPS</h4>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Low-cost investment structure</li>
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Professionally managed by PFMs</li>
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Flexible asset allocation (Equity/Debt)</li>
          </ul>
        </div>
        
        <div className="bg-surface-container-high p-8 rounded-[2rem] border-l-4 border-primary">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">compare_arrows</span>
          <h4 className="text-xl font-bold mb-4">Tier 1 vs Tier 2 accounts</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            <strong className="text-primary">Tier 1:</strong> Mandatory, lock-in till retirement, maximum tax benefits.<br/><br/>
            <strong className="text-primary">Tier 2:</strong> Voluntary, flexible withdrawal, no tax benefits on contribution.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0px_10px_40px_rgba(7,30,39,0.06)]">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">account_balance_wallet</span>
          <h4 className="text-xl font-bold mb-4">Section 80CCD Tax Benefits</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Save up to ₹2 Lakhs annually in taxes.</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs py-1 border-b border-outline-variant/20"><span>80CCD (1)</span> <span className="font-bold text-secondary">₹1.5 Lakhs</span></div>
            <div className="flex justify-between text-xs py-1"><span>80CCD (1B)</span> <span className="font-bold text-secondary">₹50,000 Extra</span></div>
          </div>
        </div>
      </section>

      {/* Asymmetric Call to Action */}
      <section className="bg-surface-container-highest p-12 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Need a Personalized Financial Blueprint?</h2>
          <p className="text-on-surface-variant max-w-md">Our expert advisors help you balance equity and debt for maximum compounding.</p>
        </div>
        <button onClick={() => window.location.href='/contact'} className="z-10 px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-xl hover:translate-y-[-2px] transition-all">Consult an Architect</button>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">NPS Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Can I withdraw NPS before 60?</h3>
            <p className="text-on-surface-variant leading-relaxed">Partial withdrawals are allowed for specific reasons (education, marriage, house purchase, illness) after 3 years, up to 25% of your own contributions.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-lg text-primary mb-2">Which is better: Auto Choice or Active Choice?</h3>
            <p className="text-on-surface-variant leading-relaxed">Active choice gives you control over equity exposure (up to 75%), while Auto choice automatically reduces equity as you age. Active choice is better for financially savvy investors.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
    </div>
  );
}
