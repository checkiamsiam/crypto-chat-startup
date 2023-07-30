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

export default function Markettrends() {
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
            <TouchableOpacity onPress={() => navigation.navigate("Exchange")}>
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

        <View style={style.inputContainer}>
          <Text
            style={{
              paddingHorizontal: 10,
              color: Colors.active,
              flex: 1,
              fontFamily: "Poppins-Regular",
            }}
          >
            All
          </Text>
          <TouchableOpacity
          // onPress={()=>navigation.navigate('Exchange')}
          >
            <Icon name="chevron-down" color={Colors.active} size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
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
              <Text style={[style.subtitle1]}>Uniswap</Text>
              <Text style={[style.subtxt]}>UNI</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $16,351.57
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>3.7%</Text>
              </View>
            </View>
          </View>

          <View
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
              <Text style={[style.subtxt]}>RIP</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $14,563.34
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>2.5%</Text>
              </View>
            </View>
          </View>

          <View
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
              <Text style={[style.subtxt]}>BTC</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $36,263.13
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>2.4%</Text>
              </View>
            </View>
          </View>

          <View
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
              <Text style={[style.subtxt]}>RIP</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $14,563.34
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>1.71%</Text>
              </View>
            </View>
          </View>

          <View
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
              <Text style={[style.subtxt]}>CHN</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $13,221.67
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-down-sharp" color={"#FF6838"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>-0.74%</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin6.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Neo</Text>
              <Text style={[style.subtxt]}>NEO</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $16,563.19
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>2.5%</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin7.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 19 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle1]}>Achain</Text>
              <Text style={[style.subtxt]}>ACH</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                $12,263.12
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-down-sharp" color={"#FF6838"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>-3.84%</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
