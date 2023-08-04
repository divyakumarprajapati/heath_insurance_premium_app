import React from "react";
import PremiumPlanTable from "../premium_plan/PremiumPlanTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPremium } from "../../redux/action";

const CartPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchAllPremium());

  const state = useSelector((state) => state.premiumReducer);

  return (
    <div className="my-5 px-5">
      {state.allPremiums.map((premium, index) => (
        <div key={index} className="d-flex flex-column justify-content-start">
          <div>Plan {index + 1}</div>
          <PremiumPlanTable premium={premium} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
