import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinalizarCompraScreen = ({ storeName, tempoEstimado }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>Pedido realizado com sucesso!</Text>
      <Text style={styles.orderInfo}>
        Pedido da loja {storeName} chegará em:
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{tempoEstimado}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d7d5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  orderInfo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  timeContainer: {
    backgroundColor: '#f1c40f',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FinalizarCompraScreen;
