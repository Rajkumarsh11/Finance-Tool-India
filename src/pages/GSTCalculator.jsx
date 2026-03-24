import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ToolSidebar from "../components/ToolSidebar";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [isInclusive, setIsInclusive] = useState(false);
  const [taxRate, setTaxRate] = useState(18);

  const { gstAmount, totalPayable, cgst, sgst, igst } = useMemo(() => {
    let calculatedGst = 0;
    let payable = 0;

    if (isInclusive) {
      // Amount includes GST
      const basePrice = amount * (100 / (100 + taxRate));
      calculatedGst = amount - basePrice;
      payable = amount;
    } else {
      // Amount excludes GST
      calculatedGst = (amount * taxRate) / 100;
      payable = Number(amount) + calculatedGst;
    }

    const halfGst = calculatedGst / 2;

    return {
      gstAmount: calculatedGst,
      totalPayable: payable,
      cgst: halfGst,
      sgst: halfGst,
      igst: calculatedGst,
    };
  }, [amount, isInclusive, taxRate]);

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <SEO 
        title="GST Calculator India 2026: Online GST Inclusive/Exclusive"
        description="Fast GST calculator for Indian businesses. Calculate IGST, CGST, and SGST for all tax slabs (5%, 12%, 18%, 28%) instantly. Free & easy to use."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How to calculate GST online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To calculate GST, multiply the base amount by the GST rate (e.g., 18/100). For inclusive amounts, use [Amount - (Amount * (100 / (100 + GST rate)))]"
              }
            },
            {
              "@type": "Question",
              "name": "What are the common GST slabs in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The primary GST slabs in India are 5%, 12%, 18%, and 28%. Some essential items are taxed at 0%, while luxury items may have an additional cess."
              }
            },
            {
              "@type": "Question",
              "name": "Is this GST calculator accurate for FY 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our tool is updated with the latest GST council regulations and is 100% accurate for businesses and individuals for the current financial year."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between CGST, SGST, and IGST?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CGST & SGST are charged on intra-state sales (within the same state), split equally between Central and State governments. IGST is charged on inter-state sales (between two states)."
              }
            }
          ]
        }}
      />
      <ToolSidebar />
      <main className="flex-1">
        <Breadcrumbs pageName="GST Calculator" />
        <div className="p-4 md:p-6 lg:p-10 border-l border-outline-variant/10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">GST Calculator</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Calculate Goods and Services Tax accurately for your business or personal needs. Fast, precise, and compliant with current Indian tax slabs.</p>
        </div>

        {/* Bento Grid Layout for Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-[2rem] p-8 space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold font-label text-primary uppercase tracking-widest">Total Amount (₹)</label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-lowest border-none rounded-xl p-5 text-2xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">INR</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setIsInclusive(false)}
                className={`${!isInclusive ? "bg-primary text-on-primary shadow-lg" : "bg-surface-container-lowest text-primary border border-outline-variant/30"} py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2`}
              >
                <span className="material-symbols-outlined">add_circle</span> GST Exclusive
              </button>
              <button
                onClick={() => setIsInclusive(true)}
                className={`${isInclusive ? "bg-primary text-on-primary shadow-lg" : "bg-surface-container-lowest text-primary border border-outline-variant/30"} py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2`}
              >
                <span className="material-symbols-outlined">remove_circle</span> GST Inclusive
              </button>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold font-label text-primary uppercase tracking-widest">Tax Slab Selection</label>
              <div className="grid grid-cols-4 gap-3">
                {[5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setTaxRate(rate)}
                    className={`${taxRate === rate ? "bg-primary text-white shadow-md" : "bg-surface-container-lowest hover:bg-primary hover:text-white border border-outline-variant/20"} py-4 rounded-xl font-bold transition-all text-lg`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Panel (Glassmorphism) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 text-on-primary flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Decorative Background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-on-primary-container text-xs font-label uppercase tracking-widest mb-2">Total GST Amount</p>
              <h2 className="text-5xl font-extrabold mb-8 tracking-tighter">₹ {gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-on-primary/10">
                  <span className="text-on-primary/80 font-medium">CGST ({taxRate / 2}%)</span>
                  <span className="font-bold">₹ {cgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-on-primary/10">
                  <span className="text-on-primary/80 font-medium">SGST ({taxRate / 2}%)</span>
                  <span className="font-bold">₹ {sgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-on-primary/10">
                  <span className="text-on-primary/80 font-medium">IGST ({taxRate}%)</span>
                  <span className="font-bold">₹ {igst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-6 border border-on-primary/10">
              <p className="text-xs text-on-primary/70 font-label uppercase tracking-widest mb-1">Total Payable Amount</p>
              <p className="text-3xl font-bold">₹ {totalPayable.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-24 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">How to Calculate GST?</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>Calculating the Goods and Services Tax (GST) is straightforward with our architecturally designed tool. The formula depends on whether the GST is being added to or included in the base price.</p>
                <div className="bg-surface-container rounded-xl p-6 space-y-4 border-l-4 border-secondary">
                  <div>
                    <span className="block font-bold text-secondary text-sm uppercase tracking-wider mb-1">GST Exclusive Formula</span>
                    <code className="text-primary font-mono bg-white/50 px-2 py-1 rounded">GST Amount = (Price × GST Rate) / 100</code>
                  </div>
                  <div>
                    <span className="block font-bold text-secondary text-sm uppercase tracking-wider mb-1">GST Inclusive Formula</span>
                    <code className="text-primary font-mono bg-white/50 px-2 py-1 rounded">GST Amount = Price - [Price × {'{100 / (100 + GST Rate)}'}]</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-[2rem] p-8 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-primary mb-4">GST Tax Slabs in India</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 font-bold">5%</span>
                  <p className="text-sm">Applies to essential goods like sugar, spices, tea, and coffee.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 font-bold">12%</span>
                  <p className="text-sm">Applies to processed foods and standard household items.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 font-bold">18%</span>
                  <p className="text-sm">The most common slab for services, capital goods, and electronics.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 font-bold">28%</span>
                  <p className="text-sm">Reserved for luxury items like automobiles and tobacco products.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Understanding CGST, SGST, and IGST</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-secondary font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined">account_balance</span> CGST
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Central Goods and Services Tax. Collected by the Central Government on an intra-state sale (e.g., a transaction happening within Maharashtra).</p>
              </div>
              <div className="space-y-3">
                <div className="text-secondary font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined">map</span> SGST
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">State Goods and Services Tax. Collected by the State Government on an intra-state sale. It is always equal to the CGST amount.</p>
              </div>
              <div className="space-y-3">
                <div className="text-secondary font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined">public</span> IGST
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Integrated Goods and Services Tax. Collected by the Central Government for inter-state transactions (e.g., from Delhi to Haryana).</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24 max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-10 text-center">GST Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">Can I calculate GST inclusive and exclusive?</h3>
              <p className="text-on-surface-variant leading-relaxed">Yes, our tool allows you to input the amount and select whether it is GST inclusive or exclusive to get the net and tax split values.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-2">What is the difference between CGST, SGST, and IGST?</h3>
              <p className="text-on-surface-variant leading-relaxed">CGST & SGST are charged on intra-state sales (within the same state), split equally between Central and State governments. IGST is charged on inter-state sales (between two states).</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
              <h3 className="font-bold text-lg text-primary mb-2">Can I claim Input Tax Credit on all GST?</h3>
              <p className="text-on-surface-variant leading-relaxed">Generally, yes, if you are a registered GST dealer and the input was used for business purposes. However, certain items like food and beverages or personal vehicle expenses are restricted.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
    </div>
  );
}
