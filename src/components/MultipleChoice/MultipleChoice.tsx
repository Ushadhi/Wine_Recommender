import React, { useState } from 'react';
import "./MultipleChoice"

interface Props {
  question: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const MultipleChoice: React.FC<Props> = ({ question, options, selectedOption, setSelectedOption }) => {
  return (
    <div className="question">
      <p className="text-2xl font-normal text-gray-900">{question}</p>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            value={option}
            checked={selectedOption === option}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <label className="text-xl pl-2 text-gray-700" >{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
