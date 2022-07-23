import {useState} from "react";
import BurgerContext from "./burgerContext";
const BurgerState = (props) => {
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
  return(
    <BurgerContext.Provider value={{ items, setItems} }>
        {props.childern}
    </BurgerContext.Provider>
  )

}
export default BurgerState;
