'use client';

import React from 'react';

export default function HeaderCom() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 text-center font-sans sm:py-24">
      {/* Subtle top radial mint/teal background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(20,184,166,0.10),transparent_70%)]"
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* Top Announcement Pill */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-slate-50/90 px-4 py-1.5 text-xs font-medium text-[#0B2239] shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
          <span>Free 30-minute online call · 6 short questions to start</span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0B2239] sm:text-5xl md:text-[56px]">
          Find where your building business is{' '}
          <span className="text-[#0D7A6E]">losing time and money.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg md:text-[19px]">
           We check efficiency levels in your building business, find the delays, duplicated work, and then make recommendations. We recommend better processes, automation, and new systems.          
        </p>

        {/* Primary CTA Button */}
        <div className="mt-9">
          <button
            type="button"
            className="rounded-lg bg-[#0D7A6E] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,122,110,0.28)] transition-all hover:bg-[#0A6359] hover:shadow-[0_6px_18px_rgba(13,122,110,0.35)] active:scale-[0.99] sm:text-base"
          >
            Start your free review NOW
          </button>
        </div>

        {/* Metadata / Micro-copy */}
        <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.08em] text-[#334155] sm:text-xs">
          6 QUESTIONS · ABOUT 10 MINUTES · THEN PICK A CALL TIME
        </p>

        {/* Pricing / Obligation Note */}
        <p className="mt-2.5 text-xs text-[#64748B] sm:text-sm">
        </p>
      </div>
    </section>
  );
}
