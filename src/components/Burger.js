import React from 'react';
import { useEffect, useContext } from "react";
import  burgerContext  from '../contexts/burgers/burgerContext'
import  priceContext  from '../contexts/prices/priceContext';
function Burger(props) {
  const {items,setItems} = useContext(burgerContext);
  const {price,setTotalPrice} = useContext(priceContext);
  const result = Object.values(items);
  useEffect(() => {
    let price = 0
    for (const item in items) {
      price += items[item].price * items[item].quantity
    }
    setTotalPrice(price);
  }, [items]);

  const handleAddIngredient = (id,operation) => {
    const tmpIngredients = { ... items };
    operation==='add'?
    tmpIngredients[id].quantity = tmpIngredients[id].quantity + 1
    :tmpIngredients[id].quantity = tmpIngredients[id].quantity - 1;
    setItems(tmpIngredients)
  }

  const renderMenu = () => {
    const tempMenu = result.map((item) => (<div className="burgerChoice">
    <button onClick={() => handleAddIngredient(item.ingredient,'add')}>Add {item.ingredient}</button>
    <button disabled={item.quantity <= 0} onClick={() => handleAddIngredient(item.ingredient,'remove')}>Remove</button>
  </div>))
  return tempMenu;
  }
  // const handleBurgerContent = () => {
  //    const tmpIngredientsArray = result.reduce(( prev, curr ) => {
  //     const ingredientArr = new Array(curr.quantity)
  //     .fill('')
  //     .map(()=> <div key={curr.ingredient} className={curr.ingredient} />)
  //     return [ ...prev, ...ingredientArr]
  //   },[])
  //   if (tmpIngredientsArray.length===0) {
  //     return <p>Please start adding ingredients!</p>
  //   }
  //   console.log("after",tmpIngredientsArray)
  //   return tmpIngredientsArray;
  // }
  const renderBurgerContent = () => {
    const tempIng = []
    result.forEach(item => {
      item.quantity > 0 &&  tempIng.push(
        [...Array(item.quantity)].map((e, i) => (
          <div key={i} className={item.ingredient} />
        ))
      );
    })
    return tempIng;
  }
  return (
    <div>
      <div className='burgerContent'>
        <div className="topBun">
        </div>
        {renderBurgerContent()}
        <div className="bottomBun">
        </div>
      </div>
      <div className='total'>
        <span id="total-price">Total Price: <i>{price}</i> </span>
        {renderMenu()}
        <h1>Sign In to Checkout</h1>
      </div>
    </div>
  );
}
export default Burger;

