import Clipboard from "@react-native-clipboard/clipboard";
import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OtpInputs from "react-native-otp-inputs";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import style from "../theme/style";

const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    return (
      <View>
        <Text>An error occurred.</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }
};

export default function Code() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area]}>
      <ErrorBoundary>
        <View style={[style.main]}>
          <AppBar
            color={Colors.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Step2")}>
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
              <Text style={[style.title]}>Enter verification code</Text>
              <Text style={[style.txt, { paddingTop: 10 }]}>
                Enter 4-digit code the we just send to your phone number:
                <Text
                  style={[style.txt, { color: Colors.primary, paddingTop: 10 }]}
                >
                  {"+880 175456446"}
                </Text>
              </Text>
            </View>
            <View style={{ paddingTop: 40 }}>
              <OtpInputs
                Clipboard={Clipboard}
                numberOfInputs={4}
                selectionColor={Colors.primary}
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
                inputStyles={{
                  borderColor: Colors.border,
                  backgroundColor: Colors.secondary,
                  borderRadius: 10,
                  textAlign: "center",
                  height: 50,
                  width: 50,
                  fontSize: 22,
                  borderWidth: 1,
                  color: Colors.primary,
                  fontFamily: "Poppins-Regular",
                }}
              />
            </View>
            <View style={{ paddingTop: 40 }}>
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
                <Text style={[style.btntxt]}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={[
                  style.btn,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                  },
                ]}
                onPress={() => navigation.navigate("Step2")}
              >
                <Text style={[style.btntxt, { color: Colors.primary }]}>
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ErrorBoundary>
    </SafeAreaView>
  );
}
