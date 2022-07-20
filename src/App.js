import React from 'react';
// import {useReducer} from 'react';
import Nav from "./pages/Nav";
import Signup from "./pages/Signup";
import Burger from "./components/Burger";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
    <div className="container">
      <Burger/>
    </div>
    </BrowserRouter>
  );
}

export default App;
