import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { colors, images } from "../constants";
const TransmissionScreen = () => {
  const translation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  });
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={images.logo}
        resizeMode="contain"
        style={{
          height: 200,
          width: "100%",
          maxHeight: 350,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}
      />
      <Animated.View
        style={{
          marginTop: 50,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}
      ></Animated.View>
    </SafeAreaView>
  );
};

export default TransmissionScreen;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.neongreen,
    height: "50%",
    weight: "100%",
    borderRadius: 200 / 15,
  },
});
