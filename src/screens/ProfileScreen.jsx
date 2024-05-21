import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/costa.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Irving Arosemena</Text>
        <Text style={styles.profileEmail}>irvingJavier15@hotmai.com</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Edit")}
        >
          <AntDesign name="edit" size={24} color="black" />
          <Text style={styles.actionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Location")}
        >
          <FontAwesome name="lock" size={24} color="black" />
          <Text style={styles.actionText}>Cambiar Direccion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
        //   onPress={() => navigation.navigate("Location")}
        >
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.actionText}>Configuraciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={styles.actionText}>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: "gray",
  },
  actionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  actionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
