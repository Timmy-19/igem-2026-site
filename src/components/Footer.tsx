import React from 'react';
import { Mail, GitBranch, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#ddd] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#333] mb-6 font-['Space_Grotesk']">
            Contact Us
          </h3>

          <div className="flex flex-col items-center gap-4 mb-8">
            <a
              href="mailto:igem2026stress@gmail.com"
              className="flex items-center gap-2 text-[#779E45] hover:text-[#6a8c39] transition-colors duration-200 font-['Urbanist'] font-semibold"
            >
              <Mail size={20} />
              igem2026stress@gmail.com
            </a>

            <a
              href="https://github.com/Timmy-19/igem-2026-site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#779E45] hover:text-[#6a8c39] transition-colors duration-200 font-['Urbanist'] font-semibold"
            >
              <GitBranch size={20} />
              View on GitHub
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="text-sm text-[#666] font-['Urbanist']">
            iGEM 2026 Project Cohort — Brno, Czech Republic
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ddd] my-8"></div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Project Column */}
          <div>
            <h4 className="text-sm font-bold text-[#779E45] uppercase mb-4 font-['Space_Grotesk']">
              Project
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#/overview"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/#/roadmap"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="/#/workstreams"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Workstreams
                </a>
              </li>
            </ul>
          </div>

          {/* Execution Column */}
          <div>
            <h4 className="text-sm font-bold text-[#779E45] uppercase mb-4 font-['Space_Grotesk']">
              Execution
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#/ownership"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Ownership Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/#/updates"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Weekly Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Team Column */}
          <div>
            <h4 className="text-sm font-bold text-[#779E45] uppercase mb-4 font-['Space_Grotesk']">
              Team
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#/team"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Team Structure
                </a>
              </li>
              <li>
                <a
                  href="/#/resources"
                  className="text-[#333] hover:text-[#779E45] transition-colors duration-200 font-['Urbanist'] text-sm"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#ddd] pt-8 text-center">
          <p className="text-xs text-[#666] mb-2 font-['Urbanist']">
            © 2026 Plant Stress Bacterial Response System — iGEM Project Team
          </p>
          <p className="text-xs text-[#666] mb-4 font-['Urbanist']">
            Content licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#779E45] hover:text-[#6a8c39] transition-colors duration-200 underline"
            >
              Creative Commons Attribution 4.0
            </a>
          </p>
          <a
            href="https://github.com/Timmy-19/igem-2026-site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#779E45] hover:text-[#6a8c39] transition-colors duration-200 font-['Urbanist'] text-xs"
          >
            <GitBranch size={14} />
            View Repository
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
