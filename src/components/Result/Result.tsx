import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useLocation } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { collection, addDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import "./Result.css";
import LikertScale from "../FeedbackForm/FeedbackForm";
import RankingSystem from "../RankingSystemComponent/RankingSystemComponet";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import WineCard from "../WineCard/WineCard";





const fieldNameComponent = (fieldName: String, item: any) => {
  return (
    <div className="double-p">
      <p className="float-left card-text">{fieldName}</p>
      &nbsp;
      <p className="float-right card-text">{item["fieldName"]}</p>
    </div>
  );
};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVWL6X_-g6ad7Blj_hSfYG6Qbij-dR6lU",
  authDomain: "wine-recommend.firebaseapp.com",
  projectId: "wine-recommend",
  storageBucket: "wine-recommend.appspot.com",
  messagingSenderId: "740133911923",
  appId: "1:740133911923:web:7f7603a51f794dba5cd906"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);


// firebase.initializeApp(firebaseConfig)


const db = getFirestore(app);


   
    



const Result = () => {

  const { state } = useLocation();
  let navigate = useNavigate()

  const [results, setResults] = useState(state.results);

  const [loading, setLoading] = useState(false);

    const [accuracy, setAccuracy] = useState("");
    const [novelty, setNovelty] = useState("");
    const [diversity, setDiversity] = useState("");
    const [transparency, setTransparency] = useState("");
    const [usefulness, setUsefulness] = useState("");
    const [satisfaction, setSatisfaction] = useState("");
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

      const [options, setOptions] = useState([
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
    { name: 'Option 4' }
  ]);
  const [rankedOptions, setRankedOptions] = useState(options);

  const handleSubmit = async () => {

    setLoading(true);

    try {
        const docRef = await addDoc(collection(db, "response"), {
          accuracy,
          novelty, 
          diversity ,
          transparency,
          usefulness,
          satisfaction,
          country,
          gender,
          age,
          rankedOptions
        });
        console.log("Document written with ID: ", docRef.id);
        setLoading(false)
        navigate("/thank-you");

        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


  return (
    <>
      <div className="bg-gray-50">

        <div className="relative bg-gray-50 max-w-7xl mx-auto">
        <div className="px-4 py-3 bg-gray-50  text-center sm:px-6">


        <h2 className="text-center max-w-4xl mx-auto  text-3xl pb-4 font-thin leading-10	 text-gray-900 sm:text-4xl">We recommend 4 sets of wine bottles that suits your preference using 4 different statistical techniques. Each set contains 3 bottles of wine.</h2>

        </div>
        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">


          

        <h2  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Option 1</h2>
        <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {results.cosine_no_rating.map((item: any, id: number) => {
            console.log("hellow this is item", item)
            return (
              <WineCard item={item}/>
            );
          })}
        </div>
        </div>


        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">

<h2  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Option 2</h2>
<div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {results.jaccard_no_rating.map((item: any, id: number) => {

            console.log(item)
            return (
              <WineCard item={item}/>
         
            );
          })}
</div>
        </div>

        
        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">

<h2  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Option 3</h2>

                <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {results.cosine_rating.map((item: any, id: number) => {
            return (
              <WineCard item={item}/>
            );
          })}
        </div>
        </div>


        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">

<h2  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Option 4</h2>
        <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {results.jaccard_rating.map((item: any, id: number) => {
            return (
          <WineCard item={item}/>
            );
          })}
        </div>
        </div>
</div>


        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">

        <dl  className="mt-6 md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

 <RankingSystem
        options={options}
        rankedOptions={rankedOptions}
        setRankedOptions={setRankedOptions}
      />
      </dl>
      <dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">
      <LikertScale question="The items recommended to me matched my interests" state={accuracy} setState={setAccuracy} />
      </dl>

      <dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<LikertScale question="The recommender system helped me discover new products" state={novelty} setState={setNovelty} />
</dl>

<dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<LikertScale question="The items recommended to me are diverse." state={diversity} setState={setDiversity} />
</dl>

<dl  className="mt-6 md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">
<LikertScale question="I found it easy to modify my taste profile in the recommender system" state={transparency} setState={setTransparency} />
</dl>

<dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<LikertScale question="The information provided for the recommended items is sufficient for me to make a purchase decision" state={usefulness} setState={setUsefulness} />
</dl>

<dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<LikertScale question="Overall, I am satisfied with the recommender system" state={satisfaction} setState={setSatisfaction} />
</dl>

<dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<MultipleChoice
        question="Where are you from?"
        options={['South Asia', 'Asia excluding South Asia', 'Australia' , 'Europe', 'Africa' , 'North America', 'South America']}
        selectedOption={country}
        setSelectedOption={setCountry}
      />
      </dl>

      <dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">

<MultipleChoice
        question="What’s your gender?"
        options={['Female', 'Male', 'Other', 'Prefer not to say']}
        selectedOption={gender}
        setSelectedOption={setGender}
      />
      </dl>

<dl  className="mt-6  md:pl-2 pl-4 space-y-6 divide-y divide-gray-200">


<MultipleChoice
        question="How old are you?"
        options={['Below 18', '18 - 30', '31 - 45', '45 - 60', 'Above 60']}
        selectedOption={age}
        setSelectedOption={setAge}
      />
      </dl>

      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
<button className=" mt-8 w-40 mx-auto disabled:cursor-not-allowed  cursor-pointer disabled:opacity-50 items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"  type="submit" onClick={handleSubmit} disabled={loading || !accuracy ||
          !novelty||
          !diversity ||
          !transparency||
          !usefulness||
          !satisfaction||
          !country||
          !gender||
          !age||
          !rankedOptions}>
          
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

export default Result;
