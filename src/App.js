import React, { useState } from "react";
import MyAppBar from "./components/layout/MyAppBar";

// Import MUI colors
import { deepOrange, teal } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackToTop from "./components/layout/MyBackToTheTop";
import MyHomePage from "./pages/MyHomePage";
import Footer from "./components/layout/Footer";
import MyAboutPage from "./pages/MyAboutPage";
import MyContactPage from "./pages/MyContactPage";
import MyMenuPage from "./pages/MyMenuPage";
import MyMarketPage from "./pages/MyMarketPage";
import MyLogInPage from "./pages/MyLogInPage";
import MyRegisterPage from "./pages/MyRegisterPage";
import MealPurchasePage from "./pages/MealPurchasePage";

// Define theme settings

const light = {
  palette: {
    mode: "light",
    primary: {
      main: teal[700],
      light: teal[400],
      dark: teal[800],
    },
    secondary: {
      main: deepOrange[500],
      light: deepOrange[300],
      dark: deepOrange[700],
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: teal[200],
      light: teal[50],
      dark: teal[400],
    },
    secondary: {
      main: deepOrange[200],
      light: deepOrange[50],
      dark: deepOrange[400],
    },
  },
};

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <div className="App">
        <BackToTop></BackToTop>
        <MyAppBar
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
        ></MyAppBar>
        {/* here is our pages */}
        <Routes>
          <Route index element={<MyHomePage />}></Route>
          <Route path="Home" element={<MyHomePage />} />
          <Route path="About" element={<MyAboutPage />} />
          <Route
            path="Contact"
            element={
              <MyContactPage
                setIsDarkTheme={setIsDarkTheme}
                isDarkTheme={isDarkTheme}
              />
            }
          />
          <Route path="Menu" element={<MyMenuPage />} />
          <Route path="Market" element={<MyMarketPage />} />
          <Route path="LogIn" element={<MyLogInPage />} />
          <Route path="Register" element={<MyRegisterPage />} />
          <Route path="Meal" element={<MealPurchasePage />} />
        </Routes>
        <Footer
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
        ></Footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
