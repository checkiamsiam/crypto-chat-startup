import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Secured() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: Colors.secondary }}
                color="black"
                size={40}
              />
            </TouchableOpacity>
          }
        />
        <View style={{ paddingTop: 30 }}>
          <Image
            source={require("../assets/image/secured.png")}
            style={{
              resizeMode: "stretch",
              height: height / 4,
              width: width / 1.2,
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={[style.title, { textAlign: "center" }]}>
            Secure your account
          </Text>
          <Text style={[style.txt, { textAlign: "center", paddingTop: 10 }]}>
            One way keep account secure with 2-step verification, which requires
            phone number.
          </Text>
        </View>
        <View style={{ paddingTop: 70, paddingBottom: 20 }}>
          <TouchableOpacity
            style={[
              style.btn,
              {
                alignItems: "center",
                backgroundColor: Colors.primary,
              },
            ]}
            onPress={() => navigation.navigate("Step2")}
          >
            <Text style={[style.btntxt]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
