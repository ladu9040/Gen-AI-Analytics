import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      <p className="mt-4 text-gray-600">Processing your query...</p>
    </div>
  );
};

export default LoadingIndicator;