import React, { useCallback } from "react";

import {
  CardBackground,
  CardContainer,
  CardContent,
  CardTitle,
} from "./Card.styles";
import { useNavigation } from "@react-navigation/native";
import { Focusable } from "../";

const Card = (props) => {
  const { image, type, title, index, url } = props;
  const navigation = useNavigation();

  // const handlePress = (event) => {
  //   navigation.navigate("Info", { id: props?.media?.id || props?.id });
  // };

  return (
    <CardContainer index={index}>
      <Focusable>
        <CardBackground source={{ uri: image }}>
          <CardContent>
            <CardTitle numberOfLines={2} ellipsizeMode={"tail"}>
              {title}
            </CardTitle>
          </CardContent>
        </CardBackground>
      </Focusable>
    </CardContainer>
  );
};

export default Card;
