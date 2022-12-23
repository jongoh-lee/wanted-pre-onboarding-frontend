import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthProvider from "./components/auth/auth";
import Header from "./components/Header";
import { CenterBox } from "./components/shared";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  console.log("rendered main");
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Header />
        <CenterBox>
          <Outlet />
        </CenterBox>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
