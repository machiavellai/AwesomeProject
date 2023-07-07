import React from "react";
import { useState } from "react";
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
import { CustomButton, CustomInput } from "../components";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.userName) {
      handleError(
        "Please input  your username \n \nShould contain one letter, one number and be at least 8 characters long",
        "userName"
      );
      valid = false;
    } else if (inputs.userName < 8) {
      handleError("Min Password length of 8", "userName");
      valid = false;
    }
    if (!inputs.password) {
      handleError(
        "Please input password \n \nShould contain one letter, one number and be at least 8 characters long",
        "password"
      );
      valid = false;
    } else if (inputs.password < 8) {
      handleError("Min Password length of 8", "password");
      valid = false;
    }

    if (valid) {
      // register();
      navigation.navigate("Home Screen");
    }
  };
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 20}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}
        bounces={true}
      >
        <View style={styles.body}>
          <View>
            <Image source={images.ManLaptop} style={styles.OnTop} />
          </View>
          <Text style={styles.header}>SIGN IN</Text>
          <Text style={styles.subtitle}>
            Sign in to continue with onboarding
          </Text>
          <View style={styles.input}>
            <CustomInput
              label="Username"
              onChangeText={(text) => handleOnChange(text, "userName")}
              error={errors.userName}
              onFocus={() => {
                handleError(null, "userName");
              }}
            />
            <CustomInput
              label="Password"
              error={errors.password}
              onChangeText={(text) => handleOnChange(text, "password")}
              onFocus={() => {
                handleError(null, "password");
              }}
            />

            <View style={styles.customButton}>
              <CustomButton title="SIGN IN" onPress={validate} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 30,
  },

  subtitle: {
    color: colors.darkBlue,
    fontSize: 13,
    marginBottom: 35,
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: colors.neongreen,
  },
  input: {
    marginVertical: 20,
    marginBottom: 10,
  },

  customButton: {
    paddingTop: 80,
  },
});
export default LoginScreen;
