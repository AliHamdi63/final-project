import React from "react";
import MyBrief from "../components/HomeComponents/MyBrief";
import MyImageSlider from "../components/HomeComponents/MyImageSlider";

function MyHomePage() {
  return (
    <div>
      <MyImageSlider></MyImageSlider>
      {/* <MyText></MyText> */}
      <MyBrief></MyBrief>
    </div>
  );
}

export default MyHomePage;
