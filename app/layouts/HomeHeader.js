import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Image
          source={require("../assets/image/image.png")}
          resizeMode="stretch"
          style={{ width: width / 9, height: height / 20 }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "Poppins-Regular",
              color: Colors.active,
            }}
          >
            Smith Rollins
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <Image
          source={require("../assets/image/Notifications.png")}
          resizeMode="stretch"
          style={{ width: width / 9.5, height: height / 20.5 }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
