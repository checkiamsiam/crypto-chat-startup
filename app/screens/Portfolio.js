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
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Portfolio() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <AppBar
          color={Colors.bg}
          title="Portfolio"
          titleStyle={[style.subtitle]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity
            // onPress={()=>navigation.navigate('')}
            >
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: Colors.secondary }}
                color={Colors.active}
                size={40}
              />
            </TouchableOpacity>
          }
          trailing={
            <TouchableOpacity>
              <Avatar.Icon
                icon="magnify"
                style={{ backgroundColor: Colors.secondary }}
                color={Colors.active}
                size={40}
              />
            </TouchableOpacity>
          }
        />

        <View
          style={{
            backgroundColor: Colors.secondary,
            padding: 20,
            borderRadius: 20,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Text style={style.txt1}>Portfolio Value</Text>
          <Text style={[style.subtxt, { marginTop: 10 }]}>Feb 28, 2021</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={style.subtitle}>$15,050.13</Text>
            <Text style={[style.txt, { color: "#FF6D3F" }]}>
              $112.20 (+3,1%)
            </Text>
          </View>
        </View>

        <View style={style.inputContainer}>
          <Text
            style={{
              paddingHorizontal: 10,
              color: Colors.active,
              flex: 1,
              fontFamily: "Tinos-Regular",
            }}
          >
            All
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Exchange")}>
            <Icon name="chevron-down" color={Colors.active} size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Coindetail")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin3.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>TACoint</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[style.subtxt]}>TAC</Text>
                <Text
                  style={[
                    style.subtxt,
                    { color: "#41BA63", marginHorizontal: 10 },
                  ]}
                >
                  +3.54%
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
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $100.0
              </Text>
              <Text style={style.subtxt}>0,0018 TAC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Coindetail")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin4.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Ripple</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[style.subtxt]}>RIP</Text>
                <Text
                  style={[
                    style.subtxt,
                    { color: "#ED6666", marginHorizontal: 10 },
                  ]}
                >
                  -1.54%
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
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $14,563.34
              </Text>
              <Text style={style.subtxt}>0,0018 TAC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Coindetail")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Bitcoin</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[style.subtxt]}>BTC</Text>
                <Text
                  style={[
                    style.subtxt,
                    { color: "#41BA63", marginHorizontal: 10 },
                  ]}
                >
                  +3.54%
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
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $36,263.13
              </Text>
              <Text style={style.subtxt}>0,0018 TAC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Coindetail")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin1.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Ethereum</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[style.subtxt]}>RIP</Text>
                <Text
                  style={[
                    style.subtxt,
                    { color: "#ED6666", marginHorizontal: 10 },
                  ]}
                >
                  -1.54%
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
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $14,563.34
              </Text>
              <Text style={style.subtxt}>0,0018 TAC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Coindetail")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin5.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Chainlink</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[style.subtxt]}>CHN</Text>
                <Text
                  style={[
                    style.subtxt,
                    { color: "#41BA63", marginHorizontal: 10 },
                  ]}
                >
                  +3.54%
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
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $13,221.67
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={style.subtxt}>-0.74%</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}