import React from 'react'
import { Link } from 'react-router-dom'

function Home({setName,setQuizData,setScore}) {
  // console.log(name);
const handleClear =()=>{
  setQuizData([])
  setScore()
}
  return (
    <div className='w-100 bg-success d-flex justify-content-center align-items-center min-vh-100'>
      <div className='d-flex w-75 h-75 shadow border  p-1'>
          <div className='w-50'>
              <img className='w-100' src="https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" alt="" />
          </div>
          <div className='w-50 d-flex flex-column justify-content-center align-items-center'>
                <input type="text" className='form-control w-75' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
                <Link to={'/quiz'} className='w-75'>
                <button onClick={handleClear} className='btn btn-warning w-100 mt-2'>START</button>
                </Link>
          </div>
      </div>   
    </div>
  )
}

export default Home