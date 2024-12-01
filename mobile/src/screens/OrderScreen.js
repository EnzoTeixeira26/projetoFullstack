import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();
  const [orderItems, setOrderItems] = useState([
    { id: '1', name: 'Prato 1', price: 15.00 },
    { id: '2', name: 'Prato 2', price: 20.00 },
    { id: '3', name: 'Prato 3', price: 18.00 },
  ]);

  const removeItem = (id) => {
    setOrderItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orderItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - R${item.price}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.suggestionsText}>Sugestões</Text>
      <View style={styles.suggestionsContainer}>
        <TouchableOpacity style={styles.suggestionButton}>
          <Image
            source={require('../../assets/sugestao1.png')}
            style={styles.suggestionImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.suggestionButton}>
          <Image
            source={require('../../assets/sugestao2.png')}
            style={styles.suggestionImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.suggestionButton}>
          <Image
            source={require('../../assets/sugestao3.png')}
            style={styles.suggestionImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.totalText}>Valor Total: R${calculateTotal()}</Text>
      <TouchableOpacity style={styles.finalizeButton} onPress={() => navigation.navigate('Finalizando Compra')}> 
        <Text style={styles.finalizeButtonText}>Finalizar Compra!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#ff6666',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  suggestionsText: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  suggestionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  suggestionButton: {
    width: '30%',
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionImage: {
    width: '80%',
    height: '80%',
    borderRadius: 15,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 30,
  },
  finalizeButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  finalizeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
