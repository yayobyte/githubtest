import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Search from "./containers/Search";
import CardList from "./containers/CardList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

function App() {
  return (
    <AppContainer>
        <Header />
        <Search />
        <CardList />
    </AppContainer>
  );
}

export default App;
