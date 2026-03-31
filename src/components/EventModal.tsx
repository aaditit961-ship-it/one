import React from 'react';

export default function EventModal({ onClose }: { onClose?: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-surface-container-lowest/80 backdrop-blur-md">
      {/* Depth Zoom Container */}
      <div className="relative w-full max-w-5xl max-h-[921px] glass-panel rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5 ring-1 ring-white/10">
        {/* Atmospheric Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none scanline opacity-20 z-0"></div>
        {/* Left Column: AI & Configuration */}
        <div className="flex-1 p-8 md:p-12 z-10 overflow-y-auto custom-scrollbar">
          {/* AI Natural Language Field */}
          <div className="mb-10">
            <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-4 block">AI Natural Language Input</label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-25 group-focus-within:opacity-100 transition duration-500"></div>
              <div className="relative bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-8 rounded-lg">
                <p className="text-xl md:text-2xl font-light tracking-tight leading-relaxed text-on-surface/90">
                  Meeting <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(208,188,255,0.4)]">tomorrow</span> at <span className="text-secondary font-bold drop-shadow-[0_0_8px_rgba(189,244,255,0.4)]">5pm</span> with <span className="text-tertiary font-bold underline decoration-tertiary/30">Sarah</span>
                  <span className="inline-block w-[2px] h-8 bg-primary animate-pulse ml-1 align-middle"></span>
                </p>
              </div>
            </div>
          </div>
          {/* Standard Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Title */}
            <div className="col-span-full">
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Event Title</label>
              <input className="w-full bg-transparent border-b border-outline-variant/20 focus:border-secondary transition-all outline-none py-2 text-lg font-headline font-bold text-on-surface" placeholder="Quantum Synapse Sync" type="text" />
            </div>
            {/* Description */}
            <div className="col-span-full">
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Temporal Context</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant/20 focus:border-secondary transition-all outline-none py-2 text-sm font-body text-on-surface-variant resize-none h-20" placeholder="Discuss neural mapping protocols..."></textarea>
            </div>
            {/* Start/End Pickers */}
            <div>
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Phase Start</label>
              <div className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span className="font-mono text-xl">17:00</span>
                <span className="text-xs text-outline uppercase font-label">TUE 24 OCT</span>
              </div>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Phase End</label>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg">event_repeat</span>
                <span className="font-mono text-xl">18:00</span>
                <span className="text-xs text-outline uppercase font-label">TUE 24 OCT</span>
              </div>
            </div>
            {/* Priority & Recurrence */}
            <div>
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Priority Rank</label>
              <div className="flex items-center justify-between bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
                <span className="flex items-center gap-2 font-label text-sm font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_#ffb4ab]"></span>
                  Critical
                </span>
                <span className="material-symbols-outlined text-outline">expand_more</span>
              </div>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Temporal Loop</label>
              <div className="flex items-center justify-between bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
                <span className="font-label text-sm font-bold tracking-widest uppercase">None</span>
                <span className="material-symbols-outlined text-outline">sync_alt</span>
              </div>
            </div>
            {/* Color Tags */}
            <div className="col-span-full">
              <label className="font-label text-[10px] tracking-[0.2em] text-outline uppercase mb-3 block">Chromatic Tagging</label>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-[#d0bcff] ring-4 ring-primary/20 shadow-[0_0_15px_rgba(208,188,255,0.4)]"></button>
                <button className="w-8 h-8 rounded-full bg-[#bdf4ff] border border-white/10 hover:scale-110 transition-transform"></button>
                <button className="w-8 h-8 rounded-full bg-[#ffb4ab] border border-white/10 hover:scale-110 transition-transform"></button>
                <button className="w-8 h-8 rounded-full bg-[#cdbdff] border border-white/10 hover:scale-110 transition-transform"></button>
                <button className="w-10 h-8 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Aether Orb Sidebar */}
        <div className="w-full md:w-80 bg-surface-container-low/50 border-l border-white/5 p-8 flex flex-col items-center z-10">
          <div className="mb-12 flex flex-col items-center text-center">
            {/* Aether Orb Visualization */}
            <div className="relative w-32 h-32 mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-surface-container-highest to-secondary p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-surface rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_12px_rgba(208,188,255,0.6)]">blur_on</span>
                </div>
              </div>
            </div>
            <h3 className="font-label font-bold tracking-[0.3em] uppercase text-xs text-primary mb-1">Aether Orb</h3>
            <p className="text-[10px] text-outline-variant uppercase tracking-widest">Temporal Intelligence Active</p>
          </div>
          {/* AI Insight Card */}
          <div className="w-full space-y-4">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 shadow-inner">
              <div className="flex items-start gap-3 mb-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                <span className="font-label text-[10px] font-bold tracking-widest uppercase text-primary">Optimization Suggestion</span>
              </div>
              <p className="text-sm text-on-surface leading-snug mb-4">
                High fatigue probability detected for 5:00 PM. Sarah is usually active earlier.
              </p>
              <div className="bg-surface/60 rounded-lg p-3 border border-primary/10 group cursor-pointer hover:border-primary/40 transition-colors">
                <span className="text-[9px] text-outline uppercase block mb-1">Best slot found:</span>
                <span className="font-mono text-secondary text-sm">4:30 PM – 5:30 PM</span>
              </div>
            </div>
            <div className="bg-surface-container-high/40 rounded-xl p-5 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-lg">hub</span>
                <span className="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Linked Nodes</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-on-surface/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Project Chronos Draft
                </div>
                <div className="flex items-center gap-2 text-[11px] text-on-surface/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Neural Link Q4
                </div>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="mt-auto pt-8 w-full space-y-4">
            <button
               onClick={onClose}
               className="w-full bg-primary-container text-on-primary-container font-label font-bold tracking-[0.2em] uppercase text-xs py-4 rounded-lg shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:scale-[1.02] transition-transform active:scale-95"
            >
              Initialize Event
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-white/5 text-outline-variant font-label font-bold tracking-[0.2em] uppercase text-xs py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Abort Protocol
            </button>
          </div>
        </div>
        {/* Absolute Position Controls (Close button) */}
        <button onClick={onClose} className="absolute top-6 right-6 z-50 p-2 text-outline-variant hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
}
