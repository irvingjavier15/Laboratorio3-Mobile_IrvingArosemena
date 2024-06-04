import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const laundryImage = require("../../assets/lavanderia1.webp");
const laundryLogo = require("../../assets/lavanderiaLogo.jpg");

export default function LaundryReviewScreen() {
  const navigation = useNavigation();

  const reviews = [
    {
      id: "1",
      name: "Aki",
      date: "10 de abr",
      rating: 1,
      reason: "Otro motivo",
      comment: "La ropa estaba un poco mojada",
      serviceName: "Servicio de lavado basico",
      servicePrice: "$10",
      serviceImage: require("../../assets/lavanderia1.webp"),
    },
    {
      id: "2",
      name: "International",
      date: "23 de mar",
      rating: 5,
      reason: "buena atencion",
      comment: "Servicio rapido y de buena calidad",
      serviceName: "Servicio de lavado Premium",
      servicePrice: "$15",
      serviceImage: require("../../assets/lavanderia1.webp"),
    },
  ];

  const renderReview = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewName}>{item.name}</Text>
        <Text style={styles.reviewDate}>{item.date}</Text>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
      <View style={styles.reviewFooter}>
        <Image source={item.serviceImage} style={styles.serviceImage} />
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{item.serviceName}</Text>
          <Text style={styles.servicePrice}>{item.servicePrice}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesome
            key={index}
            name={index < item.rating ? "star" : "star-o"}
            size={20}
            color="#ff8c00"
          />
        ))}
        <Text style={styles.reviewReason}>{item.reason}</Text>
      </View>
      {/* <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Reportar</Text>
      </TouchableOpacity> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image source={laundryLogo} style={styles.headerLogo} />
          <View style={styles.headerText}>
            <Text style={styles.laundryName}>Lavanderia Esperanza</Text>
            <Text style={styles.laundryCategory}>Avenida 123</Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingSummary}>
        <Text style={styles.ratingScore}>4.4</Text>
        <View style={styles.starsContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesome
              key={index}
              name={index < 4 ? "star" : "star-o"}
              size={20}
              color="#ff8c00"
            />
          ))}
        </View>
        <Text style={styles.ratingCount}>56 valoraciones</Text>
      </View>

      <View style={styles.ratingDetails}>
        {[
          { stars: 5, count: 36 },
          { stars: 4, count: 9 },
          { stars: 3, count: 8 },
          { stars: 2, count: 1 },
          { stars: 1, count: 2 },
        ].map((item, index) => (
          <View key={index} style={styles.ratingRow}>
            <Text style={styles.starCount}>{item.stars}</Text>
            <View style={styles.ratingBarContainer}>
              <View style={{ ...styles.ratingBar, width: `${(item.count / 56) * 100}%` }} />
            </View>
            <Text style={styles.ratingCount}>{item.count}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.highlightText}>El 73% destaca que el servicio es bueno</Text>

      <FlatList
        data={reviews}
        renderItem={renderReview}
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
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 40
  },
  backButton: {
    marginRight: 15,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  laundryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  laundryCategory: {
    fontSize: 14,
    color: "#666",
  },
  ratingSummary: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  ratingScore: {
    fontSize: 40,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  ratingCount: {
    fontSize: 14,
    color: "#666",
  },
  ratingDetails: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  starCount: {
    width: 20,
    fontSize: 14,
    color: "#666",
  },
  ratingBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  ratingBar: {
    height: "100%",
    backgroundColor: "#ff8c00",
    borderRadius: 5,
  },
  highlightText: {
    fontSize: 14,
    color: "#007192",
    textAlign: "center",
    paddingVertical: 10,
  },
  flatListContent: {
    padding: 10,
  },
  reviewItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  reviewDate: {
    fontSize: 12,
    color: "#666",
  },
  reviewComment: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  reviewFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  serviceImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  servicePrice: {
    fontSize: 12,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewReason: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
  reportButton: {
    alignSelf: "flex-end",
    backgroundColor: "#D32F2F",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  reportButtonText: {
    fontSize: 12,
    color: "#fff",
  },
});
