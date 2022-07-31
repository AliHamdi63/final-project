import React from "react";
import IngredientsComponent from "../components/SingleMealComponents/IngredientsComponent";
import InstructionsComponent from "../components/SingleMealComponents/InstructionsComponent";
import MealHeadderComponent from "../components/SingleMealComponents/MealHeadderComponent";

function MealPurchasePage() {
  return (
    <div>
      <MealHeadderComponent></MealHeadderComponent>
      <IngredientsComponent></IngredientsComponent>
      <InstructionsComponent></InstructionsComponent>
    </div>
  );
}

export default MealPurchasePage;
