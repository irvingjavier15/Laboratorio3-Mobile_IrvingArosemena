import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderInProgress = () => {
    const navigation = useNavigation();
    
    const [orderStatus, setOrderStatus] = useState([
        { status: 'Pedido Recibido', time: '8:30 am, Jan 31, 2023', completed: true },
        { status: 'En camino', time: '10:23 am, Jan 31, 2023', completed: true },
        { status: 'Entregado', time: null, completed: false }
    ]);

    const cancelOrder = () => {
        Alert.alert('Cancelar Pedido', '¿Estás seguro de que deseas cancelar el pedido?', [
            { text: 'No', style: 'cancel' },
            { text: 'Sí', onPress: () => console.log('Pedido cancelado') }
        ]);
    };

    const renderStatusItem = (item, index) => {
        const { status, time, completed } = item;
        return (
            <View key={index} style={styles.statusItem}>
                <View style={[styles.statusIndicator, completed ? styles.completed : styles.pending]} />
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusText}>{status}</Text>
                    {time && <Text style={styles.statusTime}>{time}</Text>}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#007192" />
            </TouchableOpacity>
            <Text style={styles.title}>Estado del Pedido</Text>
            <View style={styles.statusList}>
                {orderStatus.map((item, index) => renderStatusItem(item, index))}
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={() => console.log('Delivery confirmed')}>
                <Text style={styles.confirmButtonText}>Confirmar Entrega</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={cancelOrder}>
                <Text style={styles.cancelButtonText}>Cancelar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 60
    },
    statusList: {
        width: '100%',
        marginBottom: 20,
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusIndicator: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
    },
    completed: {
        backgroundColor: '#007192',
    },
    pending: {
        backgroundColor: '#e0e0e0',
    },
    statusTextContainer: {
        flex: 1,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusTime: {
        fontSize: 14,
        color: '#888',
    },
    confirmButton: {
        backgroundColor: '#d9534f',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#007192',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OrderInProgress;
