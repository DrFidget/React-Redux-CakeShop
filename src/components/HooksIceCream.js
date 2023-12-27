import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIceCream, buyIceCream } from "../redux/iceCream/iceCreamActions";
const HooksIceCream = () => {
  const numofIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numofIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
      <button onClick={() => dispatch(addIceCream())}>Add Cake</button>
    </div>
  );
};

export default HooksIceCream;
