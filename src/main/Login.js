import React from 'react'
import './style.css'
export default function Login() {
  return (
    <div>
      <form class="form-control" action="">
  <p class="title">Login</p>
  <div class="input-field">
    <input  class="input" type="email" required/>
    <label class="label" for="input">Enter Email</label>
  </div>
  <div class="input-field">
    <input  class="input" type="password" required/>
    <label class="label" for="input">Enter Password</label>
  </div>
  <a href='s'>Forgot your password?</a>
  <button class="submit-btn">Login</button>
</form>
    </div>
  )
}
