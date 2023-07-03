import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { images, colors } from "../constants";
//   import { MaterialIcons } from "@expo/vector-icons";
//   import { Ionicons } from "@expo/vector-icons";
const CompletionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Image source={images.ManLaptop} style={styles.ManLaptop} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ManLaptop: {
    height: "50%",
    width: "50%",
  },
});
