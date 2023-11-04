import React from 'react'
import { Link } from 'react-router-dom'
function Result({ name, score, setQuizData, setName, setScore }) {
  const handleClear = () => {
    setQuizData([])
    setName("")
    setScore(0)
  }
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
        </div>
      </div>
    </div>
  )
}

export default Result