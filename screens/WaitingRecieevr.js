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
  ImageBackground,
} from "react-native";
import { images, colors } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { width } from "react-native-size-scaling";

const WaitingRecieevr = () => {
  return (
    <ImageBackground
      source={images.PhoneWallpaper}
      resizeMode="cover"
      imageStyle={{ opacity: 0.4 }}
      // blurRadius={30}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View>
          <Text style={styles.OctransferPitch}>
            Open on other devices to send files
          </Text>
        </View>
        <View>
          <Image
          source={images.sendIcon}
          style={styles.sendIcon}
          />
        </View>
       <View style={styles.underTextContainer}>
        <Text style={styles.underText1}>
          you are know as: ......
        </Text>
        <Text style={styles.underText}>
          You can be discovered by anyone on this network
        </Text>
       </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default WaitingRecieevr;
const styles = StyleSheet.create({
  OctransferPitch: {
    fontSize: 20,
    color: colors.focusBlue,
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 40,
    fontWeight: "bold",
  },
  sendIcon:{
  marginTop: 450,
  marginLeft: 150,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  height:80,
  width: 80,
  },
  underText: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    color: colors.white
  },
  underText1: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 130,
    color: colors.darkBlue,
  }

  //   height: 80,
  //   marginLeft: 1,
  //   marginTop: 45,
  //   borderRadius: 19,
  //   flexWrap: "wrap",
  //   borderWidth: 3,
  //   borderColor: colors.black,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // MaleUser: {
  //   marginTop: 15,
  //   marginLeft: 10,
  // },
  // IPAddress: {
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   marginTop: 20,
  //   marginRight: 40,
  // },
  // line: {
  //   marginLeft: 180,
  // },
  // status: {
  //   alignItems: "center",
  // },
  // StatusText: {
  //   fontWeight: "bold",
  //   fontSize: 15,
  //   marginTop: 10,
  // },
});
