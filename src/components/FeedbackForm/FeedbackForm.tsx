import React from "react";

interface LikertScaleProps {
  question: string;
  state: string;
  setState: (value: string) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ question, state, setState }) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div className="question">
      <h3  className="text-2xl font-normal text-gray-900">{question}</h3>
      <div>
          <input
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            value="strongly agree"
            checked={state === "strongly agree"}
            onChange={handleOptionChange}

          />
                  <label className="text-xl pl-2 text-gray-700" >

          Strongly Agree
        </label>
      </div>
      <div>
          <input
            type="radio"
            value="agree"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={state === "agree"}
            onChange={handleOptionChange}
          />
                  <label className="text-xl pl-2 text-gray-700" >

          Agree
        </label>
      </div>
      <div>
          <input
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            value="neutral"
            checked={state === "neutral"}
            onChange={handleOptionChange}
          />
                  <label className="text-xl pl-2 text-gray-700" >

          Neutral
        </label>
      </div>
      <div>
          <input
            type="radio"
            value="disagree"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={state === "disagree"}
            onChange={handleOptionChange}
          />
                  <label className="text-xl pl-2 text-gray-700" >

          Disagree
        </label>
      </div>
      <div>
          <input
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            value="strongly disagree"
            checked={state === "strongly disagree"}
            onChange={handleOptionChange}
          />
                  <label className="text-xl pl-2 text-gray-700" >

          Strongly Disagree
        </label>
      </div>
    </div>
  );
};

export default LikertScale;
