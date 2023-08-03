import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
        <Pressable
          onPress={() => navigation.navigate("Notification")}
          size={25}
        >
          <View>
            <Ionicons color={Colors.disable} size={25} name="notifications" />
            {1 > 0 && (
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderRadius: 14,
                  backgroundColor: Colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: -4,
                  right: -6,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: Colors.active,
                  }}
                >
                  {5}
                </Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
