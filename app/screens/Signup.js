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
import { Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import style from "../theme/style";

export default function Signup() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <SafeAreaView style={[style.area, { paddingTop: 100 }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={style.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 40 }}>
              <Text style={style.title}>Sign Up</Text>
              <Text style={[style.txt, { lineHeight: 30 }]}>
                Create an account to continue!
              </Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <TextInput
                placeholder="Full name"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={style.txtinput}
              />

              <TextInput
                placeholder="Email address"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.txtinput, { marginTop: 20 }]}
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

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  alignItems: "center",
                  marginLeft: 5,
                }}
                onPress={() => setIsSelected(!isSelected)}
              >
                <Checkbox status={isSelected ? "checked" : "unchecked"} />
                <Text style={[style.subtxt, { marginLeft: 2 }]}>
                  I agree to the Terms of Service and Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BottomNavigator")}
                  style={style.btn}
                >
                  <Text style={style.btntxt}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 20,
                marginBottom: 20,
              }}
            >
              <Text style={style.txt1}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[
                    style.txt,
                    { color: Colors.primary, fontFamily: "Poppins-Bold" },
                  ]}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
