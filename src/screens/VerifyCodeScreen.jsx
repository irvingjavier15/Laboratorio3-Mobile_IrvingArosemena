import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

export default function VerifyCodeScreen() {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    
    if (text.length === 1 && index < code.length - 1) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const inputs = [];

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
            source={require("../../assets/email.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.loginLbl}>Verifica tu Código</Text>
          <Text style={styles.forgotDesLbl}>
            Por favor, ingresa el código que recibiste en tu correo electrónico.
          </Text>
        </View>

        <View style={styles.codeContainer}>
          {code.map((char, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              value={char}
              onChangeText={(text) => handleChangeText(text, index)}
              ref={(input) => inputs[index] = input}
            />
          ))}
        </View>

        <View style={styles.loginCon}>
          <Pressable
            style={styles.LoginBtn}
            // onPress={handleVerifyCode}
          >
            <HandlerTouchableUtil handlerstyle={styles.loginButton}
            route="ChangePassword"
            >
              <Text style={styles.buttonText}>Verificar Código</Text>
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  codeInput: {
    borderColor: "#007192",
    borderWidth: 1,
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 24,
    color: "#000",
  },
  loginCon: {
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
