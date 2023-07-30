import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { Colors } from "../theme/color";
import style from "../theme/style";

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
          { color: Colors.primary, fontFamily: "Poppins-Bold" },
        ]}
      >
        Crypto Pay
      </Text>
    </SafeAreaView>
  );
}
