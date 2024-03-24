import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from '../styles/style';
import { useState } from 'react';

const HomeScreen = () => {

  const [style, setStyle] = useState(styles.input);

  const custmOnFocus = () => {
    setStyle(styles.inputOnFocus)
  }

  const custmOnBlur = () => {
    setStyle(styles.input);
  }

  return (
    <View>
        <View style={styles.header}>
          <TextInput placeholder='Pesquise por uma localidade' style={style}  onFocus={custmOnFocus} onBlur={custmOnBlur}/>
          <Image source={require('../imgs/search.png')} style={styles.iconSearch}/>
          <Image source={require('../imgs/circle-x.png')} style={styles.iconCircleX} />
        </View>
        






    </View>
  );
};

export default HomeScreen;