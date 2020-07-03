import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CategoryProvider } from "./service/categoryContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import "./App.css";

const Home = lazy(() => import("./pages/home"));

const theme = createMuiTheme({
  typography: {
    fontFamily: "Courier New",
  },
});

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <CategoryProvider>
      <ThemeProvider theme={theme}>
        <Suspense
          fallback={
            <Loading>
              <CircularProgress size={100} />
            </Loading>
          }
        >
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route component={Home} />
            </Switch>
          </Router>
        </Suspense>
      </ThemeProvider>
    </CategoryProvider>
  );
}

export default App;
