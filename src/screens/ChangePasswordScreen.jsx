import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    // Aquí puedes agregar la lógica para cambiar la contraseña
    Alert.alert("Éxito", "Contraseña cambiada exitosamente");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cambiar Contraseña</Text>
          <Text style={styles.description}>
            Por favor, ingresa tu nueva contraseña.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Entypo name="lock" size={24} color="#007192" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              secureTextEntry
              placeholder="Nueva Contraseña"
              placeholderTextColor="#aaa"
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <Entypo name="lock" size={24} color="#007192" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              secureTextEntry
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#aaa"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.changePasswordButton}
            onPress={handleChangePassword}
          >
            <Text style={styles.buttonText}>Cambiar Contraseña</Text>
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
  textContainer: {
    marginBottom: 20,
  },
  title: {
    color: "#000",
    fontSize: 30,
    textAlign: "justify",
    marginTop: 10
  },
  description: {
    color: "#000",
    textAlign: "justify",
    marginTop: 5
  },
  formContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  icon: {
    width: "10%",
  },
  textInput: {
    color: "#000",
    fontSize: 16,
    height: 40,
    paddingLeft: 5,
    width: "90%",
  },
  buttonContainer: {
    width: "100%",
  },
  changePasswordButton: {
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
