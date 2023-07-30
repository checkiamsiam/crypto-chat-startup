import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BottomNavigator from "../navigator/BottomNavigator";
import Account from "../screens/Account";
import BuyBitcoin from "../screens/BuyBitcoin";
import CardForm from "../screens/CardForm";
import CardForm2 from "../screens/CardForm2";
import Code from "../screens/Code";
import Coindetail from "../screens/Coindetail";
import Exchange from "../screens/Exchange";
import Introduction from "../screens/Introduction";
import Login from "../screens/Login";
import Markettrends from "../screens/Markettrends";
import PayMethod from "../screens/PayMethod";
import PayMethodOption from "../screens/PayMethodOption";
import PaymentSuccess from "../screens/PaymentSuccess";
import Pricealert from "../screens/Pricealert";
import ReceiveCrypto from "../screens/ReceiveCrypto";
import Refer from "../screens/Refer";
import Secured from "../screens/Secured";
import Signup from "../screens/Signup";
import Splash from "../screens/Splash";
import Step2 from "../screens/Step2";
import Success from "../screens/Success";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Secured"
          component={Secured}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Step2"
          component={Step2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Code"
          component={Code}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exchange"
          component={Exchange}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuyBitcoin"
          component={BuyBitcoin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PayMethod"
          component={PayMethod}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PayMethodOption"
          component={PayMethodOption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardForm"
          component={CardForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReceiveCrypto"
          component={ReceiveCrypto}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Refer"
          component={Refer}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="Coindetail"
          component={Coindetail}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
                    name="Portfolio"
                    component={Portfolio}
                    options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="Pricealert"
          component={Pricealert}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardForm2"
          component={CardForm2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Markettrends"
          component={Markettrends}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
