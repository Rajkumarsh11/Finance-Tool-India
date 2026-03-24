import React from "react";
import { NavLink } from "react-router-dom";

export default function ToolSidebar() {
  const categories = [
    {
      name: "Investment",
      icon: "payments",
      links: [
        { path: "/sip", label: "SIP Calculator" },
        { path: "/fd", label: "FD Calculator" },
        { path: "/ppf", label: "PPF Calculator" },
      ],
    },
    {
      name: "Taxation",
      icon: "account_balance_wallet",
      links: [
        { path: "/income-tax", label: "Income Tax" },
        { path: "/gst", label: "GST Calculator" },
      ],
    },
    {
      name: "Retirement",
      icon: "savings",
      links: [
        { path: "/retirement", label: "NPS / Retirement" },
      ],
    },
    {
      name: "Loans",
      icon: "account_balance",
      links: [
        { path: "/car-loan", label: "Car Loan" },
        { path: "/home-loan", label: "Home Loan" },
        { path: "/personal-loan", label: "Personal Loan" },
        { path: "/loan-eligibility", label: "Loan Eligibility" },
      ],
    },
    {
      name: "Insurance",
      icon: "verified_user",
      links: [
        { path: "/health-insurance", label: "Health Insurance" },
        { path: "/term-insurance", label: "Term Insurance" },
      ],
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col gap-2 py-8 h-[calc(100vh-5rem)] overflow-y-auto w-72 sticky top-20 bg-slate-50 dark:bg-slate-950 no-scrollbar border-r border-slate-200 dark:border-slate-800">
      <div className="px-6 mb-6 shrink-0">
        <h3 className="text-xl font-bold text-blue-700 font-headline">Tool Categories</h3>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Precision Planning</p>
      </div>
      <nav className="flex flex-col gap-6 pr-4 pb-10">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-1">
            <div className="px-6 py-2 flex items-center gap-3 text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs font-bold">
              <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
              <span>{category.name}</span>
            </div>
            {category.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-2.5 rounded-r-full font-medium transition-all duration-200 ease-in-out ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold border-l-4 border-blue-600"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border-l-4 border-transparent"
                  }`
                }
              >
                <span className="text-sm">{link.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
