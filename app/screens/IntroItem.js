import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function IntroItem({ item }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ width: width }}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: Colors.bg,
          justifyContent: "center",
        }}
      >
        <Image
          source={item.img}
          style={{
            resizeMode: "stretch",
            height: height / 4,
            width: width / 1.2,
            alignSelf: "center",
          }}
        />
      </View>
      <View style={[style.main, { backgroundColor: Colors.bg, flex: 0.7 }]}>
        <Text style={[style.title, { textAlign: "center" }]}>
          {item.title1}
        </Text>
        <View style={{ paddingTop: 20 }}>
          <Text
            style={[style.txt, { paddingHorizontal: 20, textAlign: "center" }]}
          >
            {item.subtitle}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
