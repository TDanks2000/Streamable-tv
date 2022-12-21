import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Focusable = ({ children, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  const setFocus = (type) => {
    console.log("test");
    setIsFocused(type);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Focusable;
