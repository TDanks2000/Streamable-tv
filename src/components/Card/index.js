import React, { useCallback } from "react";

import {
  CardBackground,
  CardContainer,
  CardContent,
  CardTitle,
} from "./Card.styles";
import { useNavigation } from "@react-navigation/native";
import { Focusable } from "../";
import { api, utils } from "../../utils";

const Card = (props) => {
  let { image, type, title, index, url, poster_path } = props;
  const navigation = useNavigation();

  const handlePress = async (event) => {
    const data = await api.findMatchFromTitle(title, type);

    navigation.navigate("Info", { id: data?.id, type: utils.getType(type) });
  };

  image =
    poster_path !== undefined
      ? utils.getPosterUrl(poster_path, "original")
      : image;

  console.log({ image, poster_path });
  return (
    <CardContainer index={index}>
      <Focusable onPress={handlePress}>
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
