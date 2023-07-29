import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Refer() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          title="Refer & Earn"
          titleStyle={{ color: Colors.active }}
          centerTitle={true}
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: Colors.secondary }}
                color="black"
                size={40}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 20 }}>
            <Image
              source={require("../assets/image/refer.png")}
              style={{
                resizeMode: "stretch",
                height: height / 4,
                width: width / 1.8,
                alignSelf: "center",
              }}
            />
            <Text style={[style.title, { textAlign: "center", marginTop: 20 }]}>
              Refer and Earn
            </Text>
            <Text style={[style.txt, { textAlign: "center", marginTop: 10 }]}>
              Share this code with your friend and both of you will get $12.
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <TouchableOpacity
              style={[
                style.btn,
                {
                  alignItems: "center",
                  backgroundColor: "#BBE4FF",
                  borderStyle: "dashed",
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 15,
                },
              ]}
              // onPress={goNextSlide}
            >
              <Text style={[style.txt1]}>GTYCDO1254</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: Colors.secondary,
                    width: 1,
                  }}
                />
                <Icon
                  name="content-copy"
                  color={Colors.primary}
                  size={20}
                  style={{ marginHorizontal: 10 }}
                />
                <Text style={[style.txt, { color: Colors.primary }]}>
                  CopyCode
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <TouchableOpacity
              style={[
                style.btn,
                {
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                },
              ]}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={[style.btntxt]}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
