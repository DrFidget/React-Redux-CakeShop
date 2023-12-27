import { ADD_ICECREAM, BUY_ICECREAM } from "./iceCreamtypes";

const initialState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ICECREAM:
      return {
        numOfIceCream: state.numOfIceCream + 1,
      };
    case BUY_ICECREAM:
      return {
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};
export default cakeReducer;
