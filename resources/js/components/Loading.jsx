import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white transition-colors duration-300">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <p className="mt-4 text-slate-800 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
