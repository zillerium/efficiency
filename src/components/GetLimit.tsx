'use client';

import { useState } from 'react';

export default function GetLimit() {
  const [limit, setLimit] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckLimit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/limit?key=679YC');
      const data = await response.json();

      if (response.ok) {
        setLimit(String(data.limit));
      } else {
        setLimit('Error');
      }
    } catch (error) {
      console.error('Error fetching limit:', error);
      setLimit('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleCheckLimit}
        disabled={loading}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors shadow disabled:opacity-50"
      >
        {loading ? 'Checking...' : 'Check Limit'}
      </button>

      {limit !== null && (
        <span className="text-white font-bold bg-black/40 px-3 py-1.5 rounded-md border border-gray-600 text-sm">
          Limit: {limit}
        </span>
      )}
    </div>
  );
}
