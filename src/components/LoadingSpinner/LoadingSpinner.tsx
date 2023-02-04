import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 border-4 border-t-4 border-gray-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;