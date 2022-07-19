import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Button, Typography } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://s1.1zoom.me/b5050/558/Hamburger_Fast_food_Buns_Closeup_595677_1920x1080.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://s1.1zoom.me/b4964/736/Pancake_Sour_cream_Three_3_570468_1920x1080.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://s1.1zoom.me/b5050/794/Cheese_Pasta_Plate_571950_1920x1080.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://s1.1zoom.me/big0/620/Bread_Cheese_Tomatoes_Sandwich_Gray_background_609230_1280x853.jpg",
  },
];

function MyImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    maxHeight: "80vh",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    backgroundImage: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
        <Box
          sx={{
            position: "absolute",
            left: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={"white"}
            fontStyle={"oblique"}
            fontFamily={"serif"}
          >
            The meal kit that puts quality first
          </Typography>
          <Button variant="contained" size="large">
            show more
          </Button>
        </Box>
      </Box>
      {/* caption */}
    </Box>
  );
}

export default MyImageSlider;
