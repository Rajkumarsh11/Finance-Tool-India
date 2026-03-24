import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function SIPCalculator() {
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(15);

  const { totalInvested, futureValue, wealthGained } = useMemo(() => {
    const P = amount;
    const r = rate / 100 / 12;
    const n = tenure * 12;

    let fv = 0;
    if (r > 0) {
      fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    } else {
      fv = P * n;
    }

    const invested = P * n;
    const gained = fv - invested;

    return {
      totalInvested: Math.round(invested),
      futureValue: Math.round(fv),
      wealthGained: Math.round(gained),
    };
  }, [amount, rate, tenure]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  
  const formatCompact = (val) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Crores`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    return formatCurrency(val);
  };

  // Heights for the visual breakdown
  const investedPercent = (totalInvested / futureValue) * 100;
  const gainedPercent = (wealthGained / futureValue) * 100;

  return (
    <>
      <SEO 
        title="SIP Calculator 2026: Calculate Mutual Fund Returns Online"
        description="Estimate your future wealth with our SIP calculator. Best for Indian mutual fund investors to calculate wealth gain and expected returns in Lakhs/Crores."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How is SIP return calculated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SIP returns are calculated using the FV (Future Value) formula, which considers the periodic investment, rate of return, and time period, compounded monthly."
              }
            },
            {
              "@type": "Question",
              "name": "What is the average return on SIP in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Historical data shows that equity mutual funds in India typically deliver annual returns between 12% to 15% over a long tenure (10+ years)."
              }
            },
            {
              "@type": "Question",
              "name": "Can I stop my SIP anytime?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, mutual fund SIPs are highly flexible. You can stop, pause, or change the investment amount at any time without any penalty from the fund house."
              }
            },
            {
              "@type": "Question",
              "name": "Is SIP better than Lumpsum in a bull market?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SIP is generally safer due to Rupee Cost Averaging. If the market is rising, lumpsum might yield more, but SIP protects you if the market corrects after your investment."
              }
            }
          ]
        }}
      />
      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        <ToolSidebar />

        <main className="flex-1">
          <Breadcrumbs pageName="SIP Calculator" />
          <div className="p-4 md:p-6 lg:p-10">
          <section className="mb-12">
            <span className="font-label text-xs tracking-[0.2em] text-primary uppercase font-semibold">Financial Planning Tools</span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight leading-tight">SIP Returns Calculator</h1>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl leading-relaxed">Calculate the potential growth of your mutual fund investments. Plan your wealth creation journey with architectural precision.</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6 md:space-y-8 bg-surface-container-low p-5 md:p-8 rounded-xl">
              {/* Monthly Investment */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-headline font-bold text-on-surface">Monthly Investment</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg text-primary font-bold text-lg">
                    {formatCurrency(amount)}
                  </div>
                </div>
                <input 
                  className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary" 
                  max="100000" min="500" step="500" type="range" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
                  <span>₹500</span>
                  <span>₹1L</span>
                </div>
              </div>

              {/* Expected Return Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-headline font-bold text-on-surface">Expected Return Rate (p.a)</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg text-primary font-bold text-lg">
                    {rate}%
                  </div>
                </div>
                <input 
                  className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary" 
                  max="30" min="1" step="0.5" type="range" 
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-headline font-bold text-on-surface">Time Period (Years)</label>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg text-primary font-bold text-lg">
                    {tenure} Yrs
                  </div>
                </div>
                <input 
                  className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary" 
                  max="40" min="1" step="1" type="range" 
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-label text-outline uppercase tracking-wider">
                  <span>1 Yr</span>
                  <span>40 Yrs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-primary-container p-6 md:p-8 rounded-xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-label text-xs uppercase tracking-widest text-on-primary-container opacity-80">Estimated Wealth</h3>
                  <div className="font-headline text-4xl font-extrabold mt-2">{formatCompact(futureValue)}</div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-sm opacity-80">Total Invested</span>
                      <span className="font-bold">{formatCurrency(totalInvested)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">Wealth Gained</span>
                      <span className="font-bold text-secondary-fixed">{formatCurrency(wealthGained)}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-surface-container-high p-5 md:p-6 rounded-xl flex-1 flex flex-col">
                <h4 className="font-headline font-bold text-sm mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">insights</span>
                  Investment Breakdown
                </h4>
                <div className="flex-1 flex items-end justify-center gap-6 py-4">
                  {/* Invested Column */}
                  <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
                    <div className="w-full bg-primary/20 rounded-t-lg transition-all group-hover:bg-primary/30" style={{ height: `${Math.max(10, investedPercent)}%` }}></div>
                    <span className="text-[10px] font-label uppercase text-outline text-center">Invested</span>
                  </div>
                  {/* Returns Column */}
                  <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
                    <div className="w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110" style={{ height: `${Math.max(10, gainedPercent)}%` }}></div>
                    <span className="text-[10px] font-label uppercase text-secondary font-bold text-center">Returns</span>
                  </div>
                </div>
                <button onClick={() => alert("Redirecting to our secure investment portal... (Demo logic)")} className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
                  Invest Now
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
            <article className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">What is a Systematic Investment Plan (SIP)?</h2>
              <p className="text-on-surface-variant leading-relaxed">
                A Systematic Investment Plan (SIP) is a disciplined method of investing in mutual funds where you invest a fixed amount regularly—monthly or quarterly. It leverages the power of <strong>Compounding</strong> and <strong>Rupee Cost Averaging</strong>, allowing you to build wealth over the long term without timing the market.
              </p>
              <div className="p-6 bg-surface-container-low rounded-xl">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Key Benefits
                </h4>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Disciplined Savings:</strong> Automates your investment habit.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Affordability:</strong> Start with as little as ₹500 per month.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Flexibility:</strong> Stop, skip, or increase SIPs anytime.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">How to Use the SIP Calculator?</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Our precision architected tool helps you visualize your future corpus in three simple steps:
              </p>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Input Monthly Investment</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Slide to select the amount you can comfortably invest every month.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Set Expected Return</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Historical equity mutual fund returns range between 12-15% over long periods.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Choose Duration</h4>
                    <p className="text-sm text-on-surface-variant mt-1">See how staying invested for 5, 10, or 20 years changes your wealth drastically.</p>
                  </div>
                </li>
              </ol>
            </article>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">SIP Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
                <h3 className="font-bold text-lg text-primary mb-2">What is the best time to start an SIP?</h3>
                <p className="text-on-surface-variant leading-relaxed italic border-l-4 border-secondary/30 pl-4">"The best time to start was yesterday, the second best time is today."</p>
                <p className="text-on-surface-variant leading-relaxed mt-2 uppercase tracking-[0.05em] text-xs font-semibold">Since SIP uses rupee cost averaging, you don't need to time the market.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
                <h3 className="font-bold text-lg text-primary mb-2">Is SIP better than Lumpsum?</h3>
                <p className="text-on-surface-variant leading-relaxed">SIP is generally better for salaried individuals as it averages out the cost of purchase during market volatility, whereas lumpsum is ideal if you have a large corpus and the market is undervalued.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
                <h3 className="font-bold text-lg text-primary mb-2">How much should I invest in SIP?</h3>
                <p className="text-on-surface-variant leading-relaxed">A common rule of thumb is to save at least 20% of your take-home pay, with a significant portion going into SIPs aligned with your long-term goals.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
                <h3 className="font-bold text-lg text-primary mb-2">Is SIP better than Lumpsum in a bull market?</h3>
                <p className="text-on-surface-variant leading-relaxed">SIP is generally safer due to Rupee Cost Averaging. If the market is rising, lumpsum might yield more, but SIP protects you if the market corrects after your investment.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      </div>
      <button className="fixed bottom-8 right-8 bg-gradient-to-br from-primary to-primary-container text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform lg:hidden z-40">
        <span className="material-symbols-outlined">add_chart</span>
      </button>
    </>
  );
}
