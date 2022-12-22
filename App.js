import { StatusBar } from "expo-status-bar";
import AppStack from "./src/navigation/AppStack";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./src/assets/theme/default";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import { useEffect, useState } from "react";
import { Platform, TVEventHandler, useTVEventHandler } from "react-native";

const App = () => {
  const [lastEventType, setLastEventType] = useState("");
  const myTVEventHandler = (evt) => {
    setLastEventType(evt.eventType);
  };
  useTVEventHandler(myTVEventHandler);

  const [hiddenStatusBar, setHiddenStatusBar] = useState(false);

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={DefaultTheme}>
      <StatusBar style={"light"} hidden={hiddenStatusBar} />
      <AppStack
        setHiddenStatusBar={setHiddenStatusBar}
        hiddenStatusBar={hiddenStatusBar}
      />
    </ThemeProvider>
  );
};

export default App;
