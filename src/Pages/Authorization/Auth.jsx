import React, { useState } from "react";
import "./auth.css";
import axios from "axios";

const Auth = () => {

  const [userRegis, setUserRegis] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const sendUserRegis = () => {
    axios
      .post('http://localhost:5432/', userRegis)
      .then((res) => console.log(res))
    setUserRegis({ userName: '', email: '', password: '' })
  }



  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              value={userRegis.userName}
              onChange={e => setUserRegis({ ...userRegis, userName: e.target.value })}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name=""
              required=""
              value={userRegis.email}
              onChange={e => setUserRegis({ ...userRegis, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              value={userRegis.password}
              onChange={e => setUserRegis({ ...userRegis, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <a onClick={sendUserRegis} >
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

export default Auth;
