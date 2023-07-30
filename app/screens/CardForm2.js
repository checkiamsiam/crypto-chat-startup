import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function CardForm2() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={style.main}>
          <AppBar
            color={Colors.bg}
            title="Send TACoin"
            titleStyle={[style.subtitle]}
            centerTitle={true}
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("PaymentSuccess")}
              >
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
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
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
                <Text style={[style.subtxt]}>TAC</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text style={[style.txt1, { fontFamily: "Poppins-Bold" }]}>
                  $10000.0
                </Text>
                <Text style={[style.subtxt, { color: "#41BA63" }]}>3.54%</Text>
              </View>
            </View>

            <View style={style.divider} />

            <View
              style={{
                flexDirection: "row",
                marginRight: 40,
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <Text style={[style.subtitle1, { fontSize: 26 }]}>USD</Text>
              <Text style={style.logintitle}>$ 10</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={[style.divider, { flex: 1 }]} />
              <View style={{ marginLeft: 5 }} />
              <Icon name="repeat-sharp" size={30} color={Colors.active} />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginRight: 40,
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text style={[style.subtitle1, { fontSize: 26 }]}>TAC</Text>
              <Text style={[style.logintitle, { color: Colors.disable }]}>
                0.01
              </Text>
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  borderRadius: 25,
                  marginTop: 30,
                  backgroundColor: Colors.secondary,
                  borderColor: Colors.border,
                },
              ]}
            >
              <TextInput
                placeholder="Paste Address"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  {
                    paddingHorizontal: 10,
                    color: Colors.active,
                    flex: 1,
                    fontFamily: "Poppins-Regular",
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ReceiveCrypto")}
                style={{ marginRight: 10 }}
              >
                <Icon name="qr-code" color={Colors.disable} size={25} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("BottomNavigator")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
