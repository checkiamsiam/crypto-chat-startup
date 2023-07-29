import React from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomStatusBar from "./app/components/CustomStatusBar";
import FontProvider from "./app/components/FontsProvider";
import NetworkConnectivity from "./app/components/NetworkConnectivity";
import { persistor, store } from "./app/features/app/store";
import StackNavigator from "./app/navigator/StackNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontProvider>
          <SafeAreaProvider>
            <CustomStatusBar />
            <NetworkConnectivity>
              <StackNavigator />
              <FlashMessage style={{ paddingTop: 30 }} position="top" />
            </NetworkConnectivity>
          </SafeAreaProvider>
        </FontProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
