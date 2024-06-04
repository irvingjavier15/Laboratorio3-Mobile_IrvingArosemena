import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


const laundryImage = require("../../assets/lavanderia1.webp");

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={laundryImage} style={styles.headerImage} />
        <View style={styles.content}>
          <Text style={styles.productName}>Lavado Básico</Text>
          <Text style={styles.productDescription}>
            Lavado y secado de ropa básica. Perfecto para mantener tu ropa limpia y fresca.
          </Text>
          <Text style={styles.productPrice}>$10</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 20,
    color: "#000",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addButton: {
    backgroundColor: "#007192",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
