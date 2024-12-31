import React from 'react'
import { NavLink } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='login-container'>
      <h3>ShopNest</h3>
      <div>
        <h2>Sign in</h2>
        <b>Email or Phone number</b>
        <input type='text' />
        <button>continue</button>
        <p>By continuing, you agree to ShopNest's <NavLink>Conditions of Use</NavLink> and <NavLink>Privacy Notice</NavLink>.</p>
        <NavLink><p>Forget password</p></NavLink>
        <NavLink><p>Forget Email or Phone number</p></NavLink>
      </div>
      <hr />
      <div>
        <p>New to ShopNest?</p>
        <h2>Create an account</h2>
        <button>Create your account</button>
      </div>
     

    </div>
  )
}

export default LogIn