import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { workstreams } from '../data/workstreams';
import { getLatestUpdate } from '../data/updates';

const HomePage = () => {
  const latestUpdate = getLatestUpdate();
  const displayWorkstreams = workstreams.slice(0, 6);

  // Track color config for badges
  const trackColors: Record<string, { border: string; bg: string; text: string }> = {
    Wetlab: { border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-600' },
    Drylab: { border: 'border-emerald-300', bg: 'bg-emerald-50', text: 'text-emerald-600' },
    HP: { border: 'border-amber-300', bg: 'bg-amber-50', text: 'text-amber-600' },
  };

  const statusConfig: Record<
    string,
    { badge: string; text: string }
  > = {
    Confirmed: { badge: 'badge-confirmed', text: 'Confirmed' },
    'In Progress': { badge: 'badge-in-progress', text: 'In Progress' },
    Assigning: { badge: 'badge-assigning', text: 'Assigning' },
    'Not Yet Filled': { badge: 'badge-not-filled', text: 'Not Yet Filled' },
  };

  // Feature marquee data
  const features = [
    { emoji: '🧬', title: 'Threshold Activation', desc: 'Responds only when stress exceeds a set threshold' },
    { emoji: '🦠', title: 'B. subtilis Chassis', desc: 'Safe, soil-competent chassis organism' },
    { emoji: '🔒', title: 'Biosecurity Switch', desc: 'Kill/survival/fertile switch for containment' },
    { emoji: '🌱', title: 'Stress Circuit', desc: 'Detects abiotic stress signals in real time' },
    { emoji: '🧪', title: 'Trehalose Protection', desc: 'Proven and novel protectant evaluation' },
    { emoji: '📊', title: 'Quantitative Model', desc: 'Mathematical model of plant stress system' },
    { emoji: '💧', title: 'Hydroponic Testing', desc: 'Multi-iteration hydroponic prototype system' },
    { emoji: '🌍', title: 'Climate Resilience', desc: 'Designed for real-world agricultural deployment' },
  ];

  return (
    <div className="w-full bg-[#f8faf5]">
      {/* ============ SECTION 1: HERO ============ */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #0f2a05 0%, #1a4a0a 30%, #2d6618 60%, #3d7a24 100%),
            radial-gradient(ellipse at 60% 40%, rgba(119,158,69,0.25) 0%, transparent 70%)
          `,
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full border-2 border-[#779E45] bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">🌿 iGEM 2026 Project</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Plant Stress Bacterial Response System
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/70 mb-8" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            2026 iGEM Project Cohort Hub
          </p>

          {/* Mission */}
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-12 leading-relaxed">
            We are engineering a safe microbial system that senses plant abiotic stress and activates
            protection only when needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/roadmap"
              className="px-8 py-3 rounded-full bg-[#779E45] text-white font-semibold hover:bg-[#5a7a32] transition-colors"
            >
              View Roadmap
            </Link>
            <Link
              to="/ownership"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Ownership Dashboard
            </Link>
            <Link
              to="/workstreams"
              className="px-8 py-3 rounded-full bg-white text-[#779E45] font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Workstreams
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-[#1a2e0a]/60 backdrop-blur-sm py-6 px-6 border-t border-[#779E45]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <p className="text-sm font-semibold text-white/70">Wetlab Streams</p>
              <p className="text-2xl font-bold text-[#779E45] mt-1">4</p>
            </div>
            <div className="hidden md:block border-l border-white/20"></div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white/70">Drylab Tracks</p>
              <p className="text-2xl font-bold text-[#779E45] mt-1">4</p>
            </div>
            <div className="hidden md:block border-l border-white/20"></div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white/70">HP Tracks</p>
              <p className="text-2xl font-bold text-[#779E45] mt-1">3</p>
            </div>
            <div className="hidden md:block border-l border-white/20"></div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white/70">Timeline</p>
              <p className="text-2xl font-bold text-[#779E45] mt-1">Mar–Aug 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: FEATURES MARQUEE ============ */}
      <section className="w-full bg-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1B1B1B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Makes Our System Different
          </h2>
        </div>

        {/* Marquee Container — full width, overflow hidden */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex gap-6">
            {/* Repeat features 4x for seamless loop */}
            {Array.from({ length: 4 }).map((_, repeatIdx) =>
              features.map((feature, idx) => (
                <div
                  key={`${repeatIdx}-${idx}`}
                  className="flex-shrink-0 w-56 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl mb-2">{feature.emoji}</p>
                  <h3 className="font-bold text-[#1B1B1B] mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: THE CHALLENGE ============ */}
      <section className="w-full bg-[#f8faf5] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-6xl md:text-7xl font-bold text-[#779E45] mb-4">800M+</p>
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">
              people affected by crop failures from abiotic stress annually
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Drought, heat, salinity, and cold are the leading non-biological causes of yield loss
              globally. Current solutions are expensive, energy-intensive, or not targeted.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <blockquote className="text-lg text-slate-700 italic">
                Traditional plant protection is always-on — wasting resources and increasing
                resistance risk. Our threshold-activated system only engages when it's truly needed.
              </blockquote>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{
                background: 'linear-gradient(135deg, #779E45 0%, #5a7a32 100%)',
              }}
            >
              <p className="text-base leading-relaxed">
                A smarter approach to crop protection: activate defense mechanisms precisely when
                environmental stress exceeds safe thresholds, minimizing resource waste and
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: HOW IT WORKS ============ */}
      <section
        className="w-full py-16 px-6 text-white"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0f2a05 0%, #1a4a0a 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            From Stress Detection to Targeted Protection
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Four parallel workstreams converge into one integrated B. subtilis system
          </p>

          {/* 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                num: '1',
                icon: '🔬',
                title: 'Stress Circuit',
                desc: 'Detects abiotic stress (drought, heat, salinity) via engineered promoters in B. subtilis',
              },
              {
                num: '2',
                icon: '🛡️',
                title: 'Biosecurity Switch',
                desc: 'Fine-tuned kill/survival/fertile control ensures safe containment in field conditions',
              },
              {
                num: '3',
                icon: '💊',
                title: 'Protectant Output',
                desc: 'Trehalose and novel protectant production activated only when threshold is crossed',
              },
              {
                num: '4',
                icon: '📐',
                title: 'Quantitative Model',
                desc: 'Validates the integrated system against a defined subject stress model',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-[#779E45] mb-2">{step.num}</div>
                <p className="text-2xl mb-2">{step.icon}</p>
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow Flow */}
          <div className="text-center text-2xl text-[#779E45]">
            ↓ Converge → Integrated System ↓
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: WORKSTREAM PREVIEW ============ */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 text-[#1B1B1B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Active Execution Tracks
          </h2>
          <p className="text-slate-600 mb-12">
            13 parallel workstreams across Wetlab, Drylab, and Human Practice
          </p>

          {/* Workstream Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayWorkstreams.map((ws) => {
              const trackColor = trackColors[ws.track] || trackColors.Wetlab;
              const statusInfo = statusConfig[ws.status];
              return (
                <div
                  key={ws.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Top Border - Track Color */}
                  <div className={`h-1 ${trackColor.bg}`}></div>

                  <div className="p-6">
                    {/* Track Badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${trackColor.bg} ${trackColor.text}`}
                      >
                        {ws.track}
                      </span>
                    </div>

                    {/* Workstream Name */}
                    <h3
                      className="text-lg font-bold text-[#1B1B1B] mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {ws.name}
                    </h3>

                    {/* Description */}
                    {ws.description && (
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{ws.description}</p>
                    )}

                    {/* Status Badge */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500 font-semibold mb-2">Status</p>
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${statusInfo?.badge}`}>
                        {statusInfo?.text || ws.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/workstreams"
              className="inline-block text-[#779E45] font-semibold hover:text-[#5a7a32] transition-colors"
            >
              View All Workstreams →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: LATEST UPDATE ============ */}
      {latestUpdate && (
        <section className="w-full bg-[#f8faf5] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Sidebar */}
              <div
                className="rounded-2xl p-8 text-white flex flex-col justify-center"
                style={{
                  background: 'linear-gradient(135deg, #779E45 0%, #5a7a32 100%)',
                }}
              >
                <p className="text-sm font-semibold text-white/70 mb-2">Latest Update</p>
                <p className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Week {latestUpdate.week}
                </p>
                <p className="text-sm text-white/80">{latestUpdate.date}</p>
              </div>

              {/* Right Content */}
              <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3
                  className="text-2xl font-bold text-[#1B1B1B] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {latestUpdate.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6">By {latestUpdate.author}</p>

                <p className="text-slate-700 mb-6 leading-relaxed line-clamp-3">{latestUpdate.content}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#1B1B1B] mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {latestUpdate.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-[#779E45] font-bold flex-shrink-0">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/updates"
                  className="inline-block text-[#779E45] font-semibold hover:text-[#5a7a32] transition-colors"
                >
                  View all updates →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ SECTION 7: CONVERGENCE VISUAL ============ */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1B1B1B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            March → August: Parallel to Integrated
          </h2>

          {/* Convergence Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {/* Left: 4 Streams */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Stress Circuit', color: 'bg-blue-100 text-blue-700' },
                { label: 'Biosecurity Circuit', color: 'bg-emerald-100 text-emerald-700' },
                { label: 'Protectant Dev', color: 'bg-amber-100 text-amber-700' },
                { label: 'Quantitative Model', color: 'bg-purple-100 text-purple-700' },
              ].map((stream) => (
                <div key={stream.label} className={`rounded-xl px-6 py-3 font-semibold text-sm ${stream.color}`}>
                  {stream.label}
                </div>
              ))}
            </div>

            {/* Center: Arrow */}
            <div className="text-4xl text-[#779E45] font-bold">→</div>

            {/* Right: Integrated System */}
            <div
              className="rounded-2xl px-8 py-6 text-white font-bold text-center min-w-max"
              style={{
                background: 'linear-gradient(135deg, #0f2a05 0%, #1a4a0a 100%)',
              }}
            >
              <p className="text-2xl mb-2">Integrated B. subtilis System</p>
              <p className="text-sm text-white/70">Safe. Responsive. Validated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: CTA ============ */}
      <section className="w-full py-16 px-6 bg-[#779E45]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join us as we build something rigorous, responsible, and real.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="px-8 py-3 rounded-full bg-white text-[#779E45] font-semibold hover:bg-white/90 transition-colors"
            >
              View Team
            </Link>
            <Link
              to="/quick-view"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Quick View for Parents/Instructors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
