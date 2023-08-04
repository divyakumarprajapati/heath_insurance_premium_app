import {
  GET_PREMIUM,
  GET_ALL_CART_PREMIUM,
  ADD_PREMIUM_TO_CART,
} from "./actionTypes";
import axios from "axios";

const API = "http://localhost:8080";

const getPremium = (premium) => {
  return {
    type: GET_PREMIUM,
    payload: premium,
  };
};

const getAllPremium = (allPremiums) => {
  return {
    type: GET_ALL_CART_PREMIUM,
    payload: allPremiums,
  };
};

const addPremium = (premium) => {
  return {
    type: ADD_PREMIUM_TO_CART,
    payload: premium,
  };
};

export const fetchPremium = (membersData) => {
  return async function (dispatch) {
    await axios
      .post(`${API}/premium`, JSON.stringify(membersData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch(getPremium(res.data)))
      .catch((err) => console.error(err));
  };
};

export const fetchAllPremium = () => {
  return async function (dispatch) {
    axios
      .get(`${API}/premiums`)
      .then((res) => dispatch(getAllPremium(res.data.premiums)))
      .catch((err) => console.error(err));
  };
};

export const addPremiumToCart = (premium) => {
  return async function (dispatch) {
    await axios
      .post(`${API}/premiums`, JSON.stringify(premium), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch(addPremium(res.data)))
      .catch((err) => console.error(err));
  };
};
