import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import style from "../theme/style";
// Ionicons.loadFont()
// MaterialCommunity.loadFont()
import { Colors } from "../theme/color";

export default function Login() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={[style.area, { paddingTop: 100 }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={style.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 40 }}>
              <Text style={style.title}>Let,s Sign In</Text>
              <Text style={[style.txt, { lineHeight: 30 }]}>
                Welcome back, you have been missed!
              </Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <TextInput
                placeholder="Email address"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={style.txtinput}
              />

              <View style={style.inputContainer}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={isPasswordVisible}
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
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Icon
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    color={Colors.disable}
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "flex-end", paddingTop: 10 }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontFamily: "Poppins-Regular",
                      textDecorationLine: "underline",
                    }}
                  >
                    Forgot Password ?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 40 }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BottomNavigator")}
                  style={style.btn}
                >
                  <Text style={style.btntxt}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <Text style={style.txt1}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text
                  style={[
                    style.txt,
                    { color: Colors.primary, fontFamily: "Poppins-Bold" },
                  ]}
                >
                  {" "}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
