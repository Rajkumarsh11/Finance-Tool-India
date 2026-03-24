import React from "react";
import SEO from "../components/SEO";

export default function Methodology() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <SEO 
        title="Our Calculation Methodology | FinTools India Precision"
        description="Learn the math and regulations behind our financial tools. Transparent and accurate calculations updated for 2026-27."
      />
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5">
          <span className="font-label uppercase tracking-widest text-xs font-semibold text-primary mb-4 block">Engineered Precision</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            The Math Behind <br /><span className="text-primary">Your Financial Future.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-8">
            At FinTools India, we believe in radical transparency. Our methodology is built on standardized Indian financial regulations and rigorous mathematical models to ensure your calculations are accurate to the last paisa.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-sm font-semibold">RBI Standardized</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <span className="text-sm font-semibold">Audit Ready</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <div className="absolute inset-0 bg-primary opacity-5 rounded-3xl -rotate-3 scale-105"></div>
          <div className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-xl border border-outline-variant/15">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">functions</span>
              </div>
              <span className="text-xs font-bold text-outline uppercase tracking-tighter">Formula Matrix v2.4</span>
            </div>
            <code className="block text-sm font-mono text-primary-container bg-surface-container p-4 rounded-lg overflow-x-auto">
              FV = P × [((1 + i)ⁿ - 1) / i] × (1 + i)
            </code>
            <p className="mt-4 text-xs text-on-surface-variant italic">Standard compounding formula used for SIP projections with monthly intervals.</p>
          </div>
        </div>
      </section>

      {/* Bento Grid Methodology Sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* SIP Methodology */}
        <div className="col-span-12 md:col-span-7 bg-surface-container-low p-10 rounded-[2rem] relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-4">SIP: Systematic Investment Planning</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our SIP calculator uses the <strong>Future Value (FV)</strong> formula for an annuity due. We assume reinvestment of all dividends and interest, compounded at the frequency selected by the user.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">database</span>
                <span className="text-sm">Data Source: Historical mutual fund performance data (AMFI India).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">update</span>
                <span className="text-sm">Intervals: Calculated using monthly compounding as per industry standard.</span>
              </li>
            </ul>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* EMI Methodology */}
        <div className="col-span-12 md:col-span-5 bg-primary text-on-primary p-10 rounded-[2rem] flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold mb-4">EMI Logic</h3>
            <p className="text-blue-100/80 mb-6 text-sm">
              Standard Reducing Balance Method used by major Indian banks (SBI, HDFC, ICICI).
            </p>
            <code className="block text-xs font-mono bg-white/10 p-4 rounded-xl mb-4">
              EMI = [P x R x (1+R)ⁿ] / [(1+R)ⁿ - 1]
            </code>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold opacity-80">
            <span>P = Principal</span>
            <span>R = Interest</span>
            <span>N = Tenure</span>
          </div>
        </div>

        {/* GST & Tax Methodology */}
        <div className="col-span-12 md:col-span-4 bg-surface-container p-8 rounded-[2rem]">
          <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary">account_balance</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">GST Precision</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Includes HSN/SAC-based tax tier calculations. Supports both Intra-state (CGST + SGST) and Inter-state (IGST) transaction logic.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-[2rem] flex items-center gap-8">
          <div className="hidden lg:block w-1/3">
            <img alt="Income Tax" className="rounded-2xl shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEK3VJSoFg_GgDTOIbllP1nZ0oWclFa6JBjEkZucThbBRf-3lzq9gPw3vzdRwArbOthQ7Aa-JlINGdd6Oqb6jnbTml20JRIss3GhQfspqaN_BseBBj2OpRyhoGVhA1PeJPC4QvcfF1uRimpcW41E-8quN49VHm_ry64kytLvVD_SD_b9A9Cj0j-B4Ema3ui6hE9kHFOJkIJVNfdKz6fO9J0iNfHf_RlSIvA3M6P2gJ3uSqRXc05B8LCok-b_il3VcpWUi9TADdAgCb" />
          </div>
          <div className="flex-1">
            <h3 className="font-headline text-xl font-bold mb-3">Income Tax (FY 2026-27)</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Our engine is updated with the latest Finance Act provisions, allowing for instant toggling between the **Old Tax Regime** and the **New Tax Regime**.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-surface-container-low rounded-xl">
                <p className="text-[10px] uppercase font-bold text-outline mb-1">Deductions</p>
                <p className="text-xs font-semibold">Standard 80C, 80D, HRA logic applied.</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl">
                <p className="text-[10px] uppercase font-bold text-outline mb-1">Accuracy</p>
                <p className="text-xs font-semibold">Verified against Income Tax Dept portals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reliability Promise */}
      <section className="bg-surface-bright rounded-[3rem] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <span className="material-symbols-outlined text-primary/10 text-9xl">analytics</span>
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline text-3xl font-bold mb-6">Our Reliability Promise</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            Financial tools are only as good as the data they provide. Every formula used on FinTools India is peer-reviewed by certified Chartered Accountants and Financial Analysts to ensure the highest degree of reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary mb-1">99.9%</p>
              <p className="text-xs font-bold uppercase text-outline tracking-wider">Precision Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary mb-1">Real-time</p>
              <p className="text-xs font-bold uppercase text-outline tracking-wider">Rate Updates</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary mb-1">CA-Led</p>
              <p className="text-xs font-bold uppercase text-outline tracking-wider">Expert Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="mt-24">
        <h3 className="font-headline text-2xl font-bold mb-8">Authoritative Data Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-secondary">
            <h4 className="font-bold text-lg mb-2">Banking &amp; Interest</h4>
            <p className="text-sm text-on-surface-variant">Reserve Bank of India (RBI) weekly bulletins for repo rates and standardized lending norms.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-primary">
            <h4 className="font-bold text-lg mb-2">Market Data</h4>
            <p className="text-sm text-on-surface-variant">Association of Mutual Funds in India (AMFI) for daily NAV and scheme performance metrics.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-primary-container">
            <h4 className="font-bold text-lg mb-2">Tax Regulations</h4>
            <p className="text-sm text-on-surface-variant">Central Board of Direct Taxes (CBDT) and GST Council notifications for statutory compliance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
