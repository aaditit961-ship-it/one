export default function TaskPanel() {
  return (
    <>
      {/* Right Floating Task & Context Panel */}
      <aside className="w-96 h-[calc(100vh-6rem)] my-4 mr-6 glass-panel rounded-xl flex flex-col relative z-20">
        {/* Header section */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div>
            <h2 className="font-headline font-black text-lg tracking-tight uppercase">Temporal Tasks</h2>
            <p className="font-label text-[10px] text-secondary tracking-widest uppercase opacity-70">Focusing: Priority Alpha</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5">
            <span className="material-symbols-outlined text-primary text-lg">filter_list</span>
          </div>
        </div>

        {/* Task List Area */}
        <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
          {/* AI Presence Visualizer (Aether Orb focusing) */}
          <div className="relative py-2">
            <div className="absolute -left-12 top-10 w-24 h-24 aether-orb-glow"></div>
            <div className="absolute -left-2 top-16 w-4 h-4 bg-primary rounded-full blur-[2px] opacity-80 shadow-[0_0_12px_#d0bcff]"></div>

            {/* High Priority Group */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-error shadow-[0_0_8px_#ffb4ab]"></span>
                <span className="font-label text-[10px] font-bold tracking-widest uppercase text-error">High Priority</span>
              </div>
              <div className="space-y-3">
                {/* Task Item 1 (Active/High Glow) */}
                <div className="group relative task-hover-effect cursor-pointer">
                  <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center gap-4 p-3 rounded-lg bg-white/5 border-l-2 border-primary/40 transition-all">
                    <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[14px] text-primary">circle</span>
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="task-title font-headline font-bold text-sm text-on-surface transition-all duration-300">Synchronize Core Aether</span>
                      <span className="font-mono text-[10px] text-secondary/60">T-MINUS: 00:14:22</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">bolt</span>
                  </div>
                </div>

                {/* Task Item 2 */}
                <div className="group relative task-hover-effect cursor-pointer">
                  <div className="relative flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all">
                    <div className="w-6 h-6 rounded-full border border-outline/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="task-title font-headline font-bold text-sm text-on-surface transition-all duration-300">Patch Chronos Leak</span>
                      <span className="font-mono text-[10px] text-error/60">URGENT: CRITICAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Priority Group */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#bdf4ff]"></span>
                <span className="font-label text-[10px] font-bold tracking-widest uppercase text-secondary">Medium Priority</span>
              </div>
              <div className="space-y-3">
                {/* Task Item 3 (Completed example) */}
                <div className="group cursor-pointer opacity-40">
                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="font-headline font-bold text-sm text-on-surface line-through decoration-secondary/50">Recalibrate Flux Capacitor</span>
                      <span className="font-mono text-[10px] text-on-surface-variant">COMPLETED</span>
                    </div>
                  </div>
                </div>

                {/* Task Item 4 */}
                <div className="group relative task-hover-effect cursor-pointer">
                  <div className="relative flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all">
                    <div className="w-6 h-6 rounded-full border border-outline/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="task-title font-headline font-bold text-sm text-on-surface transition-all duration-300">Process Archive 99-A</span>
                      <span className="font-mono text-[10px] text-on-surface-variant">DUE: 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Priority Group */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline opacity-50"></span>
                <span className="font-label text-[10px] font-bold tracking-widest uppercase text-outline">Low Priority</span>
              </div>
              <div className="space-y-3">
                <div className="group relative task-hover-effect cursor-pointer">
                  <div className="relative flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all">
                    <div className="w-6 h-6 rounded-full border border-outline/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="task-title font-headline font-bold text-sm text-on-surface transition-all duration-300">Clean Interface Logs</span>
                      <span className="font-mono text-[10px] text-on-surface-variant">NO DEADLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Area */}
        <div className="p-6 border-t border-white/5 bg-gradient-to-t from-surface-container-low/50 to-transparent">
          <button className="w-full flex items-center justify-center gap-3 p-4 rounded-xl relative group overflow-hidden">
            {/* Glow gradient border simulation */}
            <div className="absolute inset-0 border border-primary/20 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform duration-300">add_circle</span>
            <span className="font-label font-bold tracking-[0.2em] uppercase text-xs text-on-surface group-hover:text-primary transition-colors">Manifest New Task</span>
          </button>
        </div>
      </aside>

      {/* Floating Detail Tooltip (Context Overlay) */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 p-6 rounded-2xl glass-panel border border-secondary/20 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[70]">
        <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <span className="material-symbols-outlined text-3xl">psychology</span>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm tracking-tight text-secondary uppercase">Aether Insight Active</h4>
          <p className="text-xs text-on-surface-variant max-w-xs">Task <span className="text-primary font-mono">'Synchronize Core Aether'</span> is currently blocking 3 future temporal branches.</p>
        </div>
        <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
        <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-[10px] font-label font-bold tracking-widest uppercase transition-all">Ignore</button>
        <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-[10px] font-label font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(189,244,255,0.4)] hover:brightness-110 transition-all">Prioritize</button>
      </div>
    </>
  );
}
