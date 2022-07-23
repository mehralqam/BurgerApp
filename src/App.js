import React from 'react';
import Nav from "./pages/Nav";
import Signup from "./pages/Signup";
import Burger from "./components/Burger";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PriceState from './contexts/prices/PriceState';
import LoginState from './contexts/logins/LoginState';
import BurgerState from './contexts/burgers/BurgerState';

function App() {
  console.log("iam app")
  return (
  <>
  <h1>hellllooooo</h1>
  <BurgerState>
    <h1>hellllooooo</h1>
      <LoginState>
        <PriceState>
          <Nav/>
          <BrowserRouter>
              <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Burger/>}/>
              </Routes>
          </BrowserRouter>
          </PriceState>
    </LoginState>
  </BurgerState>
  </>
  );
}

export default App;
