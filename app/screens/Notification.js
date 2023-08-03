import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-virtualized-view";

import image from "../assets/image/image.png";
import ScreenHeader from "../layouts/ScreenHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";
const contacts = [
  {
    id: "1",
    userName: "John Doe",
    userImg: image,
    isOnline: false,
    lastSeen: "3 Days ago",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
  {
    id: "2",
    userName: "Marry Lio",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "Good morning. bro , i am very hungry give me some money",
    messageInQueue: 0,
    sentDate: "12/7",
  },
  {
    id: "3",
    userName: "Lucia Mu",
    userImg: image,
    isOnline: false,
    lastSeen: "2 weeks ago",
    lastMessage: "What's up. bro , i am very hungry give me some money",
    messageInQueue: 0,
    sentDate: "12/7",
  },
  {
    id: "4",
    userName: "Raki Lili",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "Send me the link",
    messageInQueue: 0,
    sentDate: "Today",
  },
  {
    id: "5",
    userName: "Raki Devine",
    userImg: image,
    isOnline: false,
    lastSeen: "5 days ago",
    lastMessage: "We are doing. bro , i am very hungry give me some money",
    messageInQueue: 0,
    sentDate: "23/9",
  },
  {
    id: "6",
    userName: "Aris Yup",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "Today",
  },
  {
    id: "7",
    userName: "Aris Yup",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
  {
    id: "8",
    userName: "Billy Di",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
  {
    id: "9",
    userName: "Aris Biu",
    userImg: image,
    isOnline: true,
    lastSeen: "Online",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
];

export default function NotificationScreen({ navigation }) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("PersonalChat", {
          userName: item.userName,
        })
      }
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          borderBottomColor: Colors.border,
          borderBottomWidth: 1,
        },
      ]}
    >
      <View
        style={{
          paddingVertical: 15,
          marginRight: 22,
        }}
      >
        <View
          style={{
            height: 14,
            width: 14,
            position: "absolute",
            bottom: 12,
            right: 2,
            zIndex: 1000,
          }}
        >
          <Ionicons color={Colors.primary} size={15} name="notifications" />
        </View>

        <Image
          source={item.userImg}
          resizeMode="contain"
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingRight: 15,
        }}
      >
        <View>
          <Text style={{ fontSize: 14, color: Colors.disable }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            qui quasi vero commodi nist
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.disable,
            }}
          >
            3 days ago
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <ScreenHeader title="Notification" />

          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
