import React from "react";
import PremiumPlanTable from "../premium_plan/PremiumPlanTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPremium } from "../../redux/action";

const CartPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchAllPremium());

  const state = useSelector((state) => state.premiumReducer);

  return state.allPremiums.map((premium, index) => (
    <PremiumPlanTable key={index} premium={premium} />
  ));
};

export default CartPage;
