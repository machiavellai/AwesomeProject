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
import { CustomButton, CustomInput } from "../components";

const SignUPScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    let regec = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    } else if (!inputs.email.match(regec)) {
      handleError("Please input a valid email", "email");
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

    if (!inputs.userName) {
      handleError(
        "Please input a username\n \nShould contain one letter, one number and be at least 8 characters long",
        "username"
      );
      valid = false;
    } else if (inputs.userName < 8) {
      handleError("Min Password length of 8", "userName");
      valid = false;
    }
    if (valid) {
      // register();
      navigation.navigate("Login Screen");
    }

    // try {
    //   var InsertAPIURL =
    //     'https://onboarding-app-1.herokuapp.com/staff/register';
    //   var headers = {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   };
    //   fetch(InsertAPIURL, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify(inputs),
    //   })
    //     .then(response => {
    //       const d = response.json();
    //       console.log(d, 'here');
    //       return d;
    //     })
    //     .then(response => {
    //       const {message} = response;
    //       if (message == 'Thank you for registering') {
    //         console.log(message);
    //         console.log(response);
    //       }
    //       if (valid) {
    //         // register();
    //         navigation.navigate('LogInScreen');
    //       }
    //       alert(message);
    //       console.log(response);
    //       console.log(inputs);
    //     })
    //     .catch(e => console.log(e, 'error'));
    // } catch (error) {
    //   console.log(error);
    //   // alert('Error Occured' + ErrorMessage);
    // }
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 20}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}
          bounces={true}
        >
          <View style={styles.body}>
            <View>
              <Image
              source={images.ManLaptop}
              style={styles.OnTop}
              />
            </View>
            <Text style={styles.header}>Register Yourself!</Text>

            <View style={styles.input}>
              <CustomInput
                label="Email or Phone"
                onChangeText={(text) => handleOnChange(text, "email")}
                error={errors.email}
                onFocus={() => {
                  handleError(null, "email");
                }}
              />
              <CustomInput
                label="Username"
                error={errors.userName}
                onChangeText={(text) => handleOnChange(text, "userName")}
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
              <CustomButton title="Submit" onPress={validate} />
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.headerContainer}
      ></View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUPScreen;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: colors.neongreen,
  },
  body: {
    marginTop: 40,
  },
  subtitle: {
    color: colors.subGrey,
    fontSize: 13,
    marginBottom: 10,
  },
  input: {
    marginVertical: 20,
    marginBottom: 30,
  },
});
