import { AppBar } from "@react-native-material/core";
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
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Coindetail() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <AppBar
          color={Colors.bg}
          title="Ethereum"
          titleStyle={[style.subtitle]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Portfolio")}>
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: Colors.secondary }}
                color={Colors.active}
                size={40}
              />
            </TouchableOpacity>
          }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={{ marginVertical: 20 }}>
            <View style={{}}>
              <ImageBackground
                source={require("../assets/image/Card3.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4.5,
                  paddingHorizontal: 20,
                  width: width - 40,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../assets/image/Coin1.png")}
                      resizeMode="stretch"
                      style={{ width: width / 7.5, height: height / 17 }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={style.txt}>Ethereum Price</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#58BD7D",
                        borderRadius: 20,
                        paddingVertical: 4,
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
                        +20%
                      </Text>
                    </View>
                    <Text
                      style={[
                        style.subtxt,
                        { color: "#58BD7D", textAlign: "center", marginTop: 5 },
                      ]}
                    >
                      +0.9%
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.title]}>$28,312.16</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Text style={style.subtxt}>High:</Text>
                  <Text style={[style.subtxt, { color: "#58BD7D" }]}>
                    {" "}
                    $40,437
                  </Text>
                  <View style={{ padding: 10 }} />
                  <Text style={style.subtxt}>Low:</Text>
                  <Text style={[style.subtxt, { color: "#E8503A" }]}>
                    {" "}
                    $12,367
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.secondary,
              borderRadius: 30,
              paddingVertical: 20,
            }}
          >
            <Text style={[style.subtxt, { marginHorizontal: 20 }]}>
              Ethereum (ETH)
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
                <Text style={style.logintitle}>$28,312.16</Text>
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
                  0.9%
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image
                source={require("../assets/image/Chart2.png")}
                resizeMode="stretch"
                style={{ height: height / 4, width: width - 80 }}
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
              <Text style={style.txt}>24H</Text>
              <Text style={style.txt1}>1W</Text>
              <Text style={style.txt}>1Y</Text>
              <Text style={style.txt}>5Y</Text>
              <Text style={style.txt}>All</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 30, marginBottom: 20 }}
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
                onPress={() => navigation.navigate("")}
                style={[style.btn, { backgroundColor: Colors.active }]}
              >
                <Text style={style.btntxt}>Sell</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
