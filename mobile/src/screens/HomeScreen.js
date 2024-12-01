import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const HomeScreen = (props) => {
  const navigation = props.navigation;

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/foodiego.png')}
        style={styles.image}
      />


      <TouchableOpacity
        style={styles.customButton1}
        onPress={() => {
          navigation.navigate('Signin');
        }}
      >
        <Text style={styles.customButtonText1}>Já tenho uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton2}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text style={styles.customButtonText2}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    gap: 20,
  },
  image: {
    width: 390, 
    height: 344, 
    marginTop: -10, 
  },
  customButton1: {
    backgroundColor: '#f7cfcd',
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dc9a96',
    width: 390, 
  },
  customButtonText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customButton2: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'Black',
    width: 390, 
  },
  customButtonText2: {
    color: 'red',
    fontSize: 16,
  },
});

export default HomeScreen;
