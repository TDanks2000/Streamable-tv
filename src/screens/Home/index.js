import React from "react";
import { Recent, Trending } from "../../containers";
import { Container, ScrollView } from "../screen.styles";

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView vertical={true}>
        <Trending type="movies" />
        <Trending type="tv" />
        <Recent type={"movies"} />
        <Recent type={"tv"} />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
