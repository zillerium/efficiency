'use client';

import React from 'react';

export default function FounderCom() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#F8FAFC] px-4 py-16 text-center font-sans sm:py-24">
      <div className="flex w-full max-w-3xl flex-col items-center">
        {/* Main Section Heading */}
        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.16] tracking-tight text-[#0B2239] sm:text-4xl md:text-[42px]">
          A new approach, built by a builder and a tech expert.
        </h2>

        {/* Founder Story Card */}
        <div className="mt-10 w-full rounded-2xl border border-slate-200/90 bg-white px-7 py-8 text-left shadow-[0_1px_4px_rgba(0,0,0,0.02)] sm:px-11 sm:py-10">
          <h3 className="text-xl font-bold tracking-tight text-[#0B2239] sm:text-[22px]">
            Built by people who knows the difficulties.
          </h3>

          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#475569] sm:text-base">
            <p>
             We were established by a builder with extensive building experience and a technology expert experience in relevant branches of relevant technology. We understand the high costs of admin, the endless streams of formailities for compliance, the need to manage supplies, workloads, quotes, payments, income, budget for taxes, transportation and planning. Sometimes key areas of the business are left because there is not enough time to meet all the requirements.
            </p>
            <p>
             That's why we started this project. We breakdown your business into key components and find out what is slowing you down, costing you too much, and make recommendations which are practical and simple. This can be from new ways to manage invoices and payments, to quotes and getting new subcontractors, or ways to find new profitable jobs.  
            </p>
          </div>

          <p className="mt-6 text-sm font-bold text-[#0B2239]">
           Adrian and Trevor, founders
          </p>
        </div>

        {/* Bottom Supporting Copy */}
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-[17px]">
              We bring a new approach, starting with how you work, give an apprasial, and then make recommendations.          

        </p>

        {/* Secondary Call Reassurance Note */}
        <p className="mt-5 max-w-xl text-xs leading-relaxed text-[#475569] sm:text-sm">
          On our call, we will go through key parts of your answers and ask follow-up questions. If there is a good fit, we will send a report.          
        </p>
      </div>
    </section>
  );
}
