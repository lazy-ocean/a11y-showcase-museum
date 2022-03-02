import React from "react";
import { Header, Container } from "./Main.styled";

const Main = () => {
  return (
    <main>
      <Container>
        <Header>go build something awesome</Header>
        <img
          src="https://c.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif"
          alt="cat typing"
        />
      </Container>
    </main>
  );
};

export default Main;
