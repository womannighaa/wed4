import { AlertCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface ConnectionErrorProps {
  onRetry: () => void;
}

export default function ConnectionError({ onRetry }: ConnectionErrorProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    onRetry();
    setTimeout(() => setIsRetrying(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-50 p-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Connection Issue
        </h1>

        <p className="text-center text-gray-600 mb-6">
          We're unable to load the store at the moment. This is usually a temporary issue with our database connection.
        </p>

        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-5 h-5 ${isRetrying ? 'animate-spin' : ''}`} />
          {isRetrying ? 'Retrying...' : 'Try Again'}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          If the problem persists, please contact support or try refreshing the page in a few moments.
        </p>
      </div>
    </div>
  );
}
