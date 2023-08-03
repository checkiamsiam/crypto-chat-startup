import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import image from "../assets/image/image.png";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
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

export default function ContractScreeen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleSearch = (text) => {};
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
          width: "100%",
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
        {item.isOnline && item.isOnline == true && (
          <View
            style={{
              height: 14,
              width: 14,
              borderRadius: 7,
              backgroundColor: "green",
              borderColor: Colors.border,
              borderWidth: 2,
              position: "absolute",
              top: 14,
              right: 2,
              zIndex: 1000,
            }}
          />
        )}

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
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 18,
            lineHeight: 20,
            marginBottom: 4,
          }}
        >
          {item.userName}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 14, color: Colors.disable }}>
            {item.lastMessage.slice(0, 20) + "..."}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.disable,
            }}
          >
            {item.lastSeen}
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
        <View style={[style.main, { paddingBottom: 60 }]}>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingBottom: 10,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  fontFamily: "Poppins-Regular",
                  color: Colors.active,
                }}
              >
                Contacts
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Notification")}
                size={25}
              >
                <View>
                  <Ionicons
                    color={Colors.disable}
                    size={25}
                    name="notifications"
                  />
                  {1 > 0 && (
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 14,
                        backgroundColor: Colors.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: -4,
                        right: -6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: Colors.active,
                        }}
                      >
                        {5}
                      </Text>
                    </View>
                  )}
                </View>
              </Pressable>
            </View>
          </View>
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
