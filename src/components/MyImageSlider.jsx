import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import "../styles/slider.css";

function MyImageSlider() {
  return (
    <Box sx={{ width: "100", height: 100 }}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          {" "}
          <img
            src="https://s1.1zoom.me/b5050/558/Hamburger_Fast_food_Buns_Closeup_595677_1920x1080.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s1.1zoom.me/b4964/736/Pancake_Sour_cream_Three_3_570468_1920x1080.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s1.1zoom.me/big0/620/Bread_Cheese_Tomatoes_Sandwich_Gray_background_609230_1280x853.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default MyImageSlider;
