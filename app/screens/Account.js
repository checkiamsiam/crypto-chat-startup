import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
import IconE from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ScreenHeader from "../layouts/ScreenHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Account() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <ScreenHeader backScreen="Profile" title="Account" />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingVertical: 10 }}>
              <Image
                source={require("../assets/image/image.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 8.5,
                  width: width / 4,
                  alignSelf: "center",
                }}
              />
              <Image
                source={require("../assets/image/camera.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 25,
                  width: width / 12,
                  position: "absolute",
                  marginTop: 70,
                  // marginLeft:180,
                  right: 115,
                }}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <View
                style={{
                  // paddingVertical: 15,
                  flexDirection: "row",
                  backgroundColor: Colors.secondary,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  alignItems: "center",
                }}
              >
                <Icon name="account-outline" color={Colors.disable} size={30} />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={[style.subtxt, { marginTop: 10 }]}>
                    First Name
                  </Text>
                  <TextInput
                    placeholder="Smith"
                    placeholderTextColor={Colors.active}
                    selectionColor={Colors.primary}
                    style={{
                      color: Colors.active,
                      marginTop: -15,
                      height: 50,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View
                style={{
                  // paddingVertical: 15,
                  flexDirection: "row",
                  backgroundColor: Colors.secondary,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  alignItems: "center",
                }}
              >
                <Icon name="account-outline" color={Colors.disable} size={30} />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={[style.subtxt, { marginTop: 10 }]}>
                    Last Name
                  </Text>
                  <TextInput
                    placeholder="Rollins"
                    placeholderTextColor={Colors.active}
                    selectionColor={Colors.primary}
                    style={{
                      color: Colors.active,
                      marginTop: -15,
                      height: 50,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View
                style={{
                  // paddingVertical: 15,
                  flexDirection: "row",
                  backgroundColor: Colors.secondary,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  alignItems: "center",
                }}
              >
                <Icon name="email-outline" color={Colors.disable} size={30} />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={[style.subtxt, { marginTop: 10 }]}>
                    Email Address
                  </Text>
                  <TextInput
                    placeholder="smithrollins05@yahoo.com"
                    placeholderTextColor={Colors.active}
                    selectionColor={Colors.primary}
                    style={{
                      color: Colors.active,
                      marginTop: -15,
                      height: 50,
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={{ paddingTop: 10 }}>
              <View
                style={{
                  // paddingVertical: 15,
                  flexDirection: "row",
                  backgroundColor: Colors.secondary,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  alignItems: "center",
                }}
              >
                <Icon name="phone-outline" color={Colors.disable} size={30} />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={[style.subtxt, { marginTop: 10 }]}>
                    Phone Number
                  </Text>
                  <TextInput
                    placeholder="+880 1124588875"
                    placeholderTextColor={Colors.active}
                    selectionColor={Colors.primary}
                    style={{
                      color: Colors.active,
                      marginTop: -15,
                      height: 50,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View
                style={{
                  // paddingVertical: 15,
                  flexDirection: "row",
                  backgroundColor: Colors.secondary,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  alignItems: "center",
                }}
              >
                <IconE name="location" color={Colors.disable} size={30} />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={[style.subtxt, { marginTop: 10 }]}>
                    Loacation
                  </Text>
                  <TextInput
                    placeholder="Dhaka , Bangladesh"
                    placeholderTextColor={Colors.active}
                    selectionColor={Colors.primary}
                    style={{
                      color: Colors.active,
                      marginTop: -15,
                      height: 50,
                    }}
                  />
                </View>
              </View>
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
                onPress={() => navigation.navigate("Profile")}
              >
                <Text style={[style.btntxt]}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
