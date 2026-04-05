import React, { useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownMenu {
  [key: string]: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dropdownMenus: DropdownMenu = {
    project: [
      { label: 'Overview', path: '/#/overview' },
      { label: 'Roadmap', path: '/#/roadmap' },
      { label: 'Our Mission', path: '/#/overview#mission' },
    ],
    execution: [
      { label: 'Workstreams', path: '/#/workstreams' },
      { label: 'Ownership Dashboard', path: '/#/ownership' },
      { label: 'Weekly Updates', path: '/#/updates' },
    ],
    team: [
      { label: 'Team Structure', path: '/#/team' },
      { label: 'Resources', path: '/#/resources' },
    ],
  };

  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const DropdownButton: React.FC<{
    label: string;
    menu: string;
  }> = ({ label, menu }) => (
    <div
      className="relative"
      onMouseEnter={() => handleDropdownEnter(menu)}
      onMouseLeave={handleDropdownLeave}
    >
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#779E45] bg-[#f8faf5] text-[#333] font-semibold text-sm hover:bg-[#779E45] hover:text-white transition-colors duration-200 font-['Urbanist']"
      >
        {label}
        <ChevronDown size={16} />
      </button>

      {/* Dropdown Menu */}
      {openDropdown === menu && (
        <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-[#ddd] py-2 z-50">
          {dropdownMenus[menu as keyof DropdownMenu]?.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="block px-4 py-2 text-sm text-[#333] hover:bg-[#f8faf5] transition-colors duration-150 font-['Urbanist']"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#ddd] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex flex-col gap-0">
            <a
              href="/"
              className="text-lg font-bold text-[#779E45] leading-tight font-['Space_Grotesk']"
            >
              iGEM 2026
            </a>
            <span className="text-xs text-[#666] font-['Urbanist']">
              Plant Stress System
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownButton label="Project" menu="project" />
            <DropdownButton label="Execution" menu="execution" />
            <DropdownButton label="Team" menu="team" />
          </div>

          {/* Right Side - Quick View Button */}
          <div className="flex items-center gap-4">
            <a
              href="/#/quick-view"
              className="hidden md:block px-6 py-2 rounded-full bg-[#779E45] text-white font-semibold text-sm hover:bg-[#6a8c39] transition-colors duration-200 font-['Urbanist']"
            >
              Quick View
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#333] hover:bg-[#f8faf5] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#ddd] bg-[#f8faf5]">
          <div className="px-4 py-4 space-y-3">
            {/* Project Links */}
            <div>
              <p className="text-xs font-bold text-[#779E45] uppercase mb-2 font-['Space_Grotesk']">
                Project
              </p>
              {dropdownMenus.project.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-[#333] hover:bg-white rounded transition-colors duration-150 font-['Urbanist']"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Execution Links */}
            <div>
              <p className="text-xs font-bold text-[#779E45] uppercase mb-2 font-['Space_Grotesk']">
                Execution
              </p>
              {dropdownMenus.execution.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-[#333] hover:bg-white rounded transition-colors duration-150 font-['Urbanist']"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Team Links */}
            <div>
              <p className="text-xs font-bold text-[#779E45] uppercase mb-2 font-['Space_Grotesk']">
                Team
              </p>
              {dropdownMenus.team.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-[#333] hover:bg-white rounded transition-colors duration-150 font-['Urbanist']"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Quick View Mobile Button */}
            <a
              href="/#/quick-view"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-full bg-[#779E45] text-white font-semibold text-sm text-center hover:bg-[#6a8c39] transition-colors duration-200 font-['Urbanist']"
            >
              Quick View
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
