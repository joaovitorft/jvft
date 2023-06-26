import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';

export default function Historico() {

    const [nome1, setNome1] = useState("");
    const [nome2, setNome2] = useState("");
    const [nome3, setNome3] = useState("");
    const [peso1, setPeso1] = useState("");
    const [peso2, setPeso2] = useState("");
    const [peso3, setPeso3] = useState("");
    const [altura1, setAltura1] = useState("");
    const [altura2, setAltura2] = useState("");
    const [altura3, setAltura3] = useState("");




  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal} >Historicos de registros</Text>
      <StatusBar style="auto" />

        <View style={styles.inputGroupRow}>
        <Text style={styles.paddingLeftRight} >Nome</Text>
        <Text style={styles.paddingLeftRight}>Altura</Text>
        <Text style={styles.paddingLeftRight}>Peso</Text>
        </View>

        <View style={styles.inputGroupRow}>
          <TextInput 
          value={nome1} 
          style={styles.input}
          onChangeText= {(text) => setNome1(text)}/>
          <TextInput 
          value={altura1} 
          style={styles.input}
          onChangeText= {(text) => setAltura1(text)}/>
          <TextInput 
          value={peso1}
          style={styles.input}
          onChangeText= {(text) => setPeso1(text)}/>
        </View>

        <View style={styles.inputGroupRow}>
        <Text style={styles.paddingLeftRight} >Nome</Text>
        <Text style={styles.paddingLeftRight}>Altura</Text>
        <Text style={styles.paddingLeftRight}>Peso</Text>
        </View>

        <View style={styles.inputGroupRow}>
          <TextInput 
          value={nome2} 
          style={styles.input}
          onChangeText= {(text) => setNome2(text)}/>
          <TextInput 
          value={altura2}
          style={styles.input}
          onChangeText= {(text) => setAltura2(text)}/>
          <TextInput 
          value={peso2}
          style={styles.input}
          onChangeText= {(text) => setPeso2(text)}/>
        </View>

        <View style={styles.inputGroupRow}>
        <Text style={styles.paddingLeftRight} >Nome</Text>
        <Text style={styles.paddingLeftRight}>Altura</Text>
        <Text style={styles.paddingLeftRight}>Peso</Text>
        </View>

        <View style={styles.inputGroupRow}>
          <TextInput 
          value={nome3} 
          style={styles.input}
          onChangeText= {(text) => setNome3(text)}/>
          <TextInput 
          value={altura3}
          style={styles.input}
          onChangeText= {(text) => setAltura3(text)}/>
          <TextInput 
          value={peso3}
          style={styles.input}
          onChangeText= {(text) => setPeso3(text)}/>
        </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ultimos Historicos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
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
