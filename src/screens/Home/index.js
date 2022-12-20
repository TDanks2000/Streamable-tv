import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Recent, Trending } from "../../containers";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <Trending type="movies" />
      <Trending type="tv" />
      <Recent type={"movies"} />
      <Recent type={"tv"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
