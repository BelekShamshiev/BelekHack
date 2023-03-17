import React, { useState } from "react";
import './Login.css'
import axios from 'axios'

const Login = () => {

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })


  const sendUser = () => {
    axios
      .post('http://localhost:5432/', userLogin)
      .then((res) => console.log(res))
      setUserLogin({email: '' , password: ''})
  }


  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              name=""
              required=""
              value={userLogin.email}
              onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              value={userLogin.password}
              onChange={e => setUserLogin({ ...userLogin, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <a onClick={sendUser}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
