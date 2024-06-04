import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LeaveReview({ navigation }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState("");

  
  const submitReview = () => {
    
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Deja una Opinión</Text>
      <View style={styles.ratingContainer}>
        <Text>Calificación: {rating}</Text>
        <View style={styles.ratingStars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setRating(star)}
              style={styles.starButton}
            >
              <AntDesign
                name={star <= rating ? "star" : "staro"}
                size={24}
                color={star <= rating ? "#FFD700" : "#CCCCCC"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Motivo o Asunto"
        value={reason}
        onChangeText={(text) => setReason(text)}
      />
      <TextInput
        style={styles.inputReview}
        placeholder="Escribe tu opinión aquí"
        multiline
        value={review}
        onChangeText={(text) => setReview(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
        <Text style={styles.submitButtonText}>Enviar Opinión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30
  },
  ratingStars: {
    flexDirection: "row",
  },
  starButton: {
    marginHorizontal: 2,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputReview:{
    width: "100%",
    height: 100,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
