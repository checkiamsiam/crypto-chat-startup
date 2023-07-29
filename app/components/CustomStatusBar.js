import React from "react";
import { StatusBar } from "react-native";

const CustomStatusBar = () => {
  return (
    <>
      <StatusBar
        translucent
        animated
        backgroundColor="#F5F5F5"
        barStyle={"dark-content"}
      />
    </>
  );
};

export default CustomStatusBar;
