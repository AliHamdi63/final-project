import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Icon,
  IconButton,
} from "@mui/material";
import SeaFodIcon from "@mui/icons-material/SetMeal";
import VeganFoodIcon from "@mui/icons-material/Spa";
import KitchenIcon from "@mui/icons-material/Countertops";
import AddToCart from "@mui/icons-material/AddShoppingCart";
import TimerIcon from "@mui/icons-material/Timer";
export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://media.blueapron.com/recipes/33099/square_newsletter_images/1656624414-43-0005-9008/1004_2P21-Sweet-Chili-Glazed-Pork_173_SQ_Web.jpg?quality=80&width=850"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color={"primary"}
            fontFamily="serif"
          >
            Miso-Sesame Chicken
          </Typography>
          <Typography variant="body2" color="text.secondary">
            with Brown Rice & Vegetables
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Chip
                color="primary"
                size="small"
                label="vegan-food"
                icon={<VeganFoodIcon />}
              />
              <Chip
                color="secondary"
                size="small"
                label="american"
                icon={<KitchenIcon />}
              />
            </Box>
            <Typography
              variant="h5"
              color="primary.light"
              sx={{ display: "flex", alignItems: "center", gap: 0.0 }}
            >
              <TimerIcon></TimerIcon>
              <Typography varient="caption" textAlign={"center"}>
                {" "}
                90 min
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">300 EGP</Typography>
        <IconButton aria-label="delete" size="large">
          <AddToCart fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
