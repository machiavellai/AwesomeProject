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
import { useNavigation } from "@react-navigation/native";


const TransmissionScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ImageBackground
      source={images.doodle}
      resizeMode="cover"
      imageStyle={{opacity: 0.2, backgroundColor: '#4385B7'}}
      // blurRadius={30}
      style={{flex: 1}}>        
      </ImageBackground>
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
    height: "40%",
    weight: "100%",
    borderRadius: 200 / 15,
  },
});
