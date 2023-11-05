import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import { useState } from "react";

function App() {
  const [quizData,setQuizData] = useState([])
  const [name,setName] = useState("")
  const [score,setScore] = useState(0)
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home setName={setName} name={name} setQuizData={setQuizData} setScore={setScore}  />}/>
        <Route path="/quiz" element={<Quiz setQuizData={setQuizData} quizData={quizData} setScore={setScore} score={score} />}/>
        <Route path="/result" element={<Result quizData={quizData} score={score} name={name} setQuizData={setQuizData} setScore={setScore} setName={setName}/>}/>
      </Routes>
    </div>
  );
}

export default App;
