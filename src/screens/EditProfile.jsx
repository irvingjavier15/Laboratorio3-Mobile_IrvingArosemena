import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Edit = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdateProfile = () => {
        // Aquí iría la lógica para actualizar el perfil
        console.log("Perfil actualizado");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Actualizar Perfil</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={secondName}
                onChangeText={setSecondName}
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                value={age}
                onChangeText={setAge}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Número de Teléfono"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
                <Text style={styles.buttonText}>Actualizar Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007192',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Edit;
