import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CarLoan from "./pages/CarLoan";
import HomeLoan from "./pages/HomeLoan";
import SIPCalculator from "./pages/SIPCalculator";
import ComingSoon from "./pages/ComingSoon";

// New Calculators
import Calculators from "./pages/Calculators";
import GSTCalculator from "./pages/GSTCalculator";
import IncomeTaxCalculator from "./pages/IncomeTaxCalculator";
import LoanEligibility from "./pages/LoanEligibility";
import PPFCalculator from "./pages/PPFCalculator";
import RetirementNPS from "./pages/RetirementNPS";
import FDCalculator from "./pages/FDCalculator";
import PersonalLoan from "./pages/PersonalLoan";
import HealthInsurance from "./pages/HealthInsurance";
import TermInsurance from "./pages/TermInsurance";

// Information Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import HelpCenter from "./pages/HelpCenter";
import Methodology from "./pages/Methodology";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculators" element={<Calculators />} />
          <Route path="car-loan" element={<CarLoan />} />
          <Route path="home-loan" element={<HomeLoan />} />
          <Route path="personal-loan" element={<PersonalLoan />} />
          <Route path="loan-eligibility" element={<LoanEligibility />} />
          
          <Route path="sip" element={<SIPCalculator />} />
          <Route path="fd" element={<FDCalculator />} />
          <Route path="ppf" element={<PPFCalculator />} />
          <Route path="retirement" element={<RetirementNPS />} />
          
          <Route path="gst" element={<GSTCalculator />} />
          <Route path="income-tax" element={<IncomeTaxCalculator />} />
          
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="term-insurance" element={<TermInsurance />} />
          
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
