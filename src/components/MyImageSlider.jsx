import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import "../styles/slider.css";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function MyImageSlider() {
  return (
    <Box sx={{ width: "100", height: 100 }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          autoplay
        >
          <Box
            sx={{ bgcolor: "red", width: "20%", height: "20%" }}
            className="zas"
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
          </Box>
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            // top: "50%",
            zIndex: 99,
            // left: "50%",
            // transform: "translate(50%,-50%)",
          }}
        >
          <Typography
            variant="h2"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
            color={"white"}
            sx={{
              textShadow: "10px 5px 4px black",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            The meal kit that puts quality first{" "}
          </Typography>
          <Button variant={"contained"} size="large" sx={{ borderRadius: 6 }}>
            {" "}
            <Typography variant="h6">Start Now</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MyImageSlider;
