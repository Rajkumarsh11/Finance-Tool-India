import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function ComingSoon() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <SEO 
        title="Coming Soon | FinTools India: New Financial Tools"
        description="Stay tuned! We are building more precision-engineered financial calculators for the modern Indian citizen."
      />
      <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6">
        <span className="material-symbols-outlined text-5xl">construction</span>
      </div>
      <h1 className="text-4xl font-extrabold font-headline text-primary mb-4">Under Construction</h1>
      <p className="text-on-surface-variant max-w-md mx-auto mb-8">
        Our finance architects are currently building this tool. It will be launched in the next update.
      </p>
      <Link to="/" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
        Go Back Home
      </Link>
    </div>
  );
}
