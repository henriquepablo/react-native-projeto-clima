import React, {useState} from 'react';
   import { View, Text, ScrollView, TextInput, Image} from 'react-native';
   import styles from '../styles/style';
   import LinearGradient from 'react-native-linear-gradient';

   const InfoNextDays = () => {

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
                <TextInput placeholder='Pesquise por uma localidade' style={style}  onFocus={custmOnFocus} onBlur={custmOnBlur}/>
                <Image source={require('../imgs/search.png')} style={styles.iconSearch}/>
                <Image source={require('../imgs/circle-x.png')} style={styles.iconCircleX} />
              </View>
              
              <View style={styles.body}>
                <LinearGradient colors={['#1786ED', '#91DCFF']} style={styles.gradientScreenTwo} start={{x:0.5, y:0}}>
                  <View>
                    <View style={styles.ViewLocalidade}>
                      <Image source={require('../imgs/map-pin.png')} style={styles.imageMap}/>
                      <Text style={styles.textLocalidade}>São Paulo</Text>
                    </View>
                    <Text style={styles.infoData}>18 de março de 2024 às 19:30</Text>
                  </View>

                  <View style={styles.viewDays}>
                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Segunda-feira</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Terça-feira</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Quarta-feira</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Quinta-feira</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Sexta-feira</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Sábado</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.dayWeek}>
                        <Text style={{width: 100}}>Domingo</Text>
                        <Image source={require('../imgs/iconChuva.png')}/>
                        <Image source={require('../imgs/blueCloud.png')}/>
                        <Image source={require('../imgs/cloudAndMonn.png')}/>
                        <Text>25° 35°</Text>
                    </View>

                    <View style={styles.previousRain}>
                      <View style={styles.rain}>
                        <Image source={require('../imgs/thermometer-sun.png')} />
                        <Text>Previsão de chuva</Text>
                      </View>

                      <View style={styles.viewRain}>
                          <Text style={styles.textRain}>Previsão de chuva para essa semana</Text>
                          <Text style={styles.percentage}>40%</Text>
                      </View>
                      
                    </View>
                  </View>

                </LinearGradient>
              </View>


            </ScrollView>

       </View>
     );
   };

export default InfoNextDays;