import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Burger(props) {
  const [price, setTotalPrice] = useState(0)
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
  const result = Object.values(items);
  useEffect(() => {
    let price = 0
    for (const item in items) {
      price += items[item].price * items[item].quantity
    }
    setTotalPrice(price);
  }, [items]);

  function addIngredient(key) {
    const temp = structuredClone(items);
    temp[key].quantity = temp[key].quantity + 1;
    setItems(temp)
  }

  function removeIngredient(key) {
    const temp = structuredClone(items);
    temp[key].quantity = temp[key].quantity - 1;
    setItems(temp)
  }

  function burgerContent() {
    let burgerIngredient = [];
    //optimize this part
    for (let i = 0; i < items["meat"].quantity; i++) {
      burgerIngredient.push(<div key={burgerIngredient.length} className="meat"></div>);
    }
    for (let i = 0; i < items["cheese"].quantity; i++) {
      burgerIngredient.push(<div key={burgerIngredient.length} className="cheese"></div>);
    }
    for (let i = 0; i < items["lettuce"].quantity; i++) {
      burgerIngredient.push(<div key={burgerIngredient.length} className="lettuce"></div>);
    }
    for (let i = 0; i < items["tomato"].quantity; i++) {
      burgerIngredient.push(<div key={burgerIngredient.length} className="tomato"></div>);
    }
    if (burgerIngredient.length === 0)
      burgerIngredient.push(<p key="0">Please start adding ingredients!</p>);
    return burgerIngredient;
  }
  console.log(result);
  return (
    <div className="App">
      <div className="topBun">
      </div>
      {burgerContent()}
      <div className="bottomBun">
      </div>
      <div className='total'>
        <span id="total-price"> {price} </span>
      </div>
      {result.map((item) => (<div className="burgerChoice">
        <button onClick={() => addIngredient(item.ingredient)}>Add {item.ingredient}</button>
        <button disabled={item.quantity <= 0} onClick={() => removeIngredient(item.ingredient)}>Remove {item.ingredient} </button>
      </div>))}

      {/* <div className="burgerChoice">
      <button onClick={() => addIngredient("meat")}>Add Meat</button>
      <button onClick={() => addIngredient("cheese")}>Add Cheese </button>
      <button disabled={items.meat.quantity<=0} onClick={() => removeIngredient("meat")}>Remove Meat</button>
      <button disabled={items.cheese.quantity<=0} onClick={() => removeIngredient("cheese")}>Remove Cheese </button>
    </div> */}
    </div>
  );
}
export default Burger;

