import React, { useContext, useState  } from 'react';
import  burgerContext  from '../contexts/burgers/burgerContext'
import  loginContext  from '../contexts/logins/loginContext';
import  priceContext  from '../contexts/prices/priceContext';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import Burger from "../components/Burger";
import '../App.css';
const OrderBurger = () => {
  const {items,setItems} = useContext(burgerContext);
  const {isLogin,setisLogin} = useContext(loginContext);
  const {price,setTotalPrice} = useContext(priceContext);
  const [checkout, setCheckout] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  let result= Object.values(items);

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
  const handleCheckout = () => {
    alert(price);
    setCheckout(true);
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
    <div>
    <button className="btn-checkout" disabled={!isLogin && result.length === 0} onClick={() => setModalShow(true)}>
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
)
}
export default OrderBurger;
