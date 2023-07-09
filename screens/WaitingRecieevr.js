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
import { Ionicons } from "@expo/vector-icons";
import { width } from "react-native-size-scaling";

const WaitingRecieevr = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Ionicons
            name="close-outline"
            size={40}
            color="black"
            style={styles.CloseButton}
          />
          <Text style={styles.headingText}>Waiting for Reciever......</Text>
          <Image source={images.NoConnection} style={styles.NoConnection} />
          <Ionicons
            name="remove-outline"
            size={30}
            color="black"
            style={styles.line}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.activityCard}>
            <Image source={images.MaleUser} style={styles.MaleUser} />
            <Text style={styles.IPAddress}>IP: 123.103.202.402.509</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Text style={styles.StatusText}> Connected</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WaitingRecieevr;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.neongreen,
    height: "49%",
    weight: "100%",
    borderRadius: 200 / 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  CloseButton: {
    marginTop: 20,
  },
  headingText: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 40,
  },
  NoConnection: {
    marginLeft: 30,
  },
  body: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  activityCard: {
    width: "90%",
    height: 80,
    marginLeft: 1,
    marginTop: 45,
    borderRadius: 19,
    flexWrap: "wrap",
    borderWidth: 3,
    borderColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MaleUser: {
    marginTop: 15,
    marginLeft: 10,
  },
  IPAddress: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginRight: 40,
  },
  line: {
    marginLeft: 180,
  },
  status: {
    alignItems: "center",
  },
  StatusText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
});
