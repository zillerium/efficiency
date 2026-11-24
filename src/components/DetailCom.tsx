'use client';

import React from 'react';

const items = [
  'Sometimes the answer is a better way of handling information.',
  'Sometimes it is more technology.',
  'Sometimes it is better systems.',
  'Sometimes it is building a new system.',
  'Sometimes no change is needed.',
];

export default function DetailCom() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-4 py-16 text-center font-sans sm:py-24">
      <div className="flex max-w-3xl flex-col items-center">
        {/* Heading */}
        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.18] tracking-tight text-[#0B2239] sm:text-4xl md:text-[42px]">
          We start with assessing how your business routinely works.
        </h2>

        {/* Subheading */}
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
            We understand how your building business operates day to day, where the costs are incurred, where information is delayed, and what works well. Then we suggest improvements.         

        </p>

        {/* Checklist Card */}
        <div className="mt-10 w-full max-w-[460px] rounded-2xl border border-slate-200/80 bg-[#F4F7FA] px-7 py-7 text-left shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:px-9 sm:py-8">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#0D9488] text-[#0D9488]">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6.2L4.8 8.5L9.5 3.8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-[#0B2239] sm:text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Bold Statement */}
        <p className="mt-10 text-base font-bold text-[#0B2239] sm:text-lg">
          The solution comes after the we understand your work, not before it.
        </p>
      </div>
    </section>
  );
}
