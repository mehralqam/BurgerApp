import React, { useContext, useState  } from 'react';
import  burgerContext  from '../contexts/burgers/burgerContext'
import  loginContext  from '../contexts/logins/loginContext';
import  priceContext  from '../contexts/prices/priceContext';
import Burger from "../components/Burger";
import '../App.css';
const OrderBurger = () => {
  const {items,setItems} = useContext(burgerContext);
  const {isLogin,setisLogin} = useContext(loginContext);
  const {price,setTotalPrice} = useContext(priceContext);
  const [checkout, setCheckout] = useState(false);
  let result= Object.values(items);
  const handleBurgerContent = () => {
    const tmpIngredientsArray = result.reduce(( prev, curr ) => {
      const ingredientArr = new Array(curr.quantity)
        .fill('')
        .map(()=> <div key={curr.ingredient} className={curr.ingredient} />)

      return [ ...prev, ...ingredientArr]
    }, [])

    if (tmpIngredientsArray.length===0) {
      return <p>Please start adding ingredients!</p>
    }

    return tmpIngredientsArray;
  }
  const handleCheckout = () => {
    alert(price);
    setCheckout(true);
  }
  return (
    <>{result.length===0?<Burger/>:<div className="App">
      <div className="topBun">
      </div>
      {handleBurgerContent()}
      <div className="bottomBun">
      </div>
      {checkout && <div className='checkout'><h1>Enjoy your meal your total bill is {price}</h1></div>}
      {!checkout && result.length!=0 &&<button onClick={() => handleCheckout()}>Checkout</button>}
    </div>
    }
    </>
)
}
export default OrderBurger;
