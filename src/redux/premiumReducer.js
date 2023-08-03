import {
  GET_PREMIUM,
  GET_ALL_CART_PREMIUM,
  ADD_PREMIUM_TO_CART,
} from "./actionTypes";

const initialState = {
  premium: {},
  allPremiums: [],
  checkoutPremium: {},
};

const premiumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PREMIUM:
      return {
        ...state,
        premium: action.payload,
      };

    case GET_ALL_CART_PREMIUM:
      return {
        ...state,
        allPremiums: action.payload,
      };
    case ADD_PREMIUM_TO_CART:
      return {
        ...state,
        allPremiums: [...state.allPremiums, action.payload],
        checkoutPremium: action.payload,
      };
    default:
      return state;
  }
};

export default premiumReducer;
