import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import EmojiSelector from "react-native-emoji-selector";
import demoImage from "../assets/image/camera.png";
import PersonalChatHeader from "../layouts/PersonalChatHeader";
import { Colors } from "../theme/color";
import style from "../theme/style";

const PersonalChat = () => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello Smith from the other",
      messageType: "text",
      senderId: 1,
      timeStamp: new Date(),
    },
    {
      id: 1,
      message: "Hello shaman from the other",
      messageType: "text",
      senderId: 2,
      timeStamp: new Date(),
    },
    {
      id: 1,
      message: "Hello Smith from the other",
      messageType: "image",
      senderId: 3,
      timeStamp: new Date(),
    },
    {
      id: 1,
      message: "Hello Smith from the other",
      messageType: "text",
      senderId: 1,
      timeStamp: new Date(),
    },
  ]);
  const [recepientData, setRecepientData] = useState();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState("");
  const route = useRoute();
  const { recepientId } = route.params;
  const [message, setMessage] = useState("");

  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

  const handleContentSizeChange = () => {
    scrollToBottom();
  };

  const handleEmojiPress = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };

  const handleSend = async (messageType) => {
    if (messageType === "text") {
      setMessages([
        ...messages,
        {
          id: 1,
          message: message,
          messageType: "text",
          senderId: 1,
          timeStamp: new Date(),
        },
      ]);
      setMessage("");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      handleSend("image", result.uri);
    }
  };

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main]}>
          <PersonalChatHeader />
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
            onContentSizeChange={handleContentSizeChange}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((item, index) => {
              if (item.messageType === "text") {
                const isSelected = selectedMessages.includes(item.id);
                return (
                  <Pressable
                    // onLongPress={() => {})}
                    key={index}
                    style={[
                      item?.senderId === 1
                        ? {
                            alignSelf: "flex-end",
                            backgroundColor: Colors.primary,
                            padding: 8,
                            maxWidth: "60%",
                            borderRadius: 7,
                            margin: 10,
                          }
                        : {
                            alignSelf: "flex-start",
                            backgroundColor: "white",
                            padding: 8,
                            margin: 10,
                            borderRadius: 7,
                            maxWidth: "60%",
                          },

                      isSelected && {
                        width: "100%",
                        backgroundColor: "#F0FFFF",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        textAlign: isSelected ? "right" : "left",
                      }}
                    >
                      {item?.message}
                    </Text>
                    <Text
                      style={{
                        textAlign: "right",
                        fontSize: 9,
                        marginTop: 5,
                      }}
                    >
                      {formatTime(item.timeStamp)}
                    </Text>
                  </Pressable>
                );
              }

              if (item.messageType === "image") {
                // const baseUrl =
                //   "/Users/sujananand/Build/messenger-project/api/files/";
                // const imageUrl = item.imageUrl;
                // const filename = imageUrl.split("/").pop();
                // const source = { uri: baseUrl + filename };
                return (
                  <Pressable
                    key={index}
                    style={[
                      item?.senderId?._id === 1
                        ? {
                            alignSelf: "flex-end",
                            backgroundColor: Colors.primary,
                            padding: 8,
                            maxWidth: "60%",
                            borderRadius: 7,
                            margin: 10,
                          }
                        : {
                            alignSelf: "flex-start",
                            backgroundColor: "white",
                            padding: 8,
                            margin: 10,
                            borderRadius: 7,
                            maxWidth: "60%",
                          },
                    ]}
                  >
                    <View>
                      <Image
                        source={demoImage}
                        style={{ width: 200, height: 200, borderRadius: 7 }}
                      />
                      <Text
                        style={{
                          textAlign: "right",
                          fontSize: 9,
                          position: "absolute",
                          right: 10,
                          bottom: 7,
                          marginTop: 5,
                        }}
                      >
                        {formatTime(item?.timeStamp)}
                      </Text>
                    </View>
                  </Pressable>
                );
              }
            })}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderTopWidth: 1,
              borderTopColor: "#dddddd",
            }}
          >
            <Entypo
              onPress={handleEmojiPress}
              style={{ marginRight: 5 }}
              name="emoji-happy"
              size={24}
              color="gray"
            />

            <TextInput
              value={message}
              onChangeText={(text) => setMessage(text)}
              style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderColor: "#dddddd",
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
              placeholder="Type Your message..."
              onFocus={() => setShowEmojiSelector(false)}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                marginHorizontal: 8,
              }}
            >
              <Entypo
                onPress={pickImage}
                name="camera"
                size={24}
                color="gray"
              />

              <Feather name="mic" size={24} color="gray" />
            </View>

            <Pressable onPress={() => handleSend("text")}>
              {message.length > 0 ? (
                <Ionicons name="send" size={24} color={Colors.primary} />
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: Colors.primary,
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    borderRadius: 20,
                  }}
                >
                  Send
                </Text>
              )}
            </Pressable>
          </View>

          {showEmojiSelector && (
            <EmojiSelector
              showSearchBar={false}
              onEmojiSelected={(emoji) => {
                setMessage((prevMessage) => prevMessage + emoji);
              }}
              style={{ height: 250 }}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PersonalChat;
