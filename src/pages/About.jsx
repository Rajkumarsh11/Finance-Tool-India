import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      <SEO 
        title="About Us | FinTools India: Mission & Privacy-First Policy"
        description="About FinTools India: Our commitment to providing 100% accurate and private financial tools for the modern Indian citizen."
      />
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-3xl">
          <span className="font-label uppercase tracking-[0.15em] text-secondary font-bold text-xs mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight mb-8 leading-[1.1]">Architecting Financial Clarity for India.</h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
            We believe that premium financial intelligence shouldn't be a privilege. FinTools India was born to bridge the gap between complex market data and actionable personal wealth decisions.
          </p>
        </div>
      </section>

      {/* Bento Grid Brand Identity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        <div className="md:col-span-8 bg-surface-container-low rounded-[2rem] p-10 md:p-16 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Empowering the Indian User</h2>
            <p className="text-lg text-on-surface-variant max-w-xl">From Tier 1 metros to emerging digital economies, our mission is to provide every Indian with the architectural precision required to build lasting wealth.</p>
          </div>
          <div className="mt-12 flex gap-4 relative z-10">
            <div className="bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="text-4xl font-bold text-primary block">1.4B+</span>
              <span className="text-xs uppercase tracking-wider text-outline font-semibold">Visionary Reach</span>
            </div>
            <div className="bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="text-4xl font-bold text-secondary block">0%</span>
              <span class="text-xs uppercase tracking-wider text-outline font-semibold">Hidden Biases</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-secondary-container rounded-[2rem] p-10 flex flex-col items-start justify-between group">
          <div className="w-16 h-16 bg-on-secondary-container/10 rounded-2xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-on-secondary-container mb-4">Integrity First</h3>
            <p className="text-on-secondary-container/80 leading-relaxed">We don't sell products. We provide calculations. Our independence is our most valuable asset.</p>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-highest rounded-[2rem] p-10">
          <h3 className="text-2xl font-bold text-primary mb-4">The Technical Edge</h3>
          <p className="text-on-surface-variant leading-relaxed">Engineered with Public Sans clarity and Manrope authority to ensure every decimal point matters.</p>
        </div>

        <div className="md:col-span-8 bg-primary rounded-[2rem] p-10 md:p-16 text-on-primary relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6">Privacy-First Architecture</h3>
              <p className="text-primary-fixed/80 text-lg leading-relaxed mb-8">Your financial data stays exactly where it belongs: with you. We process information locally whenever possible and never monetize user profiles.</p>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <span className="text-sm font-semibold tracking-wide uppercase">End-to-End Transparency</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-primary-container/30 rounded-full border-4 border-dashed border-primary-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl opacity-20">shield_lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 border-t border-outline-variant/15">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Core Pillars</h2>
          <p className="text-on-surface-variant">Three simple rules that govern every tool we build and every line of code we write.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Absolute Clarity</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">No jargon. No fine print. We translate complex Indian tax laws and investment rules into plain English.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Instant Precision</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Real-time calculations powered by high-performance engines, tailored for the unique Indian fiscal year.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Inclusive Growth</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Tools designed for everyone—from first-time earners to seasoned high-net-worth individuals.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-surface-bright border border-outline-variant/20 rounded-[3rem] p-12 md:p-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">Ready to architect your future?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-block">Explore Tools</Link>
          <Link to="/methodology" className="bg-transparent border-2 border-primary/20 text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all inline-block">Read Methodology</Link>
        </div>
      </section>
    </main>
  );
}
