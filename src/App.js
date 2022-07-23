import React from 'react';
import {createContext ,useState} from "react";
import Nav from "./pages/Nav";
import Signup from "./pages/Signup";
import Burger from "./components/Burger";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const UserContext = createContext(0);
export const BurgerContext = createContext(0);
export const PriceContext = createContext(0);
function App() {
  const [isLogin , setisLogin] = useState(false)
  const [price, setTotalPrice] = useState(0);
  const [items, setItems] = useState({
    meat: {
      id: 0,
      ingredient: "meat",
      price: 100,
      quantity: 0,
    },
    cheese: {
      id: 1,
      ingredient: "cheese",
      price: 200,
      quantity: 0,
    },
    lettuce: {
      id: 3,
      ingredient: "lettuce",
      price: 10,
      quantity: 0,
    },
    tomato: {
      id: 4,
      ingredient: "tomato",
      price: 50,
      quantity: 0,
    }
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{setisLogin,isLogin}}>
        <Nav/>
          <BurgerContext.Provider value={{ items, setItems} }>
            <PriceContext.Provider value={{price,setTotalPrice}}>
              <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Burger/>}/>
              </Routes>
            </PriceContext.Provider>
        </BurgerContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
