import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const userName = 'João Silva';

  const handleButtonPress = (sectionName) => {
    console.log(`Botão de ${sectionName} pressionado!`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{userName}</Text>
        </View>
      </View>

      <View style={styles.sectionsContainer}>
        <View style={styles.section}>
          <TouchableOpacity onPress={() => handleButtonPress('Conversas')}>
            <Text style={styles.sectionText}>Conversas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Notificações')}>
            <Text style={styles.sectionText}>Notificações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Pagamentos')}>
            <Text style={styles.sectionText}>Pagamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Histórico')}>
            <Text style={styles.sectionText}>Histórico</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <TouchableOpacity onPress={() => handleButtonPress('Cupons')}>
            <Text style={styles.sectionText}>Cupons</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Favoritos')}>
            <Text style={styles.sectionText}>Favoritos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <TouchableOpacity onPress={() => handleButtonPress('Ajuda')}>
            <Text style={styles.sectionText}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Configurações')}>
            <Text style={styles.sectionText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Segurança')}>
            <Text style={styles.sectionText}>Segurança</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameContainer: {
    marginLeft: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionsContainer: {
    marginTop: 10,
  },
  section: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 10,
  },
});

export default ProfileScreen;
