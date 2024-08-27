import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'))

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>
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
  }
});