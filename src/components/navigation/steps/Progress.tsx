import React from 'react';

interface ProgressCounterProps {
  progress: number;
}

const ProgressCounter: React.FC<ProgressCounterProps> = ({ progress }) => {
  return (
    <div className="flex sticky top-0 items-center rounded-3xl	 h-12">
      <div className="bg-gray-300  w-full rounded-3xl">
        <div
          className="bg-indigo-500 flex justify-center	items-center h-full rounded-3xl	"
          style={{ width: `${progress}%` }}
        >
                    <p className={`text-center ${progress === 0 && `hidden`} px-2 font-bold text-lg py-1 text-zinc-50 justify-self-center self-center`}>{progress}%</p>

        </div>
      </div>
    </div>
  );
};

export default ProgressCounter;
