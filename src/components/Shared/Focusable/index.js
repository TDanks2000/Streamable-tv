import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Focusable = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const setFocus = (type) => {
    console.log("test");
    setIsFocused(type);
  };

  return (
    <TouchableOpacity
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Focusable;
