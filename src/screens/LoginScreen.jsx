  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Dimensions } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { LinearGradient } from "expo-linear-gradient";
  import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

  export default function App() {
    const navigation = useNavigation();

    const ValidateLogin = () => {
      return "Home";
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/login-bg.jpg")}
          style={styles.imageBackground}
          imageStyle={{ opacity: 0.4 }}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          />
          <View style={styles.content}>
            <Text style={styles.textGradient}>Inicio de Sesion</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Correo Electronico"
                placeholderTextColor={"#999"}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                secureTextEntry={true}
                placeholder="Contrasena"
                placeholderTextColor={"#999"}
              />
              <Text 
              style={styles.recover}
              onPress={() => navigation.navigate("Reset")}
              >
                Olvidaste tu contrasena?
                </Text>
            </View>
            
            <HandlerTouchableUtil route={ValidateLogin()} handlerstyle={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </HandlerTouchableUtil>
            
            <Text style={styles.forgetPasswordText}>
              No tienes una cuenta aun?{" "}
              <Text
                style={styles.forgetPasswordLink}
                onPress={() => navigation.navigate("Register")}
              >
                Registrate
              </Text>
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }

  const { height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      width: "100%",
      height: height,
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
    inputContainer: {
      width: "90%",
      alignSelf: "center",
      marginTop: 20,
    },
    inputText: {
      width: "100%",
      padding: 20,
      borderColor: "gray",
      borderWidth: 2,
      borderRadius: 20,
      color: "#fff",
      marginBottom: 10
    },
    recover: {
      fontSize: 15,
      color: "#049fc5",
      fontWeight: "bold",
      textAlign: "right",
      marginTop: 5
    },
    loginButton: {
      width: "80%",
      backgroundColor: "#007192",
      padding: 15,
      borderRadius: 20,
      marginTop: 40,
      opacity: 1,
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "900",
      fontSize: 15,
    },
    forgetPasswordText: {
      marginTop: 18,
      color: "#fff",
      fontSize: 15
    },
    forgetPasswordLink: {
      color: "#049fc5",
      fontWeight: "900",
    },
    textGradient: {
      color: "#fff",
      fontSize: 25,
      fontWeight: '900',
      marginBottom: 18,
    },
  });
