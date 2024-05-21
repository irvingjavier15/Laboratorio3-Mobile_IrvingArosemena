import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ShoppingCart = () => {
    const cartItems = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
    );

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const shippingDetails = [
        { id: 1, label: 'Método de Envío:', value: 'Envío Estándar' },
        { id: 2, label: 'Dirección de Envío:', value: 'Calle Principal, Ciudad, País' },
        { id: 3, label: 'Método de Pago:', value: 'PayPal' },
    ];

    const renderShippingItem = ({ item }) => (
        <View style={styles.shippingItem}>
            <Text style={styles.shippingLabel}>{item.label}</Text>
            <Text style={styles.shippingValue}>{item.value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de Compras</Text>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.cartList}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalAmount}>${totalPrice}</Text>
            </View>
            <Text style={styles.subtitle}>Detalles del Envío y Método de Pago</Text>
            <FlatList
                data={shippingDetails}
                renderItem={renderShippingItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.shippingDetailsContainer}
            />
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Realizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
    },
    cartList: {
        flexGrow: 1,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007192',
    },
    checkoutButton: {
        backgroundColor: '#007192',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#007192',
    },
    shippingDetailsContainer: {
        flexGrow: 1,
    },
    shippingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    shippingLabel: {
        fontSize: 16,
    },
    shippingValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007192',
    },
});

export default ShoppingCart;
