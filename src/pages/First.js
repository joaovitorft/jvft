
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';


export default function First({ navigation }) {
  
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const [limparCampos, setLimparCampos] = useState(false);
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleLimpar = () => {
    setNome("");
    setAltura("");
    setPeso("");
    setLimparCampos(true);
  };

  const handleHistory = () => {
    const data = {
      nome,
      altura,
      peso
    };

    navigation.navigate('Second', { data });
  };

  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);
    const feight = (nome);

    const imc = weight / (height * height);

    if (genero) {
      if(imc < 20.7)
      return Alert.alert(
        "Abaixo do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
      )
      if(imc >= 20.7 && imc <= 26.4)
      return Alert.alert(
        "Peso normal!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e é considerado normal`
      )
      if(imc > 26.4 && imc <= 27.8)
      return Alert.alert(
        "Pouco acima do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta pouco acima do peso`
      )
      if(imc > 27.8 && imc <= 31.1)
      return Alert.alert(
        "Acima do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta acima do peso`
      )
      if(imc > 31.1)
      return Alert.alert(
        "Obeso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta obeso`
      )
    }else {
      if(imc < 19.1)
      return Alert.alert(
        "Abaixo do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
      )
      if(imc >= 19.1 && imc <= 25.8)
      return Alert.alert(
        "Peso normal!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e é considerado normal`
      )
      if(imc > 25.8 && imc <= 27.3)
      return Alert.alert(
        "Pouco acima do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta pouco acima do peso`
      )
      if(imc > 27.3 && imc <= 32.3)
      return Alert.alert(
        "Acima do peso!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta acima do peso`
      )
      if(imc > 32.3)
      return Alert.alert(
        "Obesa!",
        `Ola ${feight} seu IMC é de ${imc.toFixed(2)} e esta obesa`
      )
    }
  };

  return (
    <TouchableWithoutFeedback onPress= {() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.textIMC} >Calculadora de IMC</Text>
      <StatusBar style="auto" />

      <View style={styles.inputGroupRow}>
        <Text style={styles.textFemMas}>Feminino</Text>
        <Switch
          trackColor={{false: '#FFCBCB', true: '#81b0ff'}}
          thumbColor={genero ? '#767577' : '#FFCBCB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text style={styles.textFemMas} >Masculino</Text>
      </View>

      <Text>Nome</Text>
      <TextInput 
      style={styles.input}
      value={nome} 
      onChangeText= {(text) => setNome(text)}/>

      <Text style={styles.textAltPes}>Altura</Text>
      <TextInput 
      keyboardType="number-pad"
      style={styles.input}
      value={altura} 
      onChangeText= {(text) => setAltura(text.replace(/\D/g, ""))}/>
      
      <Text style={styles.textAltPes}>Peso</Text>
      <TextInput
      keyboardType="number-pad"
      style={styles.input}
      value={peso}
      onChangeText= {(text) => setPeso(text.replace(/\D/g, ""))}/>

      <TouchableOpacity onPress={handleCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLimpar} style={styles.button}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHistory} style={styles.button}>
        <Text style={styles.buttonText}>Historicos</Text>
      </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputGroupRow: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16
  },

  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000"
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
    borderColor: "#000000"
  },

  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFF",
    fontSize: 12,
  },

  textIMC:{
    marginBottom: 80,
    color: "#000000",
    fontSize: 26
  },

  textFemMas: {
    paddingLeft: 16,
    paddingRight: 16
  },

    textAltPes: {
      paddingTop: 16,
  }
});