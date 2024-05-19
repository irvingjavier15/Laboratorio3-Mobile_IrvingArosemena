import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText.jsx";
import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

export default function App() {
  const navigation = useNavigation();

  const ValidateLogin = () => {
    return "Home";
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/image.jpg")}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
      <View style={styles.secondContainer}>
        <GradientText text="Exactamente" style={styles.textGradient} />

        <View style={styles.emailInputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Email or Username"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#999"}
          />

          <Text style={styles.recover}>Recover Password?</Text>
        </View>
        
        <HandlerTouchableUtil route={ValidateLogin()} handlerstyle={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
        </HandlerTouchableUtil>
        
        <Text style={styles.forgetPasswordText}>
          Don't have an account yet?{" "}
          <Text
            style={styles.forgetPasswordLink}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>

        <Text>Redireccionar a Home: </Text>
        <View>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "45%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  emailInputContainer: {
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 20,
    bottom: 5,
  },

  passwordInputContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    paddingHorizontal: 20,
  },

  inputText: {
    padding: 20,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    color: "#fff",
  },
  secondContainer: {
    height: "55%",
    backgroundColor: "rgba(0, 0, 0, 1)",
    display: "flex",
    alignItems: "center",
  },
  recover: {
    marginTop: 10,
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  loginButton: {
    width: "80%",
    backgroundColor: "#00FF99",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    opacity: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
  },
  forgetPasswordText: {
    marginTop: 10,
    color: "#fff",
  },
  forgetPasswordLink: {
    color: "#00FF99",
    fontWeight: "900",
  },
  textGradient: {
    backgroundColor: "transparent",
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 18,
  },
});
