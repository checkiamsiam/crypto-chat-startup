import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function BuyBitcoin() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          title="Buy Bitcoin"
          titleStyle={{ color: Colors.active }}
          centerTitle={true}
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Coindetail")}>
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
            <View
              style={{
                // paddingVertical:20,
                backgroundColor: Colors.secondary,
                borderRadius: 15,
                height: height / 6,
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../assets/image/dollar.png")}
                  style={{
                    resizeMode: "stretch",
                    height: height / 14,
                    width: width / 6,
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text
                      style={[
                        style.txt1,
                        { fontSize: 20, fontFamily: "Poppins-Bold" },
                      ]}
                    >
                      US Dollar
                    </Text>
                  </View>
                  <Text style={[style.txt]}>USD</Text>
                </View>
              </View>
              <View style={{ alignItems: "center", marginTop: -20 }}>
                <TextInput
                  placeholder="$35,641.20"
                  placeholderTextColor={Colors.active}
                  keyboardType="phone-pad"
                  selectionColor={Colors.primary}
                  style={[style.input, { fontSize: 22 }]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 1,
                  backgroundColor: Colors.disable,
                  width: 100,
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Pricealert")}
              >
                <Image
                  source={require("../assets/image/Data.png")}
                  style={{
                    resizeMode: "stretch",
                    height: height / 11,
                    width: width / 4.5,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  backgroundColor: Colors.disable,
                  width: 100,
                }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                // paddingVertical:20,
                backgroundColor: Colors.secondary,
                borderRadius: 15,
                height: height / 6,
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../assets/image/Coin.png")}
                  style={{
                    resizeMode: "stretch",
                    height: height / 14,
                    width: width / 6,
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text
                      style={[
                        style.txt1,
                        { fontSize: 20, fontFamily: "Poppins-Bold" },
                      ]}
                    >
                      Bitcoin
                    </Text>
                  </View>
                  <Text style={[style.txt]}>BTC</Text>
                </View>
              </View>
              <View style={{ alignItems: "center", marginTop: -20 }}>
                <TextInput
                  placeholder="0.07423285"
                  placeholderTextColor={Colors.active}
                  keyboardType="phone-pad"
                  selectionColor={Colors.primary}
                  style={[style.input, { fontSize: 22 }]}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
              A/C Balance: $58,351
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                backgroundColor: "#58BD7D",
                borderRadius: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={[style.btntxt]}>Add Funds</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 30, paddingBottom: 20 }}>
            <TouchableOpacity
              style={[
                style.btn,
                {
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                },
              ]}
              onPress={() => navigation.navigate("PayMethod")}
            >
              <Text style={[style.btntxt]}>Buy BTC</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
