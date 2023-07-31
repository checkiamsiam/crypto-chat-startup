import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const PersonalChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ContractScreeen")}
        >
          <Avatar.Icon
            icon="arrow-left"
            style={{ backgroundColor: Colors.secondary }}
            color={Colors.active}
            size={40}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/image/image.png")}
          resizeMode="stretch"
          style={{ width: width / 9, height: height / 20 }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Bold",
              color: Colors.active,
            }}
          >
            Smith Rollins
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              color: Colors.disable,
            }}
          >
            online
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity>
            <Ionicons name={"call"} size={25} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={"videocam"} size={25} color={Colors.disable} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={"information-circle-sharp"}
              size={25}
              color={Colors.disable}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonalChatHeader;
