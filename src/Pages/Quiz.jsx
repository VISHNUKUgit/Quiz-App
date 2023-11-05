import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import questions from '../Components/questions';
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Quiz({ setQuizData, setScore, score, quizData }) {
  const navigate = useNavigate();
  // to get selected option
  const [selectedValue, setSelectedValue] = useState(null);
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // console.log(selectedValue);
  // evaluvation 
  const handleNext = () => {
    if (selectedValue === questions[qsAnum - 1].answer) {
      setScore(score + 1)
      console.log("score", score);
    }
    const updatedQuizData = [...quizData, { id:questions[qsAnum - 1].id,
      question:questions[qsAnum - 1].question,
      options:{
          a: questions[qsAnum - 1].options.a,
      b: questions[qsAnum - 1].options.b,
      c: questions[qsAnum - 1].options.c,
      d: questions[qsAnum - 1].options.d
      },
      answer: questions[qsAnum - 1].answer,
      selectedAns:selectedValue
      }];
    setQuizData(updatedQuizData)
    qNum > 3 && navigate('/result', { replace: true });
    increQNum()
    setSelectedValue(null);
    setff(false)
    setTip("")
    setNumber(30)
  }
  // console.log("data", quizData);

  // to get Random five number
  const [fiveQuestion, setFiveQuestion] = useState([])
  useEffect(() => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setFiveQuestion(randomNumbers)

  }, [])
  // set current question
  const [qNum, setQNum] = useState(0)

  const increQNum = () => {
    qNum < 4 && setQNum(qNum + 1)

  }
  const decreQNum = () => {
    qNum > 0 && setQNum(qNum - 1)
  }
  // console.log(fiveQuestion);
  // console.log(fiveQuestion[qNum]);
  let qsAnum = fiveQuestion[qNum]
  // console.log(qsAnum);
  // 50/50
  const [fused, setFused] = useState(false)
  const [ff, setff] = useState(false)
  const fifi = () => {
    setFused(true)
    setff(true)
  }
  const [tip, setTip] = useState("")
  const [tipUsed, setTipUsed] = useState(false)
  const tips = () => {
    setTip(questions[qsAnum - 1].remove1)
    setTipUsed(true)
  }
  // timer
  const [number, setNumber] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (number > 0) {
        setNumber(number - 1);
      }else{
        handleNext()
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [number]);

  return (
    <div className='w-100 bg-success d-flex justify-content-center align-items-center min-vh-100'>
      <div className='w-75 h-75 bg-light shadow border  p-2'>
        {/* information */}
        <div className='w-100 d-flex justify-content-between align-items-center px-2 border border-dark' >
          {!fused ? <OverlayTrigger
            key={'right'}
            placement={'right'}
            overlay={
              <Tooltip id={`tooltip-${'right'}`}>
                50/50 options
              </Tooltip>
            }
          >
            <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
              <i onClick={fifi} className="fa-solid fa-circle-half-stroke fa-lg"></i>
            </button>
          </OverlayTrigger> : <button style={{ border: 'none', background: 'none', padding: 0 }}
            disabled={fused}>
            <i className="fa-solid fa-circle-half-stroke fa-lg"></i>
          </button>}
          <div className='d-flex align-items-center'>
            <i class="fa-solid fa-hourglass fa-beat-fade fa-lg"></i>
            <div className='ms-1'><h4>{number}</h4></div>
          </div>
          {!tipUsed ? <OverlayTrigger
            key={'left'}
            placement={'left'}
            overlay={
              <Tooltip id={`tooltip-${'left'}`}>
                remove 1 wrong options
              </Tooltip>
            }
          >
            <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
              <i onClick={tips} class="fa-solid fa-dice fa-lg"></i>
            </button>
          </OverlayTrigger> : <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
            disabled={tipUsed}>
            <i class="fa-solid fa-dice-two fa-lg"></i>
          </button>}
        </div>
        {/* question  */}
       <div className='w-100 d-flex justify-content-between align-items-center px-2 border border-dark mt-2' >
          <h6 className='my-3'>{`${qNum + 1}.${qsAnum ? questions[qsAnum - 1].question : ''}`}</h6>
        </ div>
        {/*options  */}
        <div >
          <Form className='w-100 d-flex flex-wrap my-2' >
            <div className='w-50 pe-1  ' >
              <h6 className={`my-3 p-3 border border-dark ${tip === "a" && 'd-none'}`} style={{ cursor: 'pointer', ...(ff && (questions[qsAnum - 1].remove1 === "a" || questions[qsAnum - 1].remove2 === "a") && { display: 'none' }) }}>
                <Form.Check
                  inline
                  label={`${qsAnum ? questions[qsAnum - 1].options.a : ''}`}
                  name="group1"
                  type="radio"
                  value="a"
                  onChange={handleRadioChange}
                  checked={selectedValue === "a"}
                />
              </h6>
            </div>
            <div className='w-50 ps-2'>
              <h6 className={`my-3 p-3 border border-dark ${tip === "b" && 'd-none'}`} style={{ cursor: 'pointer', ...(ff && (questions[qsAnum - 1].remove1 === "b" || questions[qsAnum - 1].remove2 === "b") && { display: 'none' }) }}>
                <Form.Check
                  inline
                  label={`${qsAnum ? questions[qsAnum - 1].options.b : ''}`}
                  name="group1"
                  type="radio"
                  value="b"
                  onChange={handleRadioChange}
                  checked={selectedValue === "b"}
                />
              </h6>
            </div>
            <div className='w-50 pe-1'>
              <h6 className={`my-3 p-3 border border-dark ${tip === "c" && 'd-none'}`} style={{ cursor: 'pointer', ...(ff && (questions[qsAnum - 1].remove1 === "c" || questions[qsAnum - 1].remove2 === "c") && { display: 'none' }) }}>
                <Form.Check
                  inline
                  label={`${qsAnum ? questions[qsAnum - 1].options.c : ''}`}
                  name="group1"
                  type="radio"
                  value="c"
                  onChange={handleRadioChange}
                  checked={selectedValue === "c"}
                />
              </h6>
            </div>
            <div className='w-50 ps-2'>
              <h6 className={`my-3 p-3 border border-dark ${tip === "d" && 'd-none'}`} style={{ cursor: 'pointer', ...(ff && (questions[qsAnum - 1].remove1 === "d" || questions[qsAnum - 1].remove2 === "d") && { display: 'none' }) }}>
                <Form.Check
                  inline
                  label={`${qsAnum ? questions[qsAnum - 1].options.d : ''}`}
                  name="group1"
                  type="radio"
                  value="d"
                  onChange={handleRadioChange}
                  checked={selectedValue === "d"}
                 
                />
              </h6>
            </div>
          </Form>
        </div>
        {/* navigation */}
        <div className='w-100 d-flex justify-content-end align-items-center p-2 border border-dark'>
          {/* <button onClick={decreQNum} className='btn btn-warning'><i class="fa-solid fa-angles-left fa-lg" style={{ color: "#000000" }}></i> PREV </button> */}
          <button onClick={handleNext} className='btn btn-warning'>NEXT <i class="fa-solid fa-angles-right fa-lg" style={{ color: "#000000" }}></i></button>

        </div>
      </div>
    </div>
  )
}

export default Quiz

