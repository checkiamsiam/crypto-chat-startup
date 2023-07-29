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
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Success() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 50 }}>
            <Image
              source={require("../assets/image/success.png")}
              style={{
                resizeMode: "stretch",
                height: height / 6.5,
                width: width / 3,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={[style.title, { textAlign: "center" }]}>
              Exchange Complete
            </Text>
            <Text style={[style.txt, { textAlign: "center", marginTop: 10 }]}>
              Your exchange has been completed. You exchanged $16,641.20 BTC to
              ETH.
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Image
              source={require("../assets/image/chart1.png")}
              style={{
                resizeMode: "stretch",
                height: height / 4,
                width: width / 1.2,
                alignSelf: "center",
              }}
            />
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
              onPress={() => navigation.navigate("BottomNavigator")}
            >
              <Text style={[style.btntxt]}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
