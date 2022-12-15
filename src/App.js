import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
