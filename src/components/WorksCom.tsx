'use client';

import React from 'react';
import {
  Search,
  Target,
  ListChecks,
  TrendingUp,
  BarChart2,
} from 'lucide-react';

const steps = [
  {
    title: 'Assess',
    description: 'Assess how the business operates today.',
    icon: Search,
    circleBg: 'bg-[#E6F7F5]',
  },
  {
    title: 'Identify',
    description: 'Find inefficiencies.',
    icon: Target,
    circleBg: 'bg-[#A7F3D0]/70',
  },
  {
    title: 'Prioritise',
    description: 'Rank possible improvements.',
    icon: ListChecks,
    circleBg: 'bg-[#CCFBF1]',
  },
  {
    title: 'Recommend',
    description: 'Make recommendations.',
    icon: TrendingUp,
    circleBg: 'bg-[#CCFBF1]',
  },
  {
    title: 'Monitor',
    description: 'Measure progress.',
    icon: BarChart2,
    circleBg: 'bg-[#E6F7F5]',
  },
];

export default function WorksCom() {
  return (
    <section id="how-it-works" className="flex w-full flex-col items-center justify-center bg-[#F8FAFC] px-4 py-16 text-center font-sans sm:py-24">
      <div className="flex w-full max-w-6xl flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2239] sm:text-4xl md:text-[42px]">
          How we work
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
          A methodological approach in problem-solving.
        
        </p>

        {/* Responsive 5-Step Process Timeline */}
        <div className="relative mt-14 w-full">
          {/* Connecting horizontal teal gradient line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-[#0D9488] via-[#10B981] to-[#99F6E4] md:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Outer White Ring + Inner Mint Circle */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200/80 bg-white p-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-full ${step.circleBg} text-[#0D7A6E]`}
                    >
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-5 text-base font-bold text-[#0B2239] sm:text-[17px]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-[#475569] sm:text-sm md:max-w-[195px]">
                    {step.description}
                  </p>

                  {/* Vertical Connecting Line (mobile only, shown between stacked steps) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="my-5 h-8 w-[2px] bg-gradient-to-b from-[#0D9488] to-[#5EEAD4] md:hidden"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Explanatory Note */}
        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-[#475569] sm:text-sm">
            After we assess your building business, we will explain the improvements we would recommend and next steps.          

        </p>
      </div>
    </section>
  );
}
