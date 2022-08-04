import { Box, Container, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import React from "react";
import { Button } from "@mui/material";
import MyCard from "../components/HomeComponents/MyCard";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function MyMenuPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Paper variant={"outlined"} square>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ mr: 2 }}
            color="primary"
            variant="h5"
            fontWeight={"bold"}
          >
            Meals
          </Typography>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="search" />}
            sx={{ py: 2 }}
            fullWidth
          />
          <Button variant="contained" size="large" sx={{ ml: 2 }}>
            Go
          </Button>
        </Container>
      </Paper>
      <Grid>
        <Grid item sx={{ my: 2 }} width={{ lg: "20%" }}>
          <Container>
            <Accordion square>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontWeight={"bold"}>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="lamb"
                      control={<Radio />}
                      label="Lamb"
                    />
                    <FormControlLabel
                      value="fish"
                      control={<Radio />}
                      label="Fish"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion square>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontWeight={"bold"}>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="lamb"
                      control={<Radio />}
                      label="Lamb"
                    />
                    <FormControlLabel
                      value="fish"
                      control={<Radio />}
                      label="Fish"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ flexGrow: 1, mt: "40px" }}
              my={8}
            >
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>{" "}
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>{" "}
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>{" "}
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>{" "}
              <Grid item lg={4}>
                <MyCard></MyCard>
              </Grid>{" "}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyMenuPage;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
