import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useContext } from "react";
import  burgerContext  from '../contexts/burgers/burgerContext'
import  priceContext  from '../contexts/prices/priceContext';
import  loginContext  from '../contexts/logins/loginContext';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

function Burger(props) {
  const {items,setItems} = useContext(burgerContext);
  const {price,setTotalPrice} = useContext(priceContext);
  const {isLogin,setisLogin} = useContext(loginContext);
  const [modalShow, setModalShow] = React.useState(false);
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
    const tempMenu = result.map((item) => (<div key={item.id} className="burgerChoice">
    <div className='container'>
    <button className="btn-more" onClick={() => handleAddIngredient(item.ingredient,'add')}>MORE {item.ingredient}</button>
    <button className="btn-less"  disabled={item.quantity <= 0} onClick={() => handleAddIngredient(item.ingredient,'remove')}>LESS</button>
    </div>
  </div>))
  return tempMenu;
  }
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
      <button disabled={!isLogin && result.length>0} onClick={() => setModalShow(true)}>
        Checkout
      </button>
      </div>
      <div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </div>
  );
}
export default Burger;

