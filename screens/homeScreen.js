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
import { colors, images } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BottomTabNavigator } from "../BottomNavigator";

const HomeScreen = ({ navigation }) => {
  return (
    <BottomTabNavigator>
      <SafeAreaView style={styles.SafeAreaViewContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MaterialIcons na      me="menu" size={30} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile Screen")}
          >
            <Image source={images.profile_Photo} style={styles.profilePhoto} />
          </TouchableOpacity>
        </View>
        <View style={styles.welcomeBoard}>
          <Text style={styles.WelcomeTxt}>
            Welcome back,<Text style={styles.WelcomeTxtz}>Racheal</Text>{" "}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card1}>
            <View style={styles.card1InnercircleContainer}>
              <View style={styles.card1Innercircle}>
                <View style={styles.sendContainer1}>
                  <View style={styles.sendCard1}>
                    <MaterialIcons
                      name="send"
                      size={30}
                      style={styles.sendIcon}
                    />
                    <View style={styles.sendbuttonContainer}>
                      <View style={styles.sendButton}>
                        <Text style={styles.sendText}>Send</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card2}>
            <View style={styles.card2InnercircleContainer}>
              <View style={styles.card2Innercircle}>
                <View style={styles.sendContainer2}>
                  <View style={styles.sendCard2}>
                    <Ionicons
                      name="flash-sharp"
                      size={30}
                      color="#000000"
                      style={styles.receiveIcon}
                    />
                    <View style={styles.sendbuttonContainer2}>
                      <View style={styles.sendButton2}>
                        <Text style={styles.receiveText}>Receive</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.activityListContainer}>
          <Text style={styles.ActivityTxt}>Check Latest Activity</Text>
          <Text style={styles.seeAllTxt}> see all</Text>
        </View>
        <View style={styles.activityCard}>
          <Image source={images.individualOne} style={styles.individualOne} />
          <Text style={styles.activityInfo}> Received from Ashley</Text>
          <Text style={styles.subActivityInfo}> 12 files - 2 min ago</Text>
        </View>
        <View style={styles.activityCard2}>
          <Image source={images.individualTwo} style={styles.individualTwo} />
          <Text style={styles.activityInfo}> Received from Mackey</Text>
          <Text style={styles.subActivityInfo}> 7 files - 2 min ago</Text>
        </View>

        <View style={styles.NoConnectionContainer}>
          <Image source={images.noConnection} style={styles.noConnection} />
        </View>
        <View style={styles.NoconnectionBar}>
          <Text style={styles.connectionTxt}> Connect to server </Text>
        </View>
      </SafeAreaView>
    </BottomTabNavigator>
  );
};

{
  /* <ion-icon name="chevron-forward-outline"></ion-icon> */
}

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  profilePhoto: {
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  headerWelcome: {
    fontSize: 19,
    color: colors.headerTxt,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  welcomeBoard: {
    marginLeft: 20,
    marginTop: 20,
  },
  WelcomeTxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
  WelcomeTxtz: {
    fontWeight: "bold",
    color: colors.pink,
    fontSize: 20,
  },
  icon: {
    color: colors.pink,
    marginLeft: 10,
  },
  cardContainer: {
    width: "100%",
    height: "30%",
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // backgroundColor: colors.red
  },
  card1: {
    width: "45%",
    height: "100%",
    backgroundColor: colors.pink,
    borderRadius: 25,
    marginLeft: 10,
  },
  card2: {
    width: "45%",
    height: "100%",
    backgroundColor: colors.neongreen,
    borderRadius: 25,
    marginRight: 10,
  },
  card1Innercircle: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    backgroundColor: colors.lightPink,
  },
  card2Innercircle: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    backgroundColor: colors.lightNeongreen,
  },
  card1InnercircleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  card2InnercircleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  sendContainer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sendCard1: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    backgroundColor: colors.white,
  },
  sendContainer2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sendCard2: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    backgroundColor: colors.white,
  },
  sendIcon: {
    alignItems: "center",
    marginLeft: 22,
    justifyContent: "center",
    marginTop: 20,
  },
  receiveIcon: {
    marginLeft: 20,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  sendbuttonContainer: {
    width: "150%",
    height: "50%",
    marginTop: 59,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  sendButton: {
    width: "110%",
    height: "80%",
    backgroundColor: colors.white,
    marginBottom: 40,
    marginRight: 40,
    marginLeft: 10,
    borderRadius: 5,
  },
  sendbuttonContainer2: {
    width: "150%",
    height: "50%",
    flexDirection: "row",
    marginTop: 40,

    justifyContent: "center",
    marginLeft: -18,
  },
  sendButton2: {
    width: "110%",
    height: "80%",
    backgroundColor: colors.white,
    marginBottom: 50,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  sendText: {
    marginLeft: 35,
    fontWeight: "bold",
    fontSize: 20,
  },
  receiveText: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  activityListContainer: {
    // backgroundColor: colors.green,
    width: "100%",
    height: "4%",
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  ActivityTxt: {
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 15,
  },
  seeAllTxt: {
    fontWeight: "bold",
    color: colors.pink,
  },
  activityCard: {
    width: "100%",
    height: "7%",
    marginTop: 15,
    borderRadius: 15,
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityCard2: {
    width: "100%",
    height: "7%",
    marginTop: 15,
    borderRadius: 15,
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: colors.black,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  individualOne: {
    width: "11%",
    marginTop: 6,
    height: "80%",
    marginLeft: 6,
  },
  individualTwo: {
    width: "11%",
    marginTop: 6,
    height: "80%",
    marginLeft: 6,
  },
  activityInfo: {
    marginTop: 11,
    marginRight: 170,
    fontWeight: "bold",
  },
  subActivityInfo: {
    marginLeft: 55,
    marginTop: -21,
  },
  NoConnectionContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "12%",

    marginTop: 20,
  },

  noConnection: {
    marginLeft: 110,
    height: "110%",
    width: "40%",
  },
  NoconnectionBar: {
    marginTop: 5,
    backgroundColor: colors.lightGrey,
    height: "5%",
    width: "40%",
    flexDirection: "row",
    borderRadius: 30,
    marginLeft: 110,
  },
  connectionTxt: {
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 7,
  },
});
