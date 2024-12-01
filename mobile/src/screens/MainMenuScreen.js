import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const MainMenuScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.address}>Endereço</Text>
        <TouchableOpacity style={styles.messageIcon}>
          <Image
            source={require('../../assets/email.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
  },
  messageIcon: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainMenuScreen;
