import React from 'react';
import {createContext ,useState} from "react";
import Nav from "./pages/Nav";
import Signup from "./pages/Signup";
import Burger from "./components/Burger";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const User = createContext()
function App() {
  var auth= false
  const [user, setUser] = useState([
    {
    email: "text@test.com",
    password: "text123*"
    }
  ]);

  return (
    <BrowserRouter>
        <Nav/>
        <User.Provider value={user}>
      <Routes>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Burger/>}/>

      </Routes>
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;
