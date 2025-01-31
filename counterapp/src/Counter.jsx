import React, { useState } from 'react'
import './App.css'
const Counter = () => {
    const [count , setCount]= useState(0);
    const [error , setError]= useState(null)

    const handelSub=()=>{
        if(count>0){
            setCount(count-1)
        }
        else {
            setError('Counter can not be less than 0')
        }
    }
  return (
    <div className='container'>
        <h1>Counter</h1>
        <div className='display'>
            <h2>{count}</h2>
            {error && <h3 >{error}</h3>}
        </div>
      <div className='btnContainer'>
        <button className='btn' onClick={()=> {setCount((count+1));setError(null)}}>+ </button>
        <button className='btn' onClick={handelSub}>-</button>

        <button className='btn' onClick={() => {setCount(0);setError(null)}}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
