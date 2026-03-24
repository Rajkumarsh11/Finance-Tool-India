import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const toolsList = [
  { name: "Car Loan EMI", path: "/car-loan" },
  { name: "Home Loan EMI", path: "/home-loan" },
  { name: "Personal Loan EMI", path: "/personal-loan" },
  { name: "Loan Eligibility", path: "/loan-eligibility" },
  { name: "SIP Calculator", path: "/sip" },
  { name: "FD Calculator", path: "/fd" },
  { name: "PPF Calculator", path: "/ppf" },
  { name: "Retirement & NPS", path: "/retirement" },
  { name: "GST Calculator", path: "/gst" },
  { name: "Income Tax Calculator", path: "/income-tax" },
  { name: "Health Insurance Premium", path: "/health-insurance" },
  { name: "Term Life Insurance", path: "/term-insurance" },
];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const filteredTools = search.trim() 
    ? toolsList.filter(t => t.name.toLowerCase().includes(search.toLowerCase())) 
    : [];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    setSearch("");
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto gap-2 md:gap-4">
        <Link to="/" className="text-lg md:text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-100 shrink-0 font-headline leading-none">
          FinTools <span className="hidden sm:inline">India</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-100 font-medium font-label uppercase tracking-wider text-xs">About Us</Link>
          <Link to="/sip" className="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-100 font-medium font-label uppercase tracking-wider text-xs">SIP</Link>
          <Link to="/gst" className="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-100 font-medium font-label uppercase tracking-wider text-xs">GST</Link>
          <Link to="/car-loan" className="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-100 font-medium font-label uppercase tracking-wider text-xs">Car Loan</Link>
          <Link to="/home-loan" className="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-100 font-medium font-label uppercase tracking-wider text-xs">Home Loan</Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-grow justify-end">
          {/* Search Bar - Visible on Mobile and Desktop */}
          <div className="relative flex-grow max-w-[160px] sm:max-w-[200px] md:max-w-[256px]" ref={dropdownRef}>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input 
              className="bg-surface-container border border-surface-container rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-full outline-none transition-all" 
              placeholder="Search tool..." 
              type="text" 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            
            {showDropdown && search.trim() !== "" && (
              <div className="absolute top-full mt-2 w-full bg-white border border-outline-variant/30 rounded-xl shadow-xl overflow-hidden z-50">
                {filteredTools.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto py-2">
                    {filteredTools.map((tool, idx) => (
                      <li key={idx}>
                        <button 
                          onClick={() => handleSelect(tool.path)}
                          className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-outline text-sm">calculate</span>
                          {tool.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-sm">info</span>
                    No tools found
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile Hamburger Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-primary p-2">
            <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-2 py-4 space-y-1 shadow-2xl absolute w-full left-0 top-[100%] max-h-[calc(100vh-60px)] overflow-y-auto z-40">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-2 pb-3 px-2">All Calculators</p>
          <div className="grid grid-cols-2 gap-2 mb-4 px-1">
            {toolsList.map((tool, idx) => (
              <Link 
                key={idx} 
                onClick={() => setMobileMenuOpen(false)} 
                to={tool.path} 
                className="bg-surface-container-low text-primary font-bold text-xs py-3 px-2 rounded-lg text-center active:scale-95 transition-transform border border-outline-variant/10 flex items-center justify-center min-h-[48px]"
              >
                {tool.name.replace(" Calculator", "").replace(" Premium", "").replace(" EMI", "")}
              </Link>
            ))}
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 pb-3 px-2 border-t border-outline-variant/20">Company & Help</p>
          <div className="grid grid-cols-2 gap-2 px-1">
            <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="block text-slate-600 font-bold text-sm py-3 px-2 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-center">About Us</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="block text-slate-600 font-bold text-sm py-3 px-2 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-center">Contact Us</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/help" className="block text-slate-600 font-bold text-sm py-3 px-2 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-center">Help Center</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/privacy" className="block text-slate-600 font-bold text-sm py-3 px-2 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-center">Privacy Policy</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
