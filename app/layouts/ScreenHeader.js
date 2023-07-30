import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import style from "../theme/style";

const ScreenHeader = ({ backScreen, title }) => {
  const navigation = useNavigation();
  return (
    <AppBar
      color={Colors.bg}
      title={title}
      titleStyle={[style.subtitle]}
      centerTitle={true}
      elevation={0}
      leading={
        <TouchableOpacity onPress={() => navigation.navigate(backScreen)}>
          <Avatar.Icon
            icon="arrow-left"
            style={{ backgroundColor: Colors.secondary }}
            color={Colors.active}
            size={40}
          />
        </TouchableOpacity>
      }
      // trailing={
      //   <TouchableOpacity>
      //     <Avatar.Icon
      //       icon="magnify"
      //       style={{ backgroundColor: Colors.secondary }}
      //       color={Colors.active}
      //       size={40}
      //     />
      //   </TouchableOpacity>
      // }
    />
  );
};

export default ScreenHeader;
