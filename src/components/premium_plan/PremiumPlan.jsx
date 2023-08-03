import React from "react";
import PremiumPlanTable from "./PremiumPlanTable";
import { useSelector } from "react-redux";

const PremiumPlan = () => {
  const state = useSelector((state) => state.premiumReducer);
  return <PremiumPlanTable premium={state.premium} />;
};

export default PremiumPlan;
