import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Keyboard,
} from "react-native";
import { images, colors } from "../constants";
const SignUPScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}></View>
    </SafeAreaView>
  );
};

export default SignUPScreen;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
