import questions, { Question, Answer, questionState } from "../../questions";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProgressCounter from "../navigation/steps/Progress";



interface State {
  [key: string]: any;
}

function useEmptyValuesCount(state: State): number {
  const [emptyValuesCount, setEmptyValuesCount] = useState(0);

  useEffect(() => {
    let count = 0;
    for (const value of Object.values(state)) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          count += 1} } else{

            if (!value) count += 1;
          }
    }
    setEmptyValuesCount(count);
  }, [state]);

  return emptyValuesCount;
}

function useCompletedPercentage(state: State): number {
  const [completedPercentage, setCompletedPercentage] = useState(0);
  
  useEffect(() => {
  let totalValues = 0;
  let filledValues = 0;
  for (const value of Object.values(state)) {
  if (Array.isArray(value)) {
  if (value.length > 0) {
  filledValues += 1;
  }
  totalValues += 1;
  } else if (value || value === 0) {
  filledValues += 1;
  totalValues += 1;
  }
  }
  const percentage = (filledValues / totalValues) * 100;
  setCompletedPercentage(percentage);
  }, [state]);
  
  return completedPercentage;
  }
  
  

const Questionnaire = () => {
  const [answers, setAnswers] = useState<any>({ ...questionState });
  const [data, setData] = useState<any>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);

  let [loading, setLoading] = useState(false);


  const handleBlur = () => {
    setProgress(progress + 14.28);
  };
  
  const emptyValuesCount = useEmptyValuesCount(answers);


  const percentage = ((10 - emptyValuesCount)/ 10 * 100)
  const navigate = useNavigate();

  useEffect(() => {
    if (submit) {
      axios
        .post( 
          "http://localhost:5010/SimilarityMeasure",
          { ...data },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          navigate("/result", { state: response.data });
        });
    }
  }, [submit]);

  const selectAnswerComponent = function (question: Question) {
    switch (question.type) {
      case "slider":
        return (
          <div className="pt-2">
            <div>
              <label className="text-xl pr-2 text-gray-700">{question.minTag}</label>
              <input
                type="range" 
                onBlur={handleBlur}
                min={question.minTag}
                max={question.maxTag}
                onChange={(e) => {
                 

                  setAnswers({
                    ...answers,
                    [question.category]: e.target.value,
                  });
                }}
                value={answers[question.category]}
              />
              <label className="text-xl pl-2 text-gray-700">{question.maxTag}</label>
            </div>
            <div></div>
          </div>  
        );
      case "radio":
        return (
          <>
            {question.answers?.map((answer: Answer) => (
              <div  className="flex pt-2 items-center" key={answer.id}>
                <input
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  id={`${question.id} - ${answer.id}`}
                  name={question.category}
                  value={answer.answer}
                  checked={answers[question.category] === answer.answer}
                  onChange={(e) => {
                    setProgress(progress + 14.28);
                    setAnswers({
                      ...answers,
                      [question.category]: e.target.value,
                    });
                  }}
                />
                <label  className="text-xl pl-2 text-gray-700" htmlFor={`${question.id} - ${answer.id}`}>
                  {answer.answer}
                </label>
              </div>
            ))}
          </>
        );
      case "multiple":
        return (
          <>
            {question.answers?.map((answer: Answer) => (
              <div className="pt-2" key={answer.id}>
                <input
                  type="checkbox"
                  id={`${question.id} - ${answer.id}`}
                  name={question.category}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"

                  value={answer.answer}
                  checked={answers[question.category].includes(answer.answer)}
                  onChange={(e) => {
                    const newArray = answers[question.category];
                    if (newArray.includes(e.target.value)) {
                      setProgress(progress + 14.28);

                      setAnswers({
                        ...answers,
                        [question.category]: newArray.filter(
                          (item: string) => item !== e.target.value
                        ),
                      });
                    } else {
                      newArray.push(e.target.value);
                      setAnswers({ ...answers, [question.category]: newArray });
                    }
                  }}
                />
                <label  className="text-xl pl-2 text-gray-700" htmlFor={`${question.id} - ${answer.id}`}>
                  {answer.answer}
                </label>
              </div>
            ))}
          </>
        );
      case "special":
        return (
          <>
            {question.answers?.map((answer: Answer) => (
              <div className="pt-2" key={answer.id}>
                <div>
                  <label  className="text-lg pr-2 text-gray-700">{answer.minTag}</label>
                  <input
                    type="range"
                    min={answer.minValue}
                    max={answer.maxValue}
                    onChange={(e) => {
                      setProgress(progress + 14.28);

                      setAnswers({
                        ...answers,
                        [answer!.category || ""]: e.target.value,
                      });
                    }}
                    value={answers[answer.category || ""]}
                  />
                  <label  className="text-xl pl-2 text-gray-700" >{answer.maxTag}</label>
                </div>
              </div>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = function () {
    const wineStyles = ["Red", "White", "Other"];
    const years = [
      "Non-vintage",
      "1 year",
      "2 years",
      "3 years",
      "4 years",
      "5 years",
      "6 years",
      "7 years",
      "7+ years",
    ];
    const countries = [
      "France",
      "Italy",
      "USA",
      "Portugal",
      "Australia",
      "Spain",
      "Chile",
      "New Zealand",
    ];

    const requestData = {
      Price: [Number(answers["Price"])],
      "Alcohol content": [Number(answers["Alcohol content"])],
      Bold: [Number(answers["Bold"])],
      Tannin: [Number(answers["Tannin"])],
      Sweet: [Number(answers["Sweet"])],
      Acidic: [Number(answers["Acidic"])],
      Country: [countries.indexOf(answers["Country"])],
      "Wine style": [wineStyles.indexOf(answers["Wine style"])],
      Beef: [Number(answers["Beef"] || 0)],
      Poultry: [Number(answers["Poultry"] || 0)],
      Lamb: [Number(answers["Lamb"] || 0)],
      "Game (deer, venison)": [Number(answers["Game (deer, venison)"] || 0)],
      Pasta: [Number(answers["Pasta"] || 0)],
      Veal: [Number(answers["Veal"] || 0)],
      Shellfish: [Number(answers["Shellfish"] || 0)],
      Vegetarian: [Number(answers["Vegetarian"] || 0)],
      Pork: [Number(answers["Pork"] || 0)],
      "Cured meat": [Number(answers["Cured meat"] || 0)],
      "Appetizers and snacks": [Number(answers["Appetizers and snacks"] || 0)],
      "Lean fish": [Number(answers["Lean fish"] || 0)],
      "Rich fish (salmon, tuna etc)": [
        Number(answers["Rich fish (salmon, tuna etc)"] || 0),
      ],
      "Mature and hard cheese": [
        Number(answers["Mature and hard cheese"] || 0),
      ],
      "Mild and soft cheese": [Number(answers["Mild and soft cheese"] || 0)],
      Aperitif: [Number(answers["Aperitif"] || 0)],
      "Goat cheese": [Number(answers["Goat cheese"] || 0)],
      "Spicy food": [Number(answers["Spicy food"] || 0)],
      "Fruity desserts": [Number(answers["Fruity desserts"] || 0)],
      Mushrooms: [Number(answers["Mushrooms"] || 0)],
      "Blue cheese": [Number(answers["Blue cheese"] || 0)],
      "Sweet desserts": [Number(answers["Sweet desserts"] || 0)],
      Year: [years.indexOf(answers["Year"])],
    };

    setLoading(true)
    setData(requestData);
    setSubmit(true);
  };

  return (
    <>
    <div className="bg-gray-50">
      <div className="max-w-3xl  mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl pb-4 font-extrabold text-gray-900 sm:text-4xl">Please answer the following questions based on your preference.</h2>
      <div className="max-w-3xl  mx-auto divide-y-2 divide-gray-200">
      
        <ProgressCounter progress={percentage}/>
            {questions.map((question: Question) => (
                 <dl key={question.id} className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6" >
                <h1 className="text-base font-extrabold leading-6 text-gray-900" >Question {question.id}</h1>
                <div className="text-2xl font-normal text-gray-900">{question.question}</div>
                <div className=" answers-container">
                  {selectAnswerComponent(question)}
                </div>
              </div>
              </dl>
            ))}
        {/* <dl className="mt-6 space-y-6 divide-y divide-gray-200"> */}

            

       
      </div>
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
      <button disabled={percentage !== 100}
                    className=" mt-8 w-40 mx-auto disabled:cursor-not-allowed font-extrabold  cursor-pointer disabled:opacity-50 items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
 onClick={handleSubmit}>
   {loading ? (
        "Submitting..."
      ) : (
        "Submit"
      )}
            </button>
                </div>


      </div>

      </div>

      

    </>
  );
};

export default Questionnaire;
