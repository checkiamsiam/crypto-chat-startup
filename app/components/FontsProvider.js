import { useFonts } from "expo-font";

const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "Tinos-Bold": require("../assets/fonts/Tinos-Bold.ttf"),
    "Tinos-Regular": require("../assets/fonts/Tinos-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return children;
};

export default FontProvider;
