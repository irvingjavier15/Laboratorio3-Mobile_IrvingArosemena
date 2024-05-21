import React from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation(); // Inicializa la navegación

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.loginIcon}>
          <Image
            source={require("../../assets/password-illustration.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.loginLbl}>Olvidaste tu Contraseña?</Text>
          <Text style={styles.forgotDesLbl}>
            No te preocupes! Sucede, por favor ingresa la dirección asociada a tu cuenta.
          </Text>
        </View>

        <View style={styles.formCon}>
          <View style={styles.textBoxCon}>
            <View style={styles.at}><Entypo name="email" size={24} color="#007192" /></View>
            <View style={styles.textCon}>
              <TextInput
                style={styles.textInput}
                placeholder={"Email ID"}
                placeholderTextColor={"#aaa"}
              />
            </View>
          </View>
        </View>

        <View style={styles.loginCon}>
          <Pressable
            style={styles.LoginBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <HandlerTouchableUtil handlerstyle={styles.loginButton}>
              <Text style={styles.buttonText}>Recuperar Contrasena</Text>
            </HandlerTouchableUtil>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  header: {
    paddingLeft: 6,
    paddingTop: 20,
    marginBottom: 40
  },
  backButton: {
    padding: 10,
    marginTop: 25
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loginIcon: {
    justifyContent: "center",
    height: "30%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    marginBottom: 20,
  },
  loginLbl: {
    color: "#000",
    fontSize: 30,
    textAlign: "justify",
    marginTop: 10
  },
  forgotDesLbl: {
    color: "#000",
    textAlign: "justify",
    marginTop: 5
  },
  formCon: {
    flexDirection: "column",
  },
  textBoxCon: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  at: {
    width: "10%",
  },
  textCon: {
    width: "90%",
  },
  textInput: {
    color: "#000",
    fontSize: 16,
    height: 40,
    paddingLeft: 5,
  },
  LoginBtn: {
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#007192",
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: 'bold',
  },
});
