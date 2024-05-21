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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";

export default function Orders({ navigation }) {
  const orderItem = [
    {
      id: "1",
      name: "Lavandería A",
      address: "Calle 123",
      pay: "5.35",
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
      quantityProducts: "2",
      date: "13 de may",
      hour: "8.49 hs",
      status: "Entregado",
    },
    {
      id: "2",
      name: "Lavandería A",
      address: "Calle 123",
      pay: "5.35",
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
      quantityProducts: "2",
      date: "13 de may",
      hour: "8.49 hs",
      status: "Entregado",
    },
    {
      id: "3",
      name: "Lavandería A",
      address: "Calle 123",
      pay: "5.35",
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
      quantityProducts: "2",
      date: "13 de may",
      hour: "8.49 hs",
      status: "Entregado",
    },
    {
      id: "4",
      name: "Lavandería A",
      address: "Calle 123",
      pay: "5.35",
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
      quantityProducts: "2",
      date: "13 de may",
      hour: "8.49 hs",
      status: "Entregado",
    },

    {
      id: "5",
      name: "Lavandería A",
      address: "Calle 123",
      pay: "5.35",
      laundriesLogo: require("../../assets/lavanderiaLogo.jpg"),
      quantityProducts: "2",
      date: "13 de may",
      hour: "8.49 hs",
      status: "Entregado",
    },
  ];

  const orders = ({ item, isWide }) => (
    <View style={[styles.item, isWide && styles.wideItem]}>
      <View style={styles.info}>
        <View>
          <Image source={item.laundriesLogo} style={styles.imageLogo} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.statusDateHourContainer}>
            <Text>{item.status}</Text>
            <Text>{item.date}</Text>
            <Text>{item.hour}</Text>
          </View>

          <View>
            <Text>{item.name}</Text>
          </View>

          <View style={styles.payQuantifyContainer}>
            <Text>{`$${item.pay}`}</Text>
            <Text>{`${item.quantityProducts} productos`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.hr}></View>

      <View style={styles.actions}>
        <View style={styles.opinionContainer}>
          <AntDesign name="staro" size={20} color="black" />
          <Text>Opinar</Text>
        </View>

        <View style={styles.repeatContainer}>
          <FontAwesome name="repeat" size={20} color="black" />
          <Text>Repetir</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Header />

      <TextInput style={styles.searchInput} placeholder="Buscar lavanderías" />

      <Text style={styles.title}>Mis Pedidos</Text>
      <FlatList
        data={orderItem}
        renderItem={({ item }) => orders({ item, isWide: true })}
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
    height: 110,
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
    marginBottom: 15,
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

  info: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },

  detailsContainer: {
    rowGap: 3,
  },

  statusDateHourContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },

  payQuantifyContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },

  hr: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 6
  },

  opinionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    columnGap: 5
  },
  repeatContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5
  },
});
