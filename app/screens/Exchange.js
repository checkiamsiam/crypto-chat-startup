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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Exchange() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          title="Exchange"
          titleStyle={{ color: Colors.active }}
          centerTitle={true}
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Portfolio")}>
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
                    <Icon name="chevron-down" color={Colors.active} size={25} />
                  </View>
                  <Text style={[style.txt]}>BTC</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      backgroundColor: "#FF6838",
                      paddingVertical: 5,
                      borderRadius: 15,
                    }}
                  >
                    <Text style={[style.btntxt]}>-0.79</Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", marginTop: -20 }}>
                <TextInput
                  placeholder="$16,641.20"
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
                onPress={() => navigation.navigate("Markettrends")}
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
                  source={require("../assets/image/Coin1.png")}
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
                      Ethereum
                    </Text>
                    <Icon name="chevron-down" color={Colors.active} size={25} />
                  </View>
                  <Text style={[style.txt]}>ETH</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      backgroundColor: "#58BD7D",
                      paddingVertical: 5,
                      borderRadius: 15,
                    }}
                  >
                    <Text style={[style.btntxt]}>+1.32</Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", marginTop: -20 }}>
                <TextInput
                  placeholder="$28,312.63"
                  placeholderTextColor={Colors.active}
                  keyboardType="phone-pad"
                  selectionColor={Colors.primary}
                  style={[style.input, { fontSize: 22 }]}
                />
              </View>
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
                onPress={() => navigation.navigate("Success")}
              >
                <Text style={[style.btntxt]}>Exchange</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
