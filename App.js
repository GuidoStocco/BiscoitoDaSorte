import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [frase, setFrase] = useState('')

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.'
  ]

  function quebrarBiscoito(){
    const numeroFrase = Math.floor(Math.random() * frases.length)
    setFrase(' " ' + frases[numeroFrase] + ' " ');
    setImg(require('./src/biscoitoAberto.png'))

    setTimeout(() => {
      setImg(require('./src/biscoito.png'))
      setFrase('')
    }, 2000)
  };

  function reiniciar(){
    setFrase('')
    setImg(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>

      <Text style={styles.frase}> {frase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={reiniciar}>
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