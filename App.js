import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'))

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>
      <Text style={styles.frase}>" Está é minha primeira frase do biscoito! "</Text>
      <TouchableOpacity style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230
  },
  frase:{
    fontSize: 20,
    color: '#dd7b22',
    textAlign: 'center',
    margin: 30,
    fontStyle: 'italic'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});