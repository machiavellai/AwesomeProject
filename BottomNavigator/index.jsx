import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Dimensions, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Transmission from "../screens/TransmissionScreen";
import { getPathDown } from "./curve";
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";
import ProfileScreen from "../screens/ProfileScreen";
import TransmissionScreen from "../screens/TransmissionScreen";
import { colors } from "../constants";
const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleTabBlur = () => {
    setSelectedTab("");
  };

  const isTabSelected = (tabName) => {
    return selectedTab === tabName;
  };

  const returnpathDown = getPathDown(maxWidth, 60, 50);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: isTabSelected("Profile")
              ? colors.pink
              : colors.neongreen,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: "https://img.icons8.com/small/64/null/gender-neutral-user.png",
              }}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs">Profile</Text>
          ),
          onPress: () => handleTabPress("Profile"),
          onBlur: handleTabBlur,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: false,
          tabBarItemStyle: {
            margin: 0,
            zIndex: -50,
            backgroundColor: colors.pink
          },
          tabBarIcon: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 56,
                width: 56,
                backgroundColor: "white",
                borderRadius: 35,
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                }}
                source={{
                  uri: "https://img.icons8.com/sf-regular-filled/48/null/home-page.png",
                }}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View>
              <Svg width={maxWidth} height={scale(60)}>
                <Path fill={"white"} {...{ d: returnpathDown }} />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tramsfer"
        component={TransmissionScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: "white",
          },
          tabBarIcon: () => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: "https://img.icons8.com/small/64/null/gear.png",
              }}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs">Transfer</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
