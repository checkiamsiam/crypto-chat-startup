import React from "react";
import { Image, Text, View } from "react-native";

const MaintenanceHome = ({ icon, title }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../assets/image/Coin.png")}
        />
        <Text
          style={{
            fontSize: 30,
            marginTop: 10,
          }}
        >
          Crypto Chat
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}

        <Text
          style={{
            fontSize: 20,
            marginTop: 15,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default MaintenanceHome;
