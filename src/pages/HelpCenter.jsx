import React from "react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-on-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-label uppercase tracking-wider text-xs font-semibold mb-4 opacity-80">Support Center</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">How can we help you grow?</h1>
          <div className="relative max-w-2xl mx-auto">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
            <input className="w-full pl-16 pr-8 py-5 rounded-full bg-surface-container-lowest text-on-surface border-none shadow-2xl text-lg focus:ring-4 focus:ring-secondary/30 outline-none" placeholder="Search for calculators, tax rules, or privacy settings..." type="text" />
          </div>
        </div>
      </section>

      {/* Category Grid (Bento Style) */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to="/calculators" className="block bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">calculate</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-on-surface">Calculators &amp; Tools</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Understand the math behind our SIP, Lumpsum, and Tax planning instruments.</p>
            <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              8 Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </Link>

          {/* Card 2 */}
          <Link to="/privacy" className="block bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary">shield</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-on-surface">Data &amp; Privacy</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">How we protect your financial data and ensure absolute tool transparency.</p>
            <span className="text-secondary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              5 Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </Link>

          {/* Card 3 */}
          <Link to="/methodology" className="block bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-tertiary">account_balance</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-on-surface">General Guidance</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">New to investing? Find guides on Indian financial regulations and market basics.</p>
            <span className="text-tertiary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              12 Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </Link>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="flex flex-col gap-16">
          {/* Section: Calculator Accuracy */}
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-primary sticky top-32">Calculators</h2>
              <p className="text-sm text-on-surface-variant mt-2">Technical queries about tool precision.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <h4 className="font-bold mb-2">How accurate are the SIP projections?</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Our projections use standard compound interest formulas with annual or monthly rests. While mathematically precise, they are based on the interest rates you input. Actual market returns vary.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl">
                <h4 className="font-bold mb-2">Are the latest Income Tax rules updated for 2026-27?</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Yes, our Income Tax calculator accounts for both Old and New Tax Regimes as per the latest Union Budget amendments in India.</p>
              </div>
            </div>
          </div>

          {/* Section: Privacy */}
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-secondary sticky top-32">Data Security</h2>
              <p className="text-sm text-on-surface-variant mt-2">Safety and trust protocols.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <h4 className="font-bold mb-2">Do you store my financial inputs?</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">No. All calculator inputs are processed locally on your device or in volatile session memory. We do not store personal financial data on our servers.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl">
                <h4 className="font-bold mb-2">Is there any tracking on my reports?</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">We use basic anonymous analytics to improve tool performance, but no PII (Personally Identifiable Information) is ever linked to your calculations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Contact Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="relative overflow-hidden bg-primary-container rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex-1">
            <h2 className="text-4xl font-extrabold text-white mb-6">Can't find what you're looking for?</h2>
            <p className="text-on-primary-container text-lg max-w-lg">Our financial architects are available for technical support and tool methodology clarifications.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined">mail</span>
              Email Support
            </Link>
            <button onClick={() => alert("Live Chat is currently offline. Please email support.")} className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">chat</span>
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
