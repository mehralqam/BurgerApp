import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function Burger() {
  const [burger, setBurger] = useState([])
  const [price, setTotalPrice] = useState(0)
  const [items, setItems] = useState([
    {
      id: 0,
      ingredient: "meat",
      price: 100,
      quantity: 0,
    },
    {
      id: 1,
      ingredient: "cheese",
      price: 50,
      quantity: 0,
    },
  ]);

  useEffect(() => {
    const sum = items.reduce((accumulator, object) => {
      return accumulator + object.price * object.quantity;
    }, 0);
    setTotalPrice(sum);
  }, [items]);

function addIngredient(id) {
  let item_quantity = 0
  const updated_items = items.map((item) => {
    if (item.id === id) {
      item_quantity = item.quantity + 1
      setBurger([...burger, item]);
      return { ...item, quantity: item_quantity }
    }
    return item
  })
  setItems(updated_items)
}

function removeIngredient(id) {
  let item_quantity = 0
  const updated_items = items.map((item) => {
    if (item.id === id) {
      item_quantity = item.quantity - 1
      const nednj = burger.splice(burger.findIndex(function(i){
        return i.id === id;
    }), 1);
    console.log(nednj);
    setBurger(nednj)
      return { ...item, quantity: item_quantity }
    }
    return item
  })
  setItems(updated_items)
}
return (
  <div className="App">
    <div className='total'>
      <span id="total-price"> {price} </span>
    </div>
    <div className="topBun">
    </div>
    <div id="ingredients">
    <ul>
      {burger.map((item) => (
        <div className={item.ingredient}>

        </div>
      ))}
    </ul>
     </div>
    <div className="bottomBun">
    </div>


    <div className="burgerChoice">
      <button onClick={() => addIngredient(0)}>Add Meat</button>
      <button onClick={() => addIngredient(1)}>Add Cheese </button>
      <button onClick={() => removeIngredient(0)}>Remove Meat</button>
      <button onClick={() => removeIngredient(1)}>Remove Cheese </button>
    </div>
  </div>
);
}
export default Burger;

