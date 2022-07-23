import {useState} from "react";
import PriceContext from "./priceContext";
const PriceState = (props) => {
  const [price, setTotalPrice] = useState(0);
  return(
    < PriceContext.Provider value={{ price, setTotalPrice} }>
        {props.childern}
    </PriceContext.Provider>
  )

}
export default PriceState;
