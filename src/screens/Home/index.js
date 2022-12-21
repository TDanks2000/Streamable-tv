import React from "react";
import { Recent, Trending } from "../../containers";
import { Container } from "../screen.styles";

const HomeScreen = () => {
  return (
    <Container>
      <Trending type="movies" />
      <Trending type="tv" />
      <Recent type={"movies"} />
      <Recent type={"tv"} />
    </Container>
  );
};

export default HomeScreen;
