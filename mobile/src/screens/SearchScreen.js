import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('../../assets/lupa.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
        />
      </View>

      <Text style={styles.text}>Talvez você gostaria de experimentar...</Text>

      <View style={styles.buttonContainer}>
        {[...Array(16)].map((_, index) => (
          <TouchableOpacity key={index} style={styles.squareButton}>
            <Text style={styles.buttonText}>Prato {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('MainMenu')} 
        >
            <Image
                source={require('../../assets/home.png')}
                style={styles.navIcon}
            />
            <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Search')} 
        >
            <Image
                source={require('../../assets/lupa.png')}
                style={styles.navIcon}
            />
            <Text style={styles.navText}>Busca</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.navItem}
            onPress={() => console.log("Página de pedidos")}
        >
            <Image
                source={require('../../assets/order.png')}
                style={styles.navIcon}
            />
            <Text style={styles.navText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.navItem}
            onPress={() => console.log("Página de perfil")}
        >
            <Image
                source={require('../../assets/profile.png')}
                style={styles.navIcon}
            />
            <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  filterButton: {
    padding: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginLeft: 10,
    paddingLeft: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  squareButton: {
    width: '48%',
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomNav: {
    justifyContent:'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop:70,
    right:23,
    width: '100vw',
    height: 70,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
});

export default SearchScreen;
