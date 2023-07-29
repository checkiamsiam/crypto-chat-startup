import { View, Text, Dimensions, SafeAreaView } from "react-native";
import React, { useState } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Splash() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        style.area,
        {
          backgroundColor: Colors.bg,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Text
        style={[
          style.title,
          { color: Colors.primary, fontFamily: "Tinos-Bold" },
        ]}
      >
        Crypto Pay
      </Text>
    </SafeAreaView>
  );
}
