import { BUY_ICECREAM, ADD_ICECREAM } from "./iceCreamtypes";

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
export const addIceCream = () => {
  return {
    type: ADD_ICECREAM,
  };
};
