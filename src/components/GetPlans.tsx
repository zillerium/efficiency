'use client';

import { useState } from 'react';
import GetLimit from './GetLimit';
import DisplayPlanLinks from './DisplayPlanLinks';

export default function GetPlans() {
  const [postcode, setPostcode] = useState('');
  // 1. Default state to empty string so the placeholder attribute handles showing "Code"
  const [code, setCode] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [plansData, setPlansData] = useState<Record<string, any>[]>([]);

  const handleFind = async () => {
    setStatusMessage(null);
    setPlansData([]);

    if (!postcode.trim()) {
      setStatusMessage('Please enter a postcode');
      return;
    }

    try {
      const response = await fetch(
        `/api/plans?postcode=${encodeURIComponent(postcode)}&code=${encodeURIComponent(code)}`
      );
      const data = await response.json();

      console.log('Planning API Output:', data);

      if (response.ok) {
        setStatusMessage('successful');
        if (Array.isArray(data.data)) {
          setPlansData(data.data);
        }
      } else {
        setStatusMessage(data.error || 'Unable to fetch data');
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      setStatusMessage('Error occurred');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: Title and Input controls over background image */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat py-10 px-4 shadow-lg"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/frontimage.jpeg')" }}
      >
        <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-xl font-extrabold leading-none tracking-tight sm:text-2xl md:text-3xl text-white drop-shadow-md">
            Plan Check: Check on plans now by post code
          </h1>

          <label htmlFor="postcode" className="text-gray-200 text-base font-medium drop-shadow">
            Enter your postcode and access code
          </label>

          {/* Form Inputs */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              maxLength={8}
              placeholder="CF44 8AE"
              className="w-32 px-3 py-2 text-black font-semibold uppercase bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
            />
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              // 2. Clear on focus if the user clicks into it while it matches "Code"
              onFocus={(e) => {
                if (e.target.value === 'Code') setCode('');
              }}
              maxLength={10}
              placeholder="Code"
              className="w-28 px-3 py-2 text-black font-semibold bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
            />
            <button
              type="button"
              onClick={handleFind}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow"
            >
              Find
            </button>
            <GetLimit />
          </div>
        </div>
      </div>

      {/* SECTION 2: Status Message and API Output (Clean background, below image) */}
      <div className="w-full max-w-3xl px-4 mt-6 flex flex-col items-center">
        {statusMessage && (
          <div className="mb-4">
            <p className={`font-semibold text-lg ${statusMessage === 'successful' ? 'text-green-400' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          </div>
        )}

        <DisplayPlanLinks plansData={plansData} />

        {plansData.length > 0 && (
          <div className="w-full space-y-6 pb-12">
            {plansData.map((item, index) => (
              <div 
                key={item.id || index} 
                className="bg-gray-800 text-white p-5 rounded-lg border border-gray-700 shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400 border-b border-gray-700 pb-2">
                  Application #{index + 1}
                </h3>

                <div className="flex flex-col gap-3">
                  {Object.entries(item).map(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                      return null;
                    }

                    return (
                      <div 
                        key={key} 
                        className="flex flex-col sm:flex-row sm:items-start border-b border-gray-700/50 pb-2 gap-1 sm:gap-4"
                      >
                        {/* Field Name */}
                        <span className="font-semibold text-gray-400 w-full sm:w-1/3 shrink-0 capitalize">
                          {key.replace(/_/g, ' ')}
                        </span>

                        {/* Field Value */}
                        <span className="text-gray-100 w-full sm:w-2/3 break-words overflow-hidden text-ellipsis">
                          {key === 'detail_url' && typeof value === 'string' ? (
                            <a
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline break-all"
                            >
                              {value}
                            </a>
                          ) : (
                            String(value)
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
