import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import Slides from "./Slides";
import IntroItem from "./IntroItem";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Introduction() {
  const ref = React.useRef(null);
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const Footer = () => {
    return (
      <View style={{ marginHorizontal: 20, backgroundColor: Colors.bg }}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          {Slides.map((_, index) => (
            <View
              key={index}
              style={[
                style.indicator,
                currentSlideIndex === index && {
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: Colors.primary,
                },
              ]}
            />
          ))}
        </View>
        <View>
          {currentSlideIndex == 0 ? (
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                style={[
                  style.btn,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.primary,
                  },
                ]}
                onPress={goNextSlide}
              >
                <Text style={[style.btntxt]}>Next</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                style={[
                  style.btn,
                  {
                    alignItems: "center",
                    backgroundColor: Colors.primary,
                  },
                ]}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={[style.btntxt]}>Get Started</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != Slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={Slides}
        ref={ref}
        renderItem={({ item }) => <IntroItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={updateCurrentSlideIndex}
      />
      <Footer />
    </SafeAreaView>
  );
}
