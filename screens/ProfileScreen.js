import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { images, colors } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const ProgileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={40} style={styles.Settings} />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileTextContainer}>
          <Text style={styles.ProfileText}>Profile</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.circleContainer}>
            <View style={styles.CircleShape}>
              <Image />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.profilename}>
          <Text style={styles.profiletextName}> RACHEAL OYINDAMOLA</Text>
        </View>
        <View style={styles.activityCard}></View>
        <View style={styles.ActivityContainer}>
          <Text style={styles.ActivityText}>Activity Per day</Text>
          <View style={styles.sendbuttonContainer}>
            <View style={styles.sendButton}>
              <Text style={styles.sendText}>Send</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgileScreen;

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
  Settings: {
    height: 80,
    weight: 80,
    marginLeft: 350,
    marginTop: 40,
  },
  ProfileTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  circleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  CircleShape: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: colors.pink,
  },
  profilename: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profiletextName: {
    fontWeight: "bold",
    fontSize: 19,
  },

  activityCard: {
    width: "90%",
    height: "10%",
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: colors.black,
    flexDirection: "row",
  },
  ActivityContainer: {
    marginTop: 20,
    marginLeft: 20,
    height: "30%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ActivityText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
