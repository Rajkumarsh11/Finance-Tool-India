import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t-0 mt-12 md:mt-20 bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-8 lg:px-12 py-10 md:py-12 max-w-7xl mx-auto">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">FinTools India</div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            Precision financial planning for the modern Indian citizen. Empowering your decisions through math and transparency.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">verified</span>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-primary dark:text-blue-100 mb-6">Calculators</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/sip" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">SIP Calculator</Link></li>
            <li><Link to="/income-tax" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Income Tax (24-25)</Link></li>
            <li><Link to="/gst" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">GST Calculator</Link></li>
            <li><Link to="/home-loan" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Home Loan EMI</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-primary dark:text-blue-100 mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/help" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Help Center</Link></li>
            <li><Link to="/methodology" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Methodology</Link></li>
            <li><Link to="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-bold text-primary dark:text-blue-100 mb-6">Legal</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Calculations provided are for indicative purposes only. Please consult a financial advisor for specific investment decisions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 text-xs text-center md:text-left">© 2026 FinTools India. Precision in every calculation. Data Privacy Guaranteed.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-xs text-slate-400">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
}
