import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar siteName="iGEM 2026" />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-600">
              <p className="font-medium text-slate-800">Plant Stress Bacterial Response System</p>
              <p>2026 iGEM Project Cohort</p>
            </div>
            <div className="text-sm text-slate-500">
              &copy; 2026 iGEM Project Team. Built for transparency and collaboration.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
