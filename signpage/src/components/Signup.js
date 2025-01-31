import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container">
       <form action="">
          <div className="form-group">
            <div>
            <label htmlFor="name">Name</label>
            <input type="name" id='name' />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'/>
            </div>
            <div>
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <input type="confirmPassword" id='confirmPassword'/>
            </div>
         
            <button>
                Sign Up
            </button>
            </div> 
            <div>
            <p>Already have an account? <Link to="/">Sign In</Link></p>
        </div>
        </form> 
     
    </div>
  )
}

export default Signup
