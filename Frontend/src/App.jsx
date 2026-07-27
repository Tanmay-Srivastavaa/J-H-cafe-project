import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Reviews from "./Reviews";
import Menu from "./Menu"; 
import "./App.css"; 

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/reviews" element={<Reviews currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      {/* 2. Add the Menu Route */}
      <Route path="/menu" element={<Menu currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> 
    </Routes>
  );
}

export default App;