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

export default function PayMethod() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("BuyBitcoin")}>
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
              source={require("../assets/image/payment.png")}
              style={{
                resizeMode: "stretch",
                height: height / 3,
                width: width / 1.5,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={[style.title, { textAlign: "center" }]}>
              You Don’t Have any Payment Method
            </Text>
            <Text style={[style.txt, { textAlign: "center", marginTop: 10 }]}>
              Add a payment method to start the trading
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
              onPress={() => navigation.navigate("PayMethodOption")}
            >
              <Text style={[style.btntxt]}>Add Payment Method</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
