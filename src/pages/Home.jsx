import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO 
        title="FinTools India: Free Financial Calculators & Planning Tools"
        description="India's best free financial tools. Calculate SIP, GST, EMI, and Income Tax with 100% accuracy. Plan your financial future with FinTools India."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are FinTools India calculators accurate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our calculators are built using standardized Indian financial regulations (RBI, Income Tax Dept) and are updated for the 2026-27 fiscal year to ensure 100% accuracy."
              }
            },
            {
              "@type": "Question",
              "name": "Is my data safe on FinTools India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We use a 'Zero-Storage' architecture, meaning all calculations happen locally in your browser. No personal financial data is ever sent to or stored on our servers."
              }
            },
            {
              "@type": "Question",
              "name": "Is it free to use FinTools India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our financial tools and calculators are 100% free to use for all users, with no hidden costs or subscriptions."
              }
            },
            {
              "@type": "Question",
              "name": "How often are the calculators updated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We update our tools as soon as new policies are announced by the RBI or the Ministry of Finance, such as the new tax slabs for FY 2026-27."
              }
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-12 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="w-full lg:w-3/5 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-secondary-container text-on-secondary-container rounded-full text-[10px] md:text-xs font-bold font-label tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              Privacy First Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary leading-tight">
              Precision in every <span className="text-secondary">calculation.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Navigate your financial journey with India's most accurate calculator suite. From tax planning to retirement goals, we provide the clarity you need to move forward.
            </p>
            {/* Trust Banner */}
            <div className="bg-surface-container-high p-4 md:p-6 rounded-xl border-l-4 border-primary flex flex-col sm:flex-row items-start sm:items-center text-left gap-4 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">lock</span>
              <div>
                <h3 className="font-headline font-bold text-primary mb-1 text-sm md:text-base">Our "Zero-Storage" Promise</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">We process your numbers instantly. No data is stored on our servers, ensuring your financial privacy is 100% guaranteed. No sign-ups, no cookies, no tracking.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link to="/calculators" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-sm md:text-base">
                Explore All Tools
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="bg-white border-2 border-outline-variant text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-surface transition-all text-sm md:text-base">
                How it works
              </button>
            </div>
          </div>
          {/* Abstract Visual Representation */}
          <div className="lg:w-2/5 relative">
            <div className="w-full aspect-square bg-gradient-to-br from-primary-fixed to-secondary-fixed rounded-[3rem] rotate-3 relative overflow-hidden flex items-center justify-center">
              <img className="w-full h-full object-cover mix-blend-overlay opacity-60" alt="Modern clean workspace with financial tools and laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-FL4Uz-7pOuARSr0CgF48AWbPKZQu8OeXu7Dol-dYps9NS6-Oo0sCZX8PgM_98205PznDPPmRsxQaP7VQVxv7s0xSoapnMVQTr6lB9XLZDdAtVLb7welxFmErGHkzceIiEUG9C_NPkF97vZnop_8hOhOGTJ0fniuq6OgP-cLVOaPSxPmNlegFLmy-aT1o7thCye8zfRg2uaDVSurLeDXzidKKjPKDW7yBt1j3IdSAPVrB43DHFfwu7yN04_paabzLRUCgquncwCOv" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-8 rounded-2xl w-4/5 shadow-2xl space-y-4">
                  <div className="h-4 w-1/3 bg-white/40 rounded"></div>
                  <div className="h-8 w-full bg-white/60 rounded"></div>
                  <div className="h-4 w-2/3 bg-white/40 rounded"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-12 bg-secondary-container/50 rounded-lg"></div>
                    <div className="h-12 bg-primary-container/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Stat */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹0.00</div>
                <div className="text-xs text-on-surface-variant font-medium">Cost to use. Forever.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-3 mt-4 md:mt-0">Precision Ecosystem</h2>
              <p className="text-on-surface-variant max-w-xl">Every tool is architected to Indian financial regulations, updated for the 2026-27 fiscal year.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="p-3 rounded-full bg-white text-primary border border-outline-variant hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-3 rounded-full bg-white text-primary border border-outline-variant hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Investments */}
            <Link to="/calculators" className="md:col-span-8 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                  <h3 className="text-2xl font-bold text-primary mb-2">Wealth &amp; Investments</h3>
                  <p className="text-on-surface-variant max-w-md">Plan your compound growth through SIP, PPF, Fixed Deposits, and Mutual Fund returns.</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                <div className="bg-surface-container p-4 rounded-xl text-center">
                  <div className="text-sm font-bold text-primary">SIP</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Systematic</div>
                </div>
                <div className="bg-surface-container p-4 rounded-xl text-center">
                  <div className="text-sm font-bold text-primary">PPF</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Public Prov</div>
                </div>
                <div className="bg-surface-container p-4 rounded-xl text-center">
                  <div className="text-sm font-bold text-primary">FD</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Fixed Dep</div>
                </div>
                <div className="bg-surface-container p-4 rounded-xl text-center">
                  <div className="text-sm font-bold text-primary">Lumpsum</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">One-time</div>
                </div>
              </div>
            </Link>

            {/* Taxes */}
            <Link to="/income-tax" className="md:col-span-4 bg-primary text-on-primary p-8 rounded-[2rem] shadow-lg flex flex-col group cursor-pointer overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-4 text-tertiary-fixed">receipt_long</span>
                <h3 className="text-2xl font-bold mb-2">Taxes (IT &amp; GST)</h3>
                <p className="text-primary-fixed-dim text-sm mb-8">Navigate the complexities of Indian tax codes. Old vs New regime comparisons available.</p>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm font-medium">Income Tax 24-25</span>
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm font-medium">GST Calculator</span>
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm font-medium">TDS Estimation</span>
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </li>
              </ul>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </Link>

            {/* Loans */}
            <Link to="/home-loan" className="md:col-span-4 bg-surface-container-highest p-8 rounded-[2rem] shadow-sm group cursor-pointer hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">home_work</span>
              <h3 className="text-xl font-bold text-primary mb-2">Loan &amp; EMI</h3>
              <p className="text-on-surface-variant text-sm mb-6">Home, Car, or Personal loans. Amortization schedules at your fingertips.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-primary text-[10px] font-bold rounded-full border border-outline-variant">EMI</span>
                <span className="px-3 py-1 bg-white text-primary text-[10px] font-bold rounded-full border border-outline-variant">PREPAYMENT</span>
              </div>
            </Link>

            {/* Retirement */}
            <Link to="/retirement" className="md:col-span-5 bg-secondary text-on-secondary p-8 rounded-[2rem] shadow-sm group cursor-pointer overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-4">elderly</span>
                  <h3 className="text-xl font-bold mb-2">Retirement Planning</h3>
                  <p className="text-secondary-fixed text-sm">Inflation-adjusted corpus planning for a secure sunset.</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-secondary overflow-hidden bg-white/20 flex items-center justify-center"><span className="material-symbols-outlined text-sm">person</span></div>
                    <div className="w-8 h-8 rounded-full border-2 border-secondary overflow-hidden bg-white/30 flex items-center justify-center"><span className="material-symbols-outlined text-sm">person</span></div>
                    <div className="w-8 h-8 rounded-full border-2 border-secondary overflow-hidden bg-white/40 flex items-center justify-center"><span className="material-symbols-outlined text-sm">add</span></div>
                  </div>
                  <span className="text-xs font-medium">2.4k+ Plans Generated Today</span>
                </div>
              </div>
              <img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" alt="Abstract green organic pattern representing growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr8YoOLRIzZ4TlWGMY2aM70VomGfeAPLE56OMFLhqUPKJhkyuNnfjkBjmKn0pe6H70Hehp7zVvAaBw1ZuIfaiPT83W2s0oD8pXVqbQTqQ4jBsHve0-dUgsCsxz8rkRXLbyb6EcQUeu2nauJBA-cHubLPe3H8cwioUZ5ETT_5XkM2UD10rxnffK3T9428UkwRv_Lw2I5E9Jd0UGSsChIT6hT5ic_X4-FQfsnFEqp-MeJ6zK10Hel3XmN_QuiLy6fMzd7x_53cDMkLFq" />
            </Link>

            {/* Insurance */}
            <Link to="/health-insurance" className="md:col-span-3 bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
              </div>
              <h3 className="font-bold text-primary">Insurance</h3>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Term &amp; Health</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features/SEO Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 order-2 md:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">update</span>
              </div>
              <h4 className="font-bold text-primary">Real-time Policy Updates</h4>
              <p className="text-sm text-on-surface-variant">Our algorithms are synced with RBI and Ministry of Finance updates hourly.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">devices</span>
              </div>
              <h4 className="font-bold text-primary">Cross-Device Flow</h4>
              <p className="text-sm text-on-surface-variant">Start a calculation on mobile, finish on desktop. Seamless and responsive.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h4 className="font-bold text-primary">Military-Grade Privacy</h4>
              <p className="text-sm text-on-surface-variant">Client-side processing means your sensitive data never leaves your browser.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h4 className="font-bold text-primary">Deep Visual Analytics</h4>
              <p className="text-sm text-on-surface-variant">Interactive charts for every tool to help you visualize your financial future.</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">Why Financial Accuracy Matters in India</h2>
          <p className="text-on-surface-variant mb-6 text-lg">With the constant evolution of tax slabs and interest rate fluctuations by the RBI, relying on static tools can lead to significant financial leakage.</p>
          <p className="text-on-surface-variant mb-8">FinTools India is built by a consortium of CAs and software architects to ensure that every decimal point is in the right place. We cover Home Loans, Personal Loans, SIP projections, GST computations, and the complex new Income Tax regimes for 2026-2027.</p>
          <div className="p-6 bg-white rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-6">
            <img className="w-20 h-20 rounded-full object-cover" alt="Professional Indian finance expert smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqjTkDcX30DLi1wtqGf1Bt8LPPxrHvEq5xV-poQMAKZWknU_Fun6L4Lzc470omxHzY35x-fayHxC6k_PaAoFwx3V9ROKay1ftpufaveI9OgS4Oy7RYoumk6qsm23WdbMazJJgIKfKFIlAz7zLubl_lLBosuJ2LlSjJAMTVa4uq7yET6-lm8sG0yiYo1g2PV3bPqQGGuMVMMIdyu7XLQCQjKzw6SP1yacIey5wQSAJBccUov7WxkOCCafKeB0dEqg2rs9GE-VOxkWpA" />
            <div>
              <p className="italic text-on-surface-variant text-sm">"The only calculator site I trust for my clients' preliminary estimations."</p>
              <p className="font-bold text-primary mt-2">Arjun Mehta, Chartered Accountant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto bg-primary-container text-on-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Stay Ahead of Policy Changes</h2>
            <p className="text-on-primary-container text-lg mb-10 opacity-90">Get a monthly digest of major financial changes in India. No spam, just the facts that affect your wallet.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 placeholder:text-white/50 focus:ring-2 focus:ring-white/50 text-white outline-none" placeholder="Your email address" type="email" />
              <button onClick={() => alert("Subscription successful! You will receive our newsletter soon.")} className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-on-secondary-container transition-all" type="button">Subscribe</button>
            </form>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-4 md:px-8 lg:px-12 py-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">Are FinTools India calculators updated for 2026?</h3>
              <p className="text-on-surface-variant leading-relaxed">Yes, all our tools, including the Income Tax and GST calculators, are fully updated with the latest 2026-27 regulations and tax slabs.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">Do I need to sign up to use the tools?</h3>
              <p className="text-on-surface-variant leading-relaxed">No sign-up is required. You can access all our financial tools instantly and anonymously without providing any personal information.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">Can I use these tools on my phone?</h3>
              <p className="text-on-surface-variant leading-relaxed">Yes, FinTools India is designed with a mobile-first approach, ensuring a seamless experience across smartphones, tablets, and desktops.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">How often are the calculators updated?</h3>
              <p className="text-on-surface-variant leading-relaxed">We update our tools as soon as new policies are announced by the RBI or the Ministry of Finance, such as the new tax slabs for FY 2026-27.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
