import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthProvider from "./components/auth/auth";
import Header from "./components/Header";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  console.log("rendered main");
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
