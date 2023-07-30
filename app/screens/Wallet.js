import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import HomeHeader from "../layouts/HomeHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Wallet() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <HomeHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={{ marginTop: 10 }}>
            <View>
              <ImageBackground
                source={require("../assets/image/Card2.png")}
                resizeMode="stretch"
                style={{
                  height: height / 3,
                  paddingHorizontal: 30,
                  width: width - 20,
                  marginLeft: -10,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../assets/image/Coin.png")}
                      resizeMode="stretch"
                      style={{ width: width / 7.5, height: height / 17 }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={style.txt}>Bitcoin</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={[style.txt, { color: Colors.primary }]}>
                      BTC{" "}
                    </Text>
                    <Icon
                      name="chevron-down-sharp"
                      color={Colors.primary}
                      size={20}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.title]}>3.521079</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={style.txt}>$19.283</Text>
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={style.txt}>USD</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#58BD7D",
                      borderRadius: 20,
                      paddingVertical: 5,
                      paddingHorizontal: 7,
                    }}
                  >
                    <Icon
                      name="caret-up-outline"
                      color={Colors.secondary}
                      size={15}
                    />
                    <Text style={[style.subtxt, { color: Colors.secondary }]}>
                      {" "}
                      +17%
                    </Text>
                  </View>
                </View>
                <View style={{ alignSelf: "center", marginTop: -5 }}>
                  <TouchableOpacity>
                    <Avatar.Icon
                      icon="chevron-down"
                      style={{ backgroundColor: "#FFF3E3" }}
                      color={Colors.primary}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>

            <View
              style={{
                backgroundColor: Colors.secondary,
                borderRadius: 30,
                paddingVertical: 20,
              }}
            >
              <Text style={[style.subtxt, { marginHorizontal: 20 }]}>
                Bitcoin (BTC)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  alignItems: "center",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ marginRight: 20 }}>
                  <Text style={style.logintitle}>$43,362.18</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#58BD7D",
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                  }}
                >
                  <Icon name="chevron-up" color={Colors.secondary} size={15} />
                  <Text style={[style.subtxt, { color: Colors.secondary }]}>
                    {" "}
                    3.6%
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  source={require("../assets/image/Chart.png")}
                  resizeMode="contain"
                  style={{ height: height / 4, width: width - 40 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  marginHorizontal: 20,
                }}
              >
                <Text style={style.txt1}>24H</Text>
                <Text style={style.txt}>1W</Text>
                <Text style={style.txt}>1Y</Text>
                <Text style={style.txt}>5Y</Text>
                <Text style={style.txt}>All</Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", marginTop: 30, marginBottom: 70 }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BuyBitcoin")}
                  style={style.btn}
                >
                  <Text style={style.btntxt}>Buy</Text>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 5 }} />
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={[style.btn, { backgroundColor: Colors.active }]}
                >
                  <Text style={style.btntxt}>Sell</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
