import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ pageName, pagePath }) => {
  return (
    <nav className="flex px-4 md:px-8 lg:px-12 py-4 max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-xs md:text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm md:text-base mr-1">home</span>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-on-surface-variant text-sm md:text-base">chevron_right</span>
            <Link
              to="/calculators"
              className="ml-1 text-xs md:text-sm font-medium text-on-surface-variant hover:text-primary transition-colors md:ml-2"
            >
              Tools
            </Link>
          </div>
        </li>
        {pageName && (
          <li aria-current="page">
            <div className="flex items-center">
              <span className="material-symbols-outlined text-on-surface-variant text-sm md:text-base">chevron_right</span>
              <span className="ml-1 text-xs md:text-sm font-bold text-primary md:ml-2 truncate max-w-[150px] md:max-w-none">
                {pageName}
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
