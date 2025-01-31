import { Link } from "react-router-dom"

const SignIn = () => {

    const handelSignIn = (e) => { 
        e.preventDefault()
        console.log('Sign In')
    }

  return (
    <div className="container">
       <form action="">
          <div className="form-group">
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' required />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" required id='password'/>
            </div>
         
             <a href="#">Forget password ?</a> 
            <button onClick={handelSignIn}>
                Sign In
            </button>
            </div> 
            <div>
            <p>Don't have an account? <Link to="signup">Sign Up</Link></p>
        </div>
        </form> 
       
    </div>
  )
}

export default SignIn
