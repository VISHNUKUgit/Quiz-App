import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import questions from '../Components/questions';
function Result({ name, score, setQuizData, setName, setScore, quizData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    setQuizData([])
    setName("")
    setScore(0)
  }
  // const filteredQuizData = questions.map((quest) => {
  //   return quizData.filter((ans) => ans.qid === quest.id);
  // });
  console.log(quizData);
  return (
    <div className='w-100 bg-success d-flex justify-content-center align-items-center min-vh-100'>
      <div className='d-flex w-75 h-75 shadow border  p-1'>
        <div className='w-50'>
          <img className='w-100' src="https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" alt="" />
        </div>
        <div className='w-50 d-flex flex-column justify-content-center align-items-center'>
          <h3>
            {`${name} your score is ${score}/5`}
          </h3>

          <Link to={'/'} className='w-75'>
            <button onClick={handleClear} className='btn btn-warning w-100 mt-2'>End Quiz</button>
          </Link>
          <Link to={'/'} className='w-75'>
            <button onClick={handleClear} className='btn bg-danger w-100 mt-2'>Retry</button>
          </Link>
          <Button className='w-75 mt-2' variant="primary" onClick={handleShow}>
            See Answer
          </Button>
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Answer sheet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {quizData.map((data, index) => (
                <div key={index} className='mt-2'>
                  <span className='fw-bold'>{`Q${index+1}`}.{data.question}</span> <br/>
                  <span>Correct Ans: {data.options[data.answer]}</span>
                  <br/>
                  <span>Your Ans:{data.options[data.selectedAns]}</span>
                  
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Result