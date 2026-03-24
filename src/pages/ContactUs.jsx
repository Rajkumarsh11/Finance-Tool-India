import React from "react";

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-fixed rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary-fixed rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-wider text-xs font-semibold text-secondary mb-4 block">Connect with our team</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
              We're here to help you <br /><span className="text-secondary">architect your future.</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
              Whether you have questions about our financial tools, need technical support, or want to discuss a partnership, our dedicated team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Bento Grid Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Form Card (Large Area) */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/15 shadow-[0px_10px_40px_rgba(7,30,39,0.06)]">
            <h2 className="text-2xl font-bold text-primary mb-8">Send us a message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! We will get back to you shortly.'); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                  <input className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl placeholder:text-outline transition-all" placeholder="John Doe" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                  <input className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl placeholder:text-outline transition-all" placeholder="john@example.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Inquiry Type</label>
                <select className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl text-on-surface transition-all">
                  <option>General Inquiry</option>
                  <option>Product Support</option>
                  <option>Technical Issue</option>
                  <option>Partnership/Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Your Message</label>
                <textarea className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl placeholder:text-outline transition-all resize-none" placeholder="How can we assist you today?" rows="5" required></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Contact Info */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15">
              <h3 className="text-xl font-bold text-primary mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant mb-1">Email Us</p>
                    <a className="text-primary font-semibold hover:underline" href="mailto:support@fintoolsindia.com">support@fintoolsindia.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant mb-1">Call Us</p>
                    <p className="text-primary font-semibold">+91 1800 234 5678</p>
                    <p className="text-xs text-on-surface-variant mt-1">Mon - Fri, 9am - 6pm IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant mb-1">Visit Us</p>
                    <p className="text-primary font-semibold">12th Floor, Cyber Hub</p>
                    <p className="text-primary font-semibold">Gurugram, HR - 122002</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Resource Card */}
            <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-6xl">help_center</span>
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Self-Service Center</h3>
              <p className="text-on-primary/80 mb-6 relative z-10 text-sm leading-relaxed">
                Find immediate answers to common questions about our methodology and calculator tools in our documentation.
              </p>
              <a className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all relative z-10 text-secondary-fixed" href="/help-center">
                Browse Help Center <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-surface-container rounded-xl overflow-hidden h-96 relative">
          <img alt="Map of Gurugram location" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7YuLM4ClUHH1YPR8haqSeogy6WmgHysdGx_wEKEeVLwJ_2dJ5TPWl_WcQLSzxpgqnYOBnPVs5WX98i6VP6RH5QATiF155kScwYSapztkVwasnApqsHz7PgmX1J0SsusLlUAqzoKB6klKGuKfu-oOh_Ehd-wQGVNHCRTGu_HFahJ9HY6e3-pwEfYCfqUyzh5u6lwFPdmgLhQeKuHv2WmG4NBWN8Nno8t5DlwSp5IQYdGLE-ll9Cg524P1xw3lvsV_tAOxtRuEZgVrn" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 rounded-xl border border-white/20 shadow-2xl text-center max-w-xs bg-white/70 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h4 className="font-bold text-primary">Headquarters</h4>
              <p className="text-sm text-on-surface-variant mt-1">Visit our primary innovation hub in India's leading tech city.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
