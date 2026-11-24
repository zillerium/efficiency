'use client';

import React from 'react';
import Image from 'next/image';

export default function BuildingCom() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#f9f9f9] px-4 py-12 font-sans sm:py-16">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
        <Image
          src="/building.jpeg"
          alt="Building operations overview"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          className="h-auto w-full object-cover"
          priority={false}
        />
      </div>
    </section>
  );
}
