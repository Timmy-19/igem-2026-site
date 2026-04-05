import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <div style={{ marginTop: '5rem' }}>
        <Footer />
      </div>
    </div>
  );
}
