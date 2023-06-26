import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';

export default function Second({ navigation, route }) {

  const { nome, altura, peso } = route.params.data;




  return (
  <View style={styles.container}>
    <Text style={styles.textoPrincipal} >Historicos de registros</Text>
    <StatusBar style="auto" />

      <View style={styles.inputGroupRow}>
      <Text style={styles.paddingLeftRight} >Nome</Text>
      <Text style={styles.paddingLeftRight}>Altura</Text>
      <Text style={styles.paddingLeftRight}>Peso</Text>
      </View>

      <Text>{}</Text>

      <View style={styles.inputGroupRow}>
        <TextInput 
        value={nome} 
        style={styles.input}
        onChangeText= {(text) => setNome(text)}/>
        <TextInput 
        value={altura} 
        style={styles.input}
        onChangeText= {(text) => setAltura(text)}/>
        <TextInput 
        value={peso}
        style={styles.input}
        onChangeText= {(text) => setPeso(text)}/>
      </View>


    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Ultimo Historico</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Editar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('First')} style={styles.button}>
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#D3D3D3',
  alignItems: 'center',
},

textoPrincipal:{
  fontSize: 28,
  marginTop: 80,
  marginBottom: 20
},

button: {
  backgroundColor: "#000000",
  width: "80%",
  height: 54,
  alignItems: 'center',
  justifyContent: "center",
  elevation: 2,
  borderRadius: 8,
  marginTop: 16,
  borderColor: "#000000",
},

  buttonText: {
  fontFamily: "Poppins_600SemiBold",
  color: "#FFF",
  fontSize: 12,
  
},

  input: {
  height: 25,
  width: "30%",
  backgroundColor: "#fff",
  borderRadius: 8,
  justifyContent: "center",
  marginTop: 4,
  borderWidth: 1,
  borderColor: "#000",
},

  inputGroupRow: {
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 16
},

paddingLeftRight:{
  paddingLeft: 32,
  paddingRight:32
},
});
