import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppBar } from "@react-native-material/core";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function CardForm() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <AppBar
            title="Link Your Card"
            titleStyle={{ color: Colors.active }}
            centerTitle={true}
            color={Colors.bg}
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("PayMethodOption")}
              >
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
              <View
                style={[
                  style.inputContainer,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    // justifyContent: 'space-between',
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    borderRadius: 25,
                  },
                ]}
              >
                <Icon
                  name="account-circle-outline"
                  color={Colors.active}
                  size={20}
                />
                <TextInput
                  placeholder="Name On Card"
                  placeholderTextColor={Colors.active}
                  selectionColor={Colors.primary}
                  style={[
                    style.btntxt,
                    { color: Colors.active, marginHorizontal: 10 },
                  ]}
                />
              </View>
              <View
                style={[
                  style.inputContainer,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    // justifyContent: 'space-between',
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    borderRadius: 25,
                  },
                ]}
              >
                <Icon
                  name="credit-card-outline"
                  color={Colors.active}
                  size={20}
                />
                <TextInput
                  placeholder="Card Number"
                  placeholderTextColor={Colors.active}
                  selectionColor={Colors.primary}
                  keyboardType="phone-pad"
                  style={[
                    style.btntxt,
                    {
                      color: Colors.active,
                      marginHorizontal: 10,
                      width: width / 1.8,
                    },
                  ]}
                />
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={[style.txt, { fontFamily: "Tinos-Bold" }]}>
                    VISA
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={[
                  style.inputContainer,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    // justifyContent: 'space-between',
                    // paddingHorizontal: 15,
                    borderRadius: 25,
                    width: width / 2.4,
                  },
                ]}
              >
                <TextInput
                  placeholder="EXP MM/YY"
                  placeholderTextColor={Colors.active}
                  selectionColor={Colors.primary}
                  keyboardType="phone-pad"
                  style={[style.btntxt, { color: Colors.active }]}
                />
              </View>
              <View
                style={[
                  style.inputContainer,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.bg,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    // justifyContent: 'space-between',
                    // paddingHorizontal: 15,
                    borderRadius: 25,
                    width: width / 2.4,
                  },
                ]}
              >
                <TextInput
                  placeholder="CVV"
                  placeholderTextColor={Colors.active}
                  selectionColor={Colors.primary}
                  keyboardType="phone-pad"
                  style={[style.btntxt, { color: Colors.active }]}
                />
              </View>
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  alignItems: "center",
                  backgroundColor: Colors.bg,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  // justifyContent: 'space-between',
                  flexDirection: "row",
                  paddingHorizontal: 15,
                  borderRadius: 25,
                },
              ]}
            >
              <Icon name="home-outline" color={Colors.active} size={25} />
              <TextInput
                placeholder="Postal Code"
                placeholderTextColor={Colors.active}
                selectionColor={Colors.primary}
                keyboardType="phone-pad"
                style={[
                  style.btntxt,
                  { color: Colors.active, marginHorizontal: 10 },
                ]}
              />
            </View>
            <View style={{ paddingTop: 50 }}>
              <Text style={[style.txt]}>
                By adding a new card, you agree to the
                <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                  {" "}
                  Credit/Debit Card Terms.
                </Text>
              </Text>
            </View>
            <View style={{ paddingTop: 20, marginBottom: 20 }}>
              <TouchableOpacity
                style={[
                  style.btn,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.primary,
                  },
                ]}
                onPress={() => navigation.navigate("PaymentSuccess")}
              >
                <Text style={[style.btntxt]}>Add Card</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
