import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCake, buyCake } from "../redux";
const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(addCake())}>Add Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
