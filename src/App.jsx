import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Header from "./common/header";
import Footer from "./common/footer";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />

          <Redirect to="/"></Redirect>
        </Switch>
      </main>
      <Footer />
    </AppContainer>
  );
};

export default App;
