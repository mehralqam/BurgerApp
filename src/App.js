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
  return (
  <>
  <BrowserRouter>
  <BurgerState>
      <LoginState>
        <PriceState>
          <Nav/>
              <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Burger/>}/>
              </Routes>
          </PriceState>
    </LoginState>
  </BurgerState>
  </BrowserRouter>
  </>
  );
}

export default App;
