import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const laundries = [
    {
      id: "1",
      name: "Lavandería A",
      address: "Calle 123",
      rating: 4.5,
      deliveryPrice: "$5",
      estimatedTime: "15-30 min",
      image: require("../../assets/lavanderia1.webp"),
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
    },
    {
      id: "2",
      name: "Lavandería B",
      address: "Avenida 456",
      rating: 4.5,
      deliveryPrice: "$3",
      estimatedTime: "15-30 min",
      image: require("../../assets/lavanderia1.webp"),
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
    },
    {
      id: "3",
      name: "Lavandería C",
      address: "Avenida 789",
      rating: 4.5,
      deliveryPrice: "$3",
      estimatedTime: "15-30 min",
      image: require("../../assets/lavanderia1.webp"),
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
    },
  ];

  const repeatOrder = ({ item, isWide }) => (
    <View style={[styles.item, isWide && styles.wideItem]}>
      <View style={styles.itemImageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <View>
          <Image source={item.laundriesLogo} style={styles.imageLogo} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text>
              <Text style={styles.name}>{item.name}</Text>
              {" / "}
              <Text style={styles.address}>{item.address}</Text>
            </Text>
          </View>

          <View style={styles.timeDeliveryPriceContainer}>
            <Text style={styles.estimatedTime}>{item.estimatedTime}</Text>
            <Text
              style={styles.deliveryPrice}
            >{`envio: ${item.deliveryPrice}`}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.rating}>{`★${item.rating}`}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Header/>

      <TextInput style={styles.searchInput} placeholder="Buscar lavanderías" />

      <Text style={styles.title}>Porque ya ordenaste</Text>
      <FlatList
        data={laundries}
        renderItem={({ item }) => repeatOrder({ item, isWide: false })}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />

      <Text style={styles.title}>Otras Lavanderías</Text>
      <FlatList
        data={laundries}
        renderItem={({ item }) => repeatOrder({ item, isWide: true })}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentVertical}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  flatListContentVertical: {
    paddingBottom: 20,
  },
  item: {
    width: 300,
    height: 200,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wideItem: {
    width: 370, 
    alignSelf: "center",
    marginBottom: 15
  },
  itemImageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  timeDeliveryPriceContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 3,
  },
  info: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  name: {
    fontSize: 13,
  },
  address: {
    fontSize: 13,
    color: "#666",
  },
  rating: {
    fontSize: 13,
    color: "#007192",
  },
  deliveryPrice: {
    fontSize: 13,
    color: "#007192",
  },
  estimatedTime: {
    fontSize: 13,
    color: "#007192",
  },
});
