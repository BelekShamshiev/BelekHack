import "./App.css";
import React from "react";
import { Input } from "antd";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Auth from "./Pages/Authorization/Auth";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
}

export default App;
