// HeaderScreen.jsx

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.header}>
      <Text style={styles.userAddress}>Dirección del Usuario</Text>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Shopping")}
        >
          <FontAwesome name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    marginBottom: 10,
  },
  userAddress: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    gap: 15,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default Header;
