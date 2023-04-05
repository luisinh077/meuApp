import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './Styles.js';

const TelaInicial = () => {
  return (
    <View style={[styles.body]}>
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.imageBG}
        blurRadius={4}>
        <LinearGradient
          colors={['#000000de', '#0e0e0ecf', '#0a0a0adf', '#000000df']}
          style={styles.teste}
        />
        {/* <View style={styles.teste}> */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/vacine.png')}
            style={styles.image}
          />
          <Text style={styles.titleHeader}>My Health</Text>
        </View>

        <View style={styles.subTitle}>
          <Text style={styles.titleSub}>
            Controle as suas vacinas e fique seguro
          </Text>
        </View>

        <View style={[styles.inputContainer, styles.shadowProp]}>
          <View style={styles.containerInput}>
            <Text style={styles.textInput}>E-mail </Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.textInput}>Senha </Text>
            <TextInput style={styles.input} keyboardType="visible-password" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Criar minha conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForget}>
            <Text style={styles.buttonTextForget}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default TelaInicial;
