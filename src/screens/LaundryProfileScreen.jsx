import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';


const laundryImage = require("../../assets/lavanderia1.webp");
const laundryLogo = require("../../assets/lavanderiaLogo.jpg");

export default function LaundryProfileScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const services = [
    {
      id: "1",
      name: "Lavado Básico",
      price: "$10",
      description: "Lavado y secado de ropa básica.",
      image: require("../../assets/lavanderia1.webp"),
    },
    {
      id: "2",
      name: "Lavado Premium",
      price: "$15",
      description: "Lavado, secado y planchado de ropa.",
      image: require("../../assets/lavanderia1.webp"),
    },
    {
      id: "3",
      name: "Limpieza de Edredones",
      price: "$20",
      description: "Lavado especializado de edredones y mantas.",
      image: require("../../assets/lavanderia1.webp"),
    },
  ];

  const renderService = ({ item }) => (
    <TouchableOpacity style={styles.serviceItem}
      onPress={()=>navigation.navigate("ProductDetail")}   
    >
      <Image source={item.image} style={styles.serviceImage} />
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.servicePrice}>{item.price}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={laundryImage} style={styles.headerImage} />
        <View style={styles.headerContent}>
          <Image source={laundryLogo} style={styles.headerLogo} />
          <View style={styles.headerText}>
            <Text style={styles.laundryName}>Lavanderia Esperanza</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.4</Text>
              <Text style={styles.reviewLink}
              onPress={()=> navigation.navigate("LaundryReview")}
              >Leer opiniones</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <Entypo 
              name={isFavorite ? "heart" : "heart-outlined"} 
              size={24} 
              color={isFavorite ? "red" : "black"} 
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  headerLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  laundryName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: "#f1c40f",
    marginRight: 5,
  },
  reviewLink: {
    fontSize: 14,
    color: "#007192",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#D3D3D3",
    marginTop: 25,
    marginRight: 10,
    padding: 8,
    borderRadius: 10
  },
  flatListContent: {
    padding: 10,
  },
  serviceItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  serviceInfo: {
    flex: 1,
    padding: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  servicePrice: {
    fontSize: 14,
    color: "#007192",
    marginVertical: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
  },
});
