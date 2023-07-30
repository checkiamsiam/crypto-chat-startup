import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import HomeHeader from "../layouts/HomeHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";

export default function ChatScreen() {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {};
  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <HomeHeader />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.secondary,
              height: 48,
              paddingHorizontal: 12,
              marginHorizontal: 2,
              borderRadius: 20,
            }}
          >
            <Ionicons
              name="ios-search-outline"
              size={24}
              color={Colors.disable}
            />

            <TextInput
              style={{
                width: "100%",
                height: "100%",
                marginHorizontal: 12,
              }}
              value={search}
              onChangeText={handleSearch}
              placeholder="Search contact..."
            />
          </View>

          {/* <ScrollView showsVerticalScrollIndicator={false} /> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
