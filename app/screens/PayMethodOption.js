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

export default function PayMethodOption() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          title="Payment Method"
          titleStyle={{ color: Colors.active }}
          centerTitle={true}
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("PayMethod")}>
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
          <View style={{ paddingTop: 20, flexDirection: "row" }}>
            <Image
              source={require("../assets/image/paypal.png")}
              style={{
                resizeMode: "stretch",
                height: height / 18,
                width: width / 8,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={[style.subtitle]}>Credit/Debit Card</Text>
              <Text style={[style.txt, { width: width / 1.5, marginTop: 10 }]}>
                Use any visa or mastercard to start invesments
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", flex: 1 }}>
              <Icon name="chevron-right" color={Colors.active} size={30} />
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#E5E5EA",
              width: width,
              marginVertical: 10,
            }}
          />
          <View style={{ paddingTop: 20, flexDirection: "row" }}>
            <Image
              source={require("../assets/image/paypal.png")}
              style={{
                resizeMode: "stretch",
                height: height / 18,
                width: width / 8,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={[style.subtitle]}>Paypal</Text>
              <Text style={[style.txt, { width: width / 1.5, marginTop: 10 }]}>
                Use Paypal as payment method to start invesments
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", flex: 1 }}>
              <Icon name="chevron-right" color={Colors.active} size={30} />
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#E5E5EA",
              width: width,
            }}
          />
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("CardForm")}>
              <View
                style={[
                  style.btn,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                  },
                ]}
              >
                <Text style={[style.btntxt, { color: Colors.primary }]}>
                  Add Another Method
                </Text>
                <Icon name="plus" color={Colors.primary} size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
