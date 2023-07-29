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
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function PaymentSuccess() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("CardForm")}>
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
              source={require("../assets/image/paysuccess.png")}
              style={{
                resizeMode: "stretch",
                height: height / 4,
                width: width / 1.2,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ paddingTop: 50 }}>
            <Text style={[style.title, { textAlign: "center" }]}>
              Your Payment are Success
            </Text>
            <Text style={[style.txt, { textAlign: "center", marginTop: 10 }]}>
              Now you already have cryptocurrency in your wallet
            </Text>
          </View>
          <View style={{ paddingTop: 100, paddingBottom: 20 }}>
            <TouchableOpacity
              style={[
                style.btn,
                {
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                },
              ]}
              onPress={() => navigation.navigate("CardForm2")}
            >
              <Text style={[style.btntxt]}>Check My Assets</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
