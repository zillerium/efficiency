'use client';

interface PlanItem {
  decision_date?: string | null;
  received_date?: string | null;
  reference?: string | null;
  detail_url?: string | null;
  [key: string]: any;
}

interface DisplayPlanLinksProps {
  plansData: Record<string, any>[];
}

export default function DisplayPlanLinks({ plansData }: DisplayPlanLinksProps) {
  if (!plansData || plansData.length === 0) {
    return null;
  }

  // Helper function to extract keyVal parameter from detail_url
  const getKeyVal = (url: string | null | undefined): string => {
    if (!url) return 'N/A';
    try {
      const parsedUrl = new URL(url);
      const keyVal = parsedUrl.searchParams.get('keyVal');
      return keyVal || 'View Link';
    } catch {
      // Fallback regex in case of relative/partial URL strings
      const match = url.match(/[?&]keyVal=([^&]+)/);
      return match ? match[1] : 'View Link';
    }
  };

  return (
    <div className="w-full mb-6 overflow-x-auto bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md p-4">
      <h3 className="text-lg font-bold mb-3 text-blue-400 border-b border-gray-700 pb-2">
        Planning Links Summary
      </h3>
      
      {/* Responsive Div Table Container */}
      <div className="w-full flex flex-col gap-2">
        {/* Table Header (Hidden on small screens) */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 bg-gray-900 p-3 rounded font-semibold text-gray-300 text-sm">
          <div>Decision Date</div>
          <div>Received Date</div>
          <div>Reference</div>
          <div>Detail Link</div>
        </div>

        {/* Table Rows */}
        {plansData.map((plan: PlanItem, index: number) => {
          const keyVal = getKeyVal(plan.detail_url);

          return (
            <div
              key={plan.id || index}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 p-3 bg-gray-700/50 hover:bg-gray-700 rounded transition-colors text-sm items-center border border-gray-700/60 md:border-none"
            >
              {/* Decision Date */}
              <div className="flex justify-between md:block">
                <span className="font-semibold text-gray-400 md:hidden">Decision Date:</span>
                <span className="text-gray-200">{plan.decision_date || 'N/A'}</span>
              </div>

              {/* Received Date */}
              <div className="flex justify-between md:block">
                <span className="font-semibold text-gray-400 md:hidden">Received Date:</span>
                <span className="text-gray-200">{plan.received_date || 'N/A'}</span>
              </div>

              {/* Reference */}
              <div className="flex justify-between md:block">
                <span className="font-semibold text-gray-400 md:hidden">Reference:</span>
                <span className="text-gray-200 font-mono">{plan.reference || 'N/A'}</span>
              </div>

              {/* Detail Link */}
              <div className="flex justify-between md:block break-all">
                <span className="font-semibold text-gray-400 md:hidden">Detail Link:</span>
                {plan.detail_url ? (
                  <a
                    href={plan.detail_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline font-mono"
                  >
                    {keyVal}
                  </a>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
