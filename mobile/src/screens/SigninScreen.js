import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

const SigninScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = () => {
    //FAÇA A VERIFICAÇÃO SE O EMAIL E SENHA CONTÉM @gmail ou @hotmail
    //Se quiser apagar faça então o nescessário eu não sabia se vocês preferem colocar no front ou no back isso.
    if (email !== '' || password !== '') {
      setError('Email ou senha incorreta. Tente novamente');
    } else {
      setError('');
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/foodiego.png')}
        style={styles.image}
      />
      
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.customButton} onPress={handleSignin}>
        <Text style={styles.customButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.link}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.linkText}>Voltar para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  image: {
    width: 390,
    height: 344,
    marginTop: -265,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: 390, 
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  customButton: {
    backgroundColor: '#BACEEB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#98AED1',
    width: 390, 
  },
  customButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    marginBottom: 20,
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 8,
    width: 390,
    alignItems: 'center',
  },
  errorText: {
    color: '#721c24',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: 'blue',
  },
});

export default SigninScreen;
