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

export default function ReceiveCrypto() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          title="Receive TAC"
          titleStyle={{ color: Colors.active }}
          centerTitle={true}
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("CardForm2")}>
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
          <View style={{ paddingTop: 10 }}>
            <Image
              source={require("../assets/image/QRcode.png")}
              style={{
                resizeMode: "stretch",
                height: height / 4,
                width: width / 1.8,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={[style.title, { textAlign: "center" }]}>
              Your TAC Address
            </Text>
            <Text style={[style.txt, { textAlign: "center", marginTop: 10 }]}>
              sf98qs6f928f01wjidiqsu0a9ycs0q8yd91twowhOCYA
            </Text>
          </View>
          <View style={{ paddingTop: 20, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: 15,
                backgroundColor: "#F2F2F7",
                borderRadius: 25,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Icon name="content-copy" color={Colors.disable} size={20} />
              <Text style={[style.txt1, { marginHorizontal: 10 }]}>Copy</Text>
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 10 }} />
            <TouchableOpacity
              style={{
                flex: 1,
                paddingVertical: 15,
                backgroundColor: "#F2F2F7",
                borderRadius: 25,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Icon name="upload-outline" color={Colors.disable} size={20} />
              <Text style={[style.txt1, { marginHorizontal: 10 }]}>Share</Text>
            </TouchableOpacity>
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
              onPress={() => navigation.navigate("Refer")}
            >
              <Text style={[style.btntxt]}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
