import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Pricealert() {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [ison, setIsOn] = useState(true);
  const toggle = () => setIsOn((previousState) => !previousState);

  const [ison1, setIsOn1] = useState(true);
  const toggle1 = () => setIsOn1((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isoff, setIsOff] = useState(false);
  const tog = () => setIsOff((previousState) => !previousState);

  const [isoff1, setIsOff1] = useState(false);
  const tog1 = () => setIsOff1((previousState) => !previousState);

  const [isoff2, setIsOff2] = useState(false);
  const tog2 = () => setIsOff2((previousState) => !previousState);

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <AppBar
          color={Colors.bg}
          title="Price Alert"
          titleStyle={[style.subtitle]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("BuyBitcoin")}>
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: Colors.secondary }}
                color={Colors.active}
                size={40}
              />
            </TouchableOpacity>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: Colors.secondary,
              padding: 10,
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10,
                marginBottom: 5,
              }}
            >
              <Image
                source={require("../assets/image/Coin.png")}
                resizeMode="stretch"
                style={{ width: width / 8, height: height / 18 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[style.txt1]}>Bitcoin</Text>
                  <Text style={[style.subtxt]}>(BTC)</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  backgroundColor: "#58BD7D",
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={[
                    style.subtxt,
                    { fontFamily: "Poppins-Bold", color: Colors.secondary },
                  ]}
                >
                  Add New
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/up.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Above $ 82,000</Text>
                <Text style={[style.subtxt]}>30 mins ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={isEnabled ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <View style={[style.divider, { marginHorizontal: 15 }]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/up.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Above $52,000</Text>
                <Text style={[style.subtxt]}>2 hour ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={ison ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
              </View>
            </View>

            <View style={[style.divider, { marginHorizontal: 15 }]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/down.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Below $26,000</Text>
                <Text style={[style.subtxt]}>11 hours ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={isEnabled1 ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.secondary,
              padding: 10,
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
                marginBottom: 5,
              }}
            >
              <Image
                source={require("../assets/image/Coin1.png")}
                resizeMode="stretch"
                style={{ width: width / 8, height: height / 18 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[style.txt1]}>Ethereum</Text>
                  <Text style={[style.subtxt]}>(ETH)</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  backgroundColor: "#58BD7D",
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={[
                    style.subtxt,
                    { fontFamily: "Poppins-Bold", color: Colors.secondary },
                  ]}
                >
                  Add New
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/up.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Above $ 82,000</Text>
                <Text style={[style.subtxt]}>1 Hour ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={ison1 ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
              </View>
            </View>

            <View style={[style.divider, { marginHorizontal: 15 }]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/down.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Below $52,000</Text>
                <Text style={[style.subtxt]}>3 hour ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={isoff ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog}
                  value={isoff}
                />
              </View>
            </View>

            <View style={[style.divider, { marginHorizontal: 15 }]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/down.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Below $26,000</Text>
                <Text style={[style.subtxt]}>12 hours ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={isoff1 ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog1}
                  value={isoff1}
                />
              </View>
            </View>

            <View style={[style.divider, { marginHorizontal: 15 }]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/image/down.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              />
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt1]}>Below $12,000</Text>
                <Text style={[style.subtxt]}>1 day ago</Text>
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-end" }}
              >
                <Switch
                  trackColor={{ false: "#FFE0BB", true: Colors.primary }}
                  thumbColor={isoff2 ? Colors.secondary : Colors.secondary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog2}
                  value={isoff2}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
