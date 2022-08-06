import React from "react";
import MyCartItems from "../components/Cart Components/MyCartItems";
import MyEmptyCart from "../components/Cart Components/MyEmptyCart";

function ShoppingCartPage() {
  return (
    <div>
      {/* <MyEmptyCart></MyEmptyCart> */}
      <MyCartItems></MyCartItems>
    </div>
  );
}
export default ShoppingCartPage;
