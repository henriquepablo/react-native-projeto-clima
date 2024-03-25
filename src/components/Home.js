import React from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/style';
import { useState } from 'react';

const HomeScreen = () => {

  const [style, setStyle] = useState(styles.input);

  const custmOnFocus = () => {
    setStyle(styles.inputOnFocus);
  }

  const custmOnBlur = () => {
    setStyle(styles.input);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TextInput placeholder='Pesquise por uma localidade' style={style} onFocus={custmOnFocus} onBlur={custmOnBlur} />
          <Image source={require('../imgs/search.png')} style={styles.iconSearch}/>
          <Image source={require('../imgs/circle-x.png')} style={styles.iconCircleX} />
        </View>
        
        <View style={styles.body}> 
          <LinearGradient colors={['#1786ED', '#91DCFF']} style={styles.gradient} start={{x:0.5, y:0}}>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.ViewLocalidade}>
                  <Image source={require('../imgs/map-pin.png')} style={styles.imageMap}/>
                  <Text style={styles.textLocalidade}>São Paulo</Text>
                </View>
                <Text style={styles.infoData}>18 de março de 2024 às 19:30</Text>
              </View>

              <View style={styles.viewTemperatura}>
                  <Image source={require('../imgs/sol.png')}/>
                  <Text style={styles.temperatura}>28°C</Text>
                  <Text style={styles.sensacao}>Sensação térmica de 34º</Text>
              </View>

              <View style={styles.viewCard}>
                  <View style={styles.card}>
                    <Image source={require('../imgs/wind.png')}/>
                    <Text style={styles.dataApi}>5Km/h</Text>
                    <Text style={styles.textCard}>Velocidade Vento</Text>
                  </View>

                  <View style={styles.card}>
                    <Image source={require('../imgs/waves.png')}/>
                    <Text style={styles.dataApi}>6%</Text>
                    <Text style={styles.textCard}>Umidade</Text>
                  </View>

                  <View style={styles.card}>
                    <Image source={require('../imgs/cloud.png')}/>
                    <Text style={styles.dataApi}>50%</Text>
                    <Text style={styles.textCard}>% de chuva</Text>
                  </View>

                  <View style={styles.card}>
                    <Image source={require('../imgs/eye.png')}/>
                    <Text style={styles.dataApi}>5Km</Text>
                    <Text style={styles.textCard}>Visiblidade</Text>
                  </View>
              </View>
          </LinearGradient>

          <View style={styles.viewInfo}>
              <View style={styles.lines}>
                  <Image source={require('../imgs/emoji_nature.png')}/>
                  <Text style={{color: '#3D3D3D', fontFamily: 'Poppins-Regular'}}>Pólen: Nenhum</Text>
              </View>

              <View style={styles.lines}>
                  <Image source={require('../imgs/windAQI.png')}/>
                  <Text style={{color: '#3D3D3D', fontFamily: 'Poppins-Regular'}}>AQI: Insalubre 187</Text>
              </View>

              <View style={styles.lines}>
                  <Image source={require('../imgs/circle-gauge.png')}/>
                  <Text style={{color: '#3D3D3D', fontFamily: 'Poppins-Regular'}}>Corrida: Baixo</Text>
              </View>
              
          </View>
        </View>





        </ScrollView>
    </View>
  );
};

export default HomeScreen;