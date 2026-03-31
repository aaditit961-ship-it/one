import React, { useState } from 'react';
import EventModal from './components/EventModal';
import TaskPanel from './components/TaskPanel';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 mesh-gradient pointer-events-none"></div>
      <div className="fixed inset-0 z-0 scanline pointer-events-none opacity-30"></div>

      {/* TopAppBar Execution */}
      <header className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-6 bg-transparent backdrop-blur-2xl h-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black tracking-tighter text-[#D0BCFF] drop-shadow-[0_0_8px_rgba(208,188,255,0.4)] uppercase">
            TimeFlow
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="font-['Inter'] font-black tracking-tighter uppercase text-sm md:text-base text-[#D0BCFF] border-b-2 border-[#D0BCFF] pb-1 hover:scale-105 transition-transform duration-200 ease-out" href="#">Timeline</a>
            <a className="font-['Inter'] font-black tracking-tighter uppercase text-sm md:text-base text-slate-400 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-200 ease-out" href="#">Matrix</a>
            <a className="font-['Inter'] font-black tracking-tighter uppercase text-sm md:text-base text-slate-400 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-200 ease-out" href="#">Nodes</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#D0BCFF] p-2 hover:scale-110 transition-transform">account_tree</button>
          <button className="material-symbols-outlined text-[#D0BCFF] p-2 hover:scale-110 transition-transform">notifications_active</button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
            <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd3pOa2CqtuGuj6hl0Z8rjSn5e2xJI9hb63kdSqXrNJSBWxteMHGaTxjNLxVb80jSzoQW_5RS2G4TxqAkv-VNlmA2mB_QRzfMZflCcuuEflENC1qvrtL_VCnL8f3ftvgfsdIm_0pK_0ta3vM-ZE-rf_ofpxuT-tPI-zKR4OGUdFR0v9cNu4A2yfImBoNYq0AaoRt3AnuJlygMMhqxaCRx2AhV4ggXJv0Py1LvCJM-VMaJtONap2Fv4Bfs8m6n7r1sp0ILBq2G-vwPs"/>
          </div>
        </div>
      </header>

      {/* SideNavBar Execution */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 flex flex-col py-8 overflow-hidden bg-[#121315]/80 backdrop-blur-3xl h-full w-20 hover:w-64 transition-all duration-400 ease-out border-r border-white/5 group">
        <div className="flex flex-col items-center group-hover:items-start px-6 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(208,188,255,0.3)] shrink-0">
            <span className="material-symbols-outlined text-on-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>blur_on</span>
          </div>
          <div className="hidden group-hover:block ml-4 overflow-hidden">
            <div className="font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px] text-primary whitespace-nowrap">Aether Orb</div>
            <div className="text-[8px] text-secondary opacity-60 whitespace-nowrap uppercase tracking-tighter">System Active</div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-4 px-3">
          <a className="flex items-center gap-4 p-3 bg-white/10 text-[#D0BCFF] rounded-lg shadow-[0_0_15px_rgba(208,188,255,0.2)] hover:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>calendar_today</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Aether</span>
          </a>
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-[#D0BCFF] hover:bg-white/5 hover:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined text-2xl">go_to_line</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Flow</span>
          </a>
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-[#D0BCFF] hover:bg-white/5 hover:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined text-2xl">inventory_2</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Archive</span>
          </a>
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-[#D0BCFF] hover:bg-white/5 hover:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined text-2xl">analytics</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Metrics</span>
          </a>
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-[#D0BCFF] hover:bg-white/5 hover:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined text-2xl">settings_input_component</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Settings</span>
          </a>
        </nav>
        <div className="px-3 mt-auto flex flex-col gap-2">
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined">help_outline</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Help</span>
          </a>
          <a className="flex items-center gap-4 p-3 text-slate-500 hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined">sensors</span>
            <span className="hidden group-hover:block font-['Space_Grotesk'] font-bold tracking-widest uppercase text-[10px]">Status</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="pl-20 pt-16 h-screen flex overflow-hidden w-full">
        {/* Center Calendar Section */}
        <section className="flex-1 flex flex-col h-full bg-surface-container-low/30 p-6 overflow-y-auto custom-scrollbar">
          {/* Calendar Header Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-headline font-black tracking-tighter uppercase text-on-surface">
                October <span className="text-primary/50">2024</span>
              </h1>
              <div className="flex gap-2">
                <button className="p-2 glass-panel rounded-lg hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 glass-panel rounded-lg hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="glass-panel p-1 rounded-xl flex gap-1">
              <button className="px-6 py-2 text-[10px] font-label font-bold tracking-widest uppercase rounded-lg transition-all bg-primary-container text-on-primary-container shadow-lg shadow-primary/20">Month</button>
              <button className="px-6 py-2 text-[10px] font-label font-bold tracking-widest uppercase rounded-lg transition-all text-on-surface/60 hover:text-on-surface">Week</button>
              <button className="px-6 py-2 text-[10px] font-label font-bold tracking-widest uppercase rounded-lg transition-all text-on-surface/60 hover:text-on-surface">Day</button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-outline-variant/10 rounded-xl overflow-hidden glass-panel relative">
            {/* Heatmap Shimmer Overlay (Purely Decorative) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 mix-blend-overlay"></div>
            
            {/* Days Labels */}
            <div className="col-span-7 grid grid-cols-7 bg-surface-container-low py-3 border-b border-white/5">
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">SUN</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">MON</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">TUE</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">WED</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">THU</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">FRI</div>
              <div className="text-center font-label text-[10px] font-bold tracking-widest text-on-surface/40">SAT</div>
            </div>

            {/* Day Cells (Simplified for Layout) */}
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm opacity-20">28</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm opacity-20">29</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm opacity-20">30</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">01</span>
              <div className="mt-2 space-y-1">
                <div className="text-[10px] px-2 py-1 glass-panel rounded-md border-l-2 border-primary text-primary-fixed-dim flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">cycle</span> Sync Core
                </div>
              </div>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">02</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">03</span>
              <div className="mt-2 space-y-1">
                <div className="text-[10px] px-2 py-1 glass-panel rounded-md border-l-2 border-secondary text-secondary-fixed flex items-center gap-1">
                   Neural Review
                </div>
              </div>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">04</span>
            </div>
            
            {/* Row 2: Today Highlighted */}
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">05</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">06</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] border-2 border-primary/50 shadow-[inset_0_0_20px_rgba(208,188,255,0.1)] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm text-primary font-bold">07</span>
              <div className="mt-2 space-y-1">
                <div className="text-[10px] px-2 py-1 glass-panel rounded-md border-l-2 border-primary text-primary-fixed-dim active-glow">
                  Temporal Drift
                </div>
              </div>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">08</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">09</span>
            </div>
            <div className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
              <span className="font-mono text-sm">10</span>
              <div className="mt-2 space-y-1">
                <div className="text-[10px] px-2 py-1 glass-panel rounded-md border-l-2 border-error text-error flex items-center gap-1">
                  Deadline X
                </div>
              </div>
            </div>
            {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4].map((day, idx) => (
              <div key={idx} className="relative p-3 bg-surface/40 min-h-[120px] group hover:bg-white/5 transition-colors">
                <span className={`font-mono text-sm ${idx >= 21 ? 'opacity-20' : ''}`}>{day.toString().padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Context Panel Component */}
        <TaskPanel />
      </main>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-2xl bg-primary text-on-primary shadow-[0_10px_30px_rgba(208,188,255,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[70] group"
      >
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">add</span>
      </button>

      {/* Modal View Context */}
      {isModalOpen && <EventModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
