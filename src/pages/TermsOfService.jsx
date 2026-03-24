import React from "react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <header className="bg-surface-container-low pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-label text-xs uppercase tracking-wider font-semibold text-secondary mb-4 block">Legal Framework</span>
          <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight mb-6">Terms of Service</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Last updated: March 21, 2026. Please read these terms carefully before using the FinTools India platform.
          </p>
        </div>
      </header>

      {/* Asymmetric Layout Container */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Quick Navigation (Sidebar) */}
        <aside className="hidden md:block md:col-span-3 sticky top-32 h-fit">
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-primary mb-6">Sections</h3>
            <nav className="flex flex-col gap-3">
              <a className="text-sm font-semibold text-primary py-2 border-l-4 border-primary pl-4 bg-surface-container-high rounded-r-lg" href="#acceptance">1. Acceptance of Terms</a>
              <a className="text-sm text-on-surface-variant hover:text-primary py-2 pl-4 transition-all" href="#services">2. Services Description</a>
              <a className="text-sm text-on-surface-variant hover:text-primary py-2 pl-4 transition-all" href="#user-conduct">3. User Conduct</a>
              <a className="text-sm text-on-surface-variant hover:text-primary py-2 pl-4 transition-all" href="#financial-disclaimer">4. Financial Disclaimer</a>
              <a className="text-sm text-on-surface-variant hover:text-primary py-2 pl-4 transition-all" href="#liability">5. Limitation of Liability</a>
              <a className="text-sm text-on-surface-variant hover:text-primary py-2 pl-4 transition-all" href="#termination">6. Termination</a>
            </nav>
          </div>
        </aside>

        {/* Terms Content */}
        <div className="md:col-span-9 space-y-16">
          {/* Section 1 */}
          <section className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-sm" id="acceptance">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary-fixed p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">gavel</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-on-surface">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-7">
              <p>By accessing or using FinTools India (the "Service"), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and FinTools India. If you do not agree to these terms, you must immediately cease use of the platform.</p>
              <p>We reserve the right to update or modify these terms at any time without prior notice. Continued use of the service following any changes constitutes acceptance of those changes.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-surface-container-low p-10 rounded-[3rem] border-l-8 border-secondary" id="services">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-secondary-fixed p-3 rounded-xl">
                <span className="material-symbols-outlined text-secondary">account_balance</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-on-surface">2. Services Description</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-7">
              <p>FinTools India provides analytical financial calculators, data visualization tools, and market insights intended for educational and informational purposes only. Our tools are designed to assist in making informed decisions but do not replace professional human advice.</p>
              <ul className="list-none space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  SIP and Lumpsum Return Calculators
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Tax Planning &amp; GST Assessment Tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Mortgage and Loan Amortization Schedules
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 - Bento Style Block */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="user-conduct">
            <div className="bg-surface-container p-8 rounded-[2rem]">
              <h3 className="font-headline font-bold text-lg mb-4 text-primary">3. User Responsibilities</h3>
              <p className="text-on-surface-variant text-sm leading-6">You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration.</p>
            </div>
            <div className="bg-surface-container p-8 rounded-[2rem]">
              <h3 className="font-headline font-bold text-lg mb-4 text-primary">Prohibited Actions</h3>
              <p className="text-on-surface-variant text-sm leading-6">Users may not engage in data scraping, reverse engineering, or any activity that disrupts the integrity of our financial data feeds or infrastructure security protocols.</p>
            </div>
          </section>

          {/* Section 4 - Important Alert Style */}
          <section className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10" id="financial-disclaimer">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary text-on-primary p-3 rounded-xl">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-primary">4. Financial Disclaimer</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-7">
              <p className="font-semibold text-on-surface uppercase tracking-tight text-sm">FinTools India is not a SEBI registered investment advisor.</p>
              <p>The calculations and results provided by our tools are based on historical data and user-provided assumptions. We do not guarantee future performance, market accuracy, or financial success based on these outputs. Past performance is not indicative of future results.</p>
              <p>Always consult with a qualified financial advisor, tax consultant, or legal professional before making significant financial commitments.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-sm" id="liability">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-error-container p-3 rounded-xl">
                <span className="material-symbols-outlined text-error">error_outline</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-on-surface">5. Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-7">
              <p>In no event shall FinTools India, its directors, or affiliates be liable for any indirect, incidental, special, or consequential damages resulting from the use or the inability to use the service, including but not limited to financial losses or data corruption.</p>
              <p>We provide the platform "as is" and "as available" without any warranties of any kind, whether express or implied, including the implied warranties of merchantability or fitness for a particular purpose.</p>
            </div>
          </section>

          {/* Contact & Support */}
          <div className="bg-gradient-to-br from-primary to-primary-container p-12 rounded-[3rem] text-on-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold mb-4">Questions about these terms?</h2>
              <p className="opacity-90 mb-8 max-w-lg">Our legal team is here to clarify any aspect of our service agreement and ensure you feel secure while using our tools.</p>
              <button onClick={() => window.location.href='/contact'} className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2">
                Contact Legal Support
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
