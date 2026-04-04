import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  siteName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ siteName = 'iGEM Dashboard' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/overview', label: 'Project Overview' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/workstreams', label: 'Workstreams' },
    { path: '/ownership', label: 'Ownership Dashboard' },
    { path: '/updates', label: 'Weekly Updates' },
    { path: '/team', label: 'Team' },
    { path: '/resources', label: 'Resources' },
    { path: '/quick-view', label: 'Quick View' },
  ];

  const activeClass = 'text-blue-600 font-semibold border-b-2 border-blue-600';
  const inactiveClass = 'text-slate-700 hover:text-blue-600 transition-colors';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Site Name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              {siteName}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                    isActive ? activeClass : inactiveClass + ' border-b-2 border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-slate-50">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
