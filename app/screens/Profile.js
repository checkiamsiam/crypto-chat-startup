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
import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ScreenHeader from "../layouts/ScreenHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <ScreenHeader backScreen="Home" title="Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 10 }}>
            <Image
              source={require("../assets/image/image.png")}
              style={{
                resizeMode: "stretch",
                height: height / 6.5,
                width: width / 3,
                alignSelf: "center",
              }}
            />
            <Text style={[style.title, { textAlign: "center", marginTop: 15 }]}>
              Smith Rollins
            </Text>
            <Text style={[style.txt, { textAlign: "center" }]}>
              smithrollins05@gmail.com
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.primary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Icon
                icon="gift"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.btntxt, { fontFamily: "Tinos-Bold" }]}>
                  Invite Friends
                </Text>
                <Text style={[style.btntxt]}>
                  Invite your friends and get $12
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon name="chevron-right" color={Colors.secondary} size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Account")}
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Icon
                icon="account"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  Account
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon name="chevron-right" color="#9EA3AE" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Portfolio")}
            >
              <Avatar.Icon
                icon="wallet"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  Portfolio
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Icon name="chevron-right" color="#9EA3AE" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Icon
                icon="credit-card"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  Billing/Payment
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon name="chevron-right" color="#9EA3AE" size={30} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Icon
                icon="cog-outline"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  Settings
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon name="chevron-right" color="#9EA3AE" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                paddingHorizontal: 10,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Icon
                icon="help"
                style={{ backgroundColor: "#A3DAFE" }}
                color={Colors.primary}
                size={40}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  FAQ
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon name="chevron-right" color="#9EA3AE" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 30, marginBottom: 70 }}>
            <TouchableOpacity
              style={[
                style.btn,
                {
                  alignItems: "center",
                  backgroundColor: Colors.active,
                  flexDirection: "row",
                  justifyContent: "center",
                },
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Icons name="log-out-outline" color="#9EA3AE" size={30} />
              <Text
                style={[
                  style.btntxt,
                  { fontFamily: "Tinos-Bold", marginHorizontal: 10 },
                ]}
              >
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
