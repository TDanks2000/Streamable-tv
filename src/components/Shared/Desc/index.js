import React, { useState } from "react";
import {
  DescriptionModel,
  DescriptionText,
  DescriptionView,
} from "./Description.styles";
import { View } from "react-native";

const Description = ({ desc, isMobile }) => {
  const [expand, setExpand] = useState(false);
  return (
    <View>
      <DescriptionView
        onPress={() => setExpand((prev) => !prev)}
        expand={expand}
      >
        <DescriptionText
          numberOfLines={expand === false ? 5 : 0}
          isMobile={isMobile}
        >
          {desc}
        </DescriptionText>
      </DescriptionView>
    </View>
  );
};

export default Description;
