import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ConnectingScreen, HomeScreen } from "./screens";
import TransmissionScreen from "./screens/TransmissionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CompletionScreen from "./screens/CompletionScreen";
import SignUPScreen from "./screens/SignUPScreen";
import LoginScreen from "./screens/LoginScreen";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Transmission Screen" component={ConnectingScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Profile Screen" component={ProfileScreen} />
        <Stack.Screen name="Completion Screen" component={CompletionScreen} />
        <Stack.Screen name="SignUP Screen" component={SignUPScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />

        {/* <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />
        <Stack.Screen name="SetUp" component={SetUp} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
