import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppBar } from "@react-native-material/core";
import PhoneInput from "react-native-phone-number-input";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Step2() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);
  return (
    <SafeAreaView style={[style.area]}>
      <View style={[style.main]}>
        <AppBar
          color={Colors.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Secured")}>
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
            <Text style={[style.title]}>Set up 2-step verification</Text>
            <Text style={[style.txt, { paddingTop: 10 }]}>
              Enter your phone number so we can send you the verification code
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={[style.txt, { color: Colors.primary, marginLeft: 15 }]}
            >
              Phone Number
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <PhoneInput
              textInputStyle={{
                color: Colors.active,
              }}
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="IN"
              layout="first"
              withShadow
              autoFocus
              selectionColor={Colors.primary}
              containerStyle={{
                height: 55,
                width: "100%",
                borderColor: Colors.primary,
                borderRadius: 10,
                borderWidth: 1,
              }}
              textContainerStyle={{
                paddingVertical: 0,
                borderRadius: 10,
              }}
              onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
            />
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
              onPress={() => navigation.navigate("Code")}
            >
              <Text style={[style.btntxt]}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
