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
import { MaterialIcons } from "@expo/vector-icons";
const Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <View style={styles.HeaderText}>
            <Text style={styles.HeadingText}>Waiting for Reciever</Text>
          </View>
          <View style={styles.HeaderingImg}>
            <Image source={images.NoConnection} style={styles.NoConnection} />
          </View>
        </View>
        <View style={styles.BodyContainer}>
          <Image source={images.Sattelite} style={styles.Sattelite} />
          <View style={styles.IPCard}>
            <Text>IP: 123.103.123.123.124</Text>
          </View>
          <Text> Connected</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
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
  HeadingText: {
    backgroundColor: colors.black,
  },
  NoConnection: {
    height: "50%",
    width: "50%",
  },
  BodyContainer: {
    padding: 10,
    marginTop: 20,
  },
  Sattelite: {
    height: "50%",
    wifth: "50%",
  },
  IPCard: {
    width: "50%",
    height: "50%",
    borderColor: colors.black,
    marginTop: 20,
    borderRadius: 19,
    borderWidth: 2,
    flexWrap: "wrap",
  },
});

// djhdhdhd
// do the bottom naviagtion of the oages of all
