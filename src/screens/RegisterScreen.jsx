import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (!firstName || !secondName || !age || !email || !phone || !password || !confirmPassword) {
            alert('Por favor, complete todos los campos');
            return;
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        if (!isChecked) {
            alert('Debe aceptar los términos y condiciones');
            return;
        }
        console.log("Registrando...");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 22, paddingVertical: 10 }}>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.title}>Crear una cuenta</Text>
                    <Text style={styles.subtitle}>Despreocupate del lavado de tu ropa ahora!</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Nombre</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='nombre'
                            placeholderTextColor={"#000"}
                            value={firstName}
                            onChangeText={setFirstName}
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Apellido</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Apellido'
                            placeholderTextColor={"#000"}
                            value={secondName}
                            onChangeText={setSecondName}
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Correo Electronico</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Correo electronico'
                            placeholderTextColor={"#000"}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Numero de Telefono</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='+91'
                            placeholderTextColor={"#000"}
                            keyboardType='numeric'
                            style={[styles.input, { width: '20%' }]}
                        />
                        <TextInput
                            placeholder='Numero de Telefono'
                            placeholderTextColor={"#000"}
                            keyboardType='numeric'
                            value={phone}
                            onChangeText={setPhone}
                            style={[styles.input, { width: '80%' }]}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Contrasena</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Contrasena'
                            placeholderTextColor={"#000"}
                            secureTextEntry={!isPasswordShown}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={styles.eyeIcon}
                        >
                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Confirmar Contrasena</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Confirmar Contrasena'
                            placeholderTextColor={"#000"}
                            secureTextEntry={!isPasswordShown}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={styles.eyeIcon}
                        >
                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? '#000' : undefined}
                    />
                    <Text>Acepto los Terminos y Condiciones</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignup}
                >
                    <Text style={styles.buttonText}>Registrarme</Text>
                </TouchableOpacity>

                <View style={styles.separatorContainer}>
                    <View style={styles.separator} />
                    <Text style={styles.separatorText}>O Inicia sesion con</Text>
                    <View style={styles.separator} />
                </View>

                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={styles.socialButton}
                    >
                        <Image
                            source={require("../../assets/facebook-logo2.png")}
                            style={styles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={styles.socialButton}
                    >
                        <Image
                            source={require("../../assets/google-logo.png")}
                            style={styles.socialIcon}
                            resizeMode='contain'
                        />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={{ fontSize: 16, color: "#000" }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.footerLink}>Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: "#000"
    },
    subtitle: {
        fontSize: 16,
        color: "#000"
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8,
        color: "#000"
    },
    inputContainer: {
        width: "100%",
        height: 48,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 22
    },
    input: {
        width: "100%",
        color: "#000"
    },
    eyeIcon: {
        position: "absolute",
        right: 12
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center'
    },
    checkbox: {
        marginRight: 8
    },
    button: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#007192',
        marginVertical: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: "gray",
        marginHorizontal: 10
    },
    separatorText: {
        fontSize: 14
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginHorizontal: 8
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    footerLink: {
        fontSize: 18,
        color: "#007192",
        fontWeight: "bold",
        marginLeft: 4
    }
});

export default Signup;
