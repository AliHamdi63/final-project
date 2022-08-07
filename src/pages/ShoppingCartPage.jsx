import React from "react";
import MyCartItems from "../components/Cart Components/MyCartItems";
import MyEmptyCart from "../components/Cart Components/MyEmptyCart";
import { useSelector } from "react-redux";

function ShoppingCartPage() {
  let numOfItems = useSelector((state) => state.cart.numOfItems);

  return (
    <div>
      {numOfItems.length == 0 ? <MyEmptyCart></MyEmptyCart> : <MyCartItems></MyCartItems>}


    </div>
  );
}
export default ShoppingCartPage;
