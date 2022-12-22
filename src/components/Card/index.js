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
  let { image, type, media_type, title, index, url, poster_path } = props;
  const navigation = useNavigation();
  const actualType = utils.getType(media_type || type);

  const handlePress = async (event) => {
    const data = await api.findMatchFromTitle(title, actualType);

    navigation.navigate("Info", {
      id: data?.id,
      type: actualType,
    });
  };

  image =
    poster_path !== undefined ? utils.getPosterUrl(poster_path, "w342") : image;

  return (
    <CardContainer index={index} focusable={true}>
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
