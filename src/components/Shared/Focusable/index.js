import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Focusable = ({ children, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  const setFocus = (type) => {
    console.log(type);
    setIsFocused(type);
  };

  useEffect(() => {
    // console.log(isFocused);
  }, [isFocused]);

  return (
    <TouchableOpacity
      focusable={true}
      activeOpacity={0.1}
      onPress={onPress}
      onFocus={() => console.log("focused")}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Focusable;
