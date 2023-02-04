import React from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';


interface Option {
  name: string;
}

interface Props {
  options: Option[];
  rankedOptions: Option[];
  setRankedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

const RankingSystem: React.FC<Props> = ({ options, rankedOptions, setRankedOptions }) => {
  const moveOptionUp = (index: number) => {
    const updatedOptions = [...rankedOptions];
    const temp = updatedOptions[index];
    updatedOptions[index] = updatedOptions[index - 1];
    updatedOptions[index - 1] = temp;
    setRankedOptions(updatedOptions);
  };

  const moveOptionDown = (index: number) => {
    const updatedOptions = [...rankedOptions];
    const temp = updatedOptions[index];
    updatedOptions[index] = updatedOptions[index + 1];
    updatedOptions[index + 1] = temp;
    setRankedOptions(updatedOptions);
  };

  return (
    <div>
      <h2 className="text-2xl  font-normal text-gray-900">Please rank the options based on how well the recommended wine match your preference.</h2>
      <h2 className="text-2xl font-extralight text-gray-500">Eg:- How well they match your preferred Price, Alcholol Content, Wine Style etc.</h2>
      <ul  className="text-xl pl-2 text-gray-700" >
        {rankedOptions.map((option, index) => (
          <li key={option.name}>
            {`${option.name} - `}
            {index !== 0 && (
              <button onClick={() => moveOptionUp(index)}>    <span className="arrow-icon"> <FaArrowAltCircleUp /></span> 
              </button>
            )}
            {index !== rankedOptions.length - 1 && (
              <button onClick={() => moveOptionDown(index)}>  <span className="arrow-icon">  <FaArrowAltCircleDown /></span>
              
              
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingSystem;
