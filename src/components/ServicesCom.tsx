'use client';

import React from 'react';
import { Settings, Zap, Link2, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Improved processes',
    description:
      'Improve how work is managed and organized.',
    icon: Settings,
    iconBg: 'bg-[#E6F7F5]',
  },
  {
    title: 'Technology',
    description:
      'Recommend new tech to lower costs and improve workflows.',
    icon: Zap,
    iconBg: 'bg-[#CCFBF1]',
  },
  {
    title: 'New systems',
    description:
      'New systems to improve your workflows.',
    icon: Link2,
    iconBg: 'bg-[#E6F7F5]',
  },
  {
    title: 'Customization',
    description:
      'Build a new tool for your business.',
    icon: Sparkles,
    iconBg: 'bg-[#CCFBF1]',
  },
];

export default function ServicesCom() {
  return (
    <section id="what-we-do"
className="flex w-full flex-col items-center justify-center bg-white px-4 py-16 font-sans sm:py-24">
      <div className="flex w-full max-w-6xl flex-col items-center">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#0B2239] sm:text-4xl md:text-[42px]">
          What we do
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-lg text-center text-base leading-relaxed text-[#475569] sm:text-lg">
          Four ways we help, chosen based on what your business actually needs.
        </p>

        {/* Responsive 4-Card Grid */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
              >
                {/* Top Teal Accent Bar */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3.5px] bg-gradient-to-r from-[#0D9488] to-[#10B981]"
                />

                {/* Rounded Square Icon Badge */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} text-[#0D7A6E]`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0B2239]">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
