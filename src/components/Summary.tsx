import React from 'react';
import { FileText } from 'lucide-react';

interface SummaryProps {
  fileName: string;
  summary: string | null;
  loading: boolean;
}

export const Summary: React.FC<SummaryProps> = ({ fileName, summary, loading }) => {
  if (!fileName && !summary) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="w-6 h-6 text-purple-500" />
        <h2 className="text-xl font-semibold text-gray-800">{fileName}</h2>
      </div>
      
      {loading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
};