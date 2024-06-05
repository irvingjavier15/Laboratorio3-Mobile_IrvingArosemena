import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons';

export default function LocationScreen({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setRegion({
      ...region,
      latitude,
      longitude,
    });
    setUserLocation({
      coords: { latitude, longitude },
    });
  };

  const handleSaveLocation = () => {
    if (userLocation) {
      Alert.alert("Location saved!", `Lat: ${userLocation.coords.latitude}, Lon: ${userLocation.coords.longitude}`);
      
    } else {
      Alert.alert("No location selected", "Please select a location on the map.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        region={region}
        onPress={handleMapPress}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            title="Selected Location"
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveLocation}>
        <Text style={styles.saveButtonText}>Guardar Direccion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  map: {
    flex: 1,
  },
  saveButton: {
    position: 'absolute',
    bottom: 40,
    left: '25%',
    width: '50%',
    backgroundColor: '#007192',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
