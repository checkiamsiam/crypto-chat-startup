import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import HomeHeader from "../layouts/HomeHeader";
import style from "../theme/style";

export default function ChatScreen() {
  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <HomeHeader />

          <ScrollView showsVerticalScrollIndicator={false} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
