import "./App.css";

import { Routes, Route } from "react-router-dom";


import Home from "./components/Home/Home";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import Result from "./components/Result/Result";
import ThankYouComponant from "./components/ThankYouComponent/ThankYouComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/result" element={<Result />} />
        <Route path="/thank-you" element={<ThankYouComponant />} />
      </Routes>
    </>
  );
}

export default App;
