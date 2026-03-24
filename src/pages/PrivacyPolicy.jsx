import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <main className="flex-grow max-w-5xl mx-auto px-6 py-12 md:py-20">
      <SEO 
        title="Privacy Policy | FinTools India: Zero-Storage Guarantee"
        description="Read our privacy policy. Your data never leaves your browser. 100% privacy and security for all your financial calculations."
      />
      {/* Hero Header */}
      <header className="mb-16">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Compliance &amp; Integrity</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">Legal &amp; Data Privacy</h1>
        <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
          At FinTools India, we believe your financial data is your private property. Our architecture is built on the principle of zero-server reliance for all sensitive calculations.
        </p>
      </header>

      {/* Privacy Pillar: Client Side Only */}
      <section className="bg-surface-container-low rounded-xl p-8 md:p-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <span className="material-symbols-outlined text-9xl">lock_open</span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary-container p-3 rounded-full">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Client-Side Calculation Protocol</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                FinTools India uses a <span className="font-bold text-secondary">Local-Execution Architecture</span>. This means 100% of the mathematical logic for your investments, taxes, and loans happens inside your browser.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>No input values (salary, loan amount, etc.) are transmitted to our servers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Results are generated instantly on your device.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Closing the tab effectively wipes the session data.</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-high p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Technical Assurance</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our developers utilize modern JavaScript WebWorkers to process complex compound interest and tax slab logic. This ensures that while our tools are powerful, they remain technically "offline" in terms of data persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Tabs / Sections */}
      <div className="space-y-8">
        {/* Privacy Policy */}
        <div className="bg-surface-container rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary">policy</span>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
          </div>
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-4">
            <p>Last Updated: March 2026</p>
            <p>We do not collect Personally Identifiable Information (PII) through our calculators. We use anonymized analytics solely to understand page performance and tool usage frequency. These analytics do not include any values entered into calculators.</p>
            <p>We use local storage only to remember your theme preferences (Dark/Light mode) or recently viewed tools. This data never leaves your device.</p>
          </div>
        </div>

        {/* Terms of Service */}
        <div className="bg-surface-container rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary">gavel</span>
            <h2 className="text-2xl font-bold">Terms of Service</h2>
          </div>
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-4">
            <p>By using FinTools India, you agree that the services are provided "as-is" for educational purposes. Users are encouraged to verify calculations with a certified financial planner or tax professional before making significant financial decisions.</p>
            <p>Unauthorized scraping of our calculation logic or redistribution of our proprietary tool UI is strictly prohibited.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-surface-container rounded-xl p-8 border-t-4 border-error">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-error">warning</span>
            <h2 className="text-2xl font-bold">Financial Disclaimer</h2>
          </div>
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-4">
            <p>FinTools India is not a SEBI-registered investment advisor. The calculators provided on this website are for simulation purposes and do not constitute financial advice, solicitation, or an offer to buy/sell securities.</p>
            <p>Investment in securities market are subject to market risks. Read all the related documents carefully before investing.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 text-center">
        <h2 className="text-xl font-bold mb-4">Questions about your data?</h2>
        <p className="text-on-surface-variant mb-6">Reach out to our compliance team for further clarification.</p>
        <a className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl hover:opacity-90 transition-opacity" href="mailto:privacy@fintoolsindia.com">
          <span className="material-symbols-outlined">mail</span>
          Contact Compliance
        </a>
      </div>
    </main>
  );
}
