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
const ProfileScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Waiting Recieve");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={pressHandler}>
            <Ionicons
              name="chevron-back"
              color="#23557F"
              size={60}
              style={styles.icon}
            />
          </TouchableOpacity>
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
              <TouchableWithoutFeedback>
                <Image
                  source={images.profile_Photo}
                  style={styles.profilePhoto}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.profilename}>
          <Text style={styles.profiletextName}> RACHEAL OYINDAMOLA</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityInfo}> 184</Text>
          <Text style={styles.activityInfo}> 14</Text>
          <Text style={styles.activityInfo}> 114</Text>
          <Text style={styles.subActivityInfo}>Total </Text>
          <Text style={styles.subActivityInfo2}>Sent </Text>
          <Text style={styles.subActivityInfo3}> Recieved </Text>
        </View>
        <View style={styles.ActivityContainer}>
          <Text style={styles.ActivityText}>Activity Per day</Text>
          <TouchableOpacity style={styles.sendButtonContainer}>
            <View style={styles.sendButton}>
              <Text style={styles.sendText}>Send</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recieveButtonContainer}>
            <View style={styles.recievButton2}>
              <Text style={styles.recieveText}>Recieve</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.scrollViewContent}>
    //     <View style={styles.headerContainer}>
    //       <TouchableOpacity>
    //         <MaterialIcons name="settings" size={40} style={styles.Settings} />
    //       </TouchableOpacity>
    //     </View>
    //     <View style={styles.ProfileTextContainer}>
    //       <Text style={styles.ProfileText}>Profile</Text>
    //     </View>
    //     <TouchableOpacity>
    //       <View style={styles.circleContainer}>
    //         <View style={styles.CircleShape}>
    //           <Image />
    //         </View>
    //       </View>
    //     </TouchableOpacity>
    //     <View style={styles.profilename}>
    //       <Text style={styles.profiletextName}> RACHEAL OYINDAMOLA</Text>
    //     </View>
    //     <View style={styles.activityCard}></View>
    //     <View style={styles.ActivityContainer}>
    //       <Text style={styles.ActivityText}>Activity Per day</Text>
    //       <TouchableOpacity style={styles.sendButtonContainer}>
    //         <View style={styles.sendButton}>
    //           <Text style={styles.sendText}>Send</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.recieveButtonContainer}>
    //         <View style={styles.recievButton2}>
    //           <Text style={styles.recieveText}>Recieve</Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>
    //   <BottomNav/>
    // </SafeAreaView>
  );
};

export default ProfileScreen;

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
    width: 80,
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
    height: 100,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 19,
    flexWrap: "wrap",
    borderWidth: 3,
    borderColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 20,
  },
  sendButtonContainer: {
    flex: 1,
  },
  sendButton: {
    width: "90%",
    height: 40,
    marginLeft: 30,
    backgroundColor: colors.subText,
    borderRadius: 15,
    alignItems: "center",
  },
  recieveButtonContainer: {
    flex: 1,
  },
  recievButton2: {
    width: "90%",
    height: 40,
    marginLeft: 20,
    backgroundColor: colors.pink,
    borderRadius: 15,
    alignItems: "center",
  },
  sendText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  recieveText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profilePhoto: {
    height: 120,
    width: 120,
  },
  icon: {
    marginTop: 30,
  },
  activityInfo: {
    fontSize: 20,
    marginTop: 11,
    marginRight: 70,
    fontWeight: "bold",
    marginLeft: 8,
  },
  subActivityInfo: {
    marginLeft: 10,
    marginTop: 10,
  },
  subActivityInfo2: {
    marginLeft: 5,
    marginTop: 10,
  },
  subActivityInfo3: {
    marginLeft: 5,
    marginTop: 10,
    marginRight: 40,
  },
});
