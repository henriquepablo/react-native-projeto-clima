import HomeScreen from "./Home";
import InfoNextDays from "./NextDays";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image, View } from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#D2F1FF', 
            height: 80, 
            width: 350, 
            alignSelf: 'center', 
            borderRadius: 8, 
            marginBottom: 10}}}>
              
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => {
              
              if (focused){
                return (
                  <View style={{backgroundColor: '#38A9F9', height: 51, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                    <Image source={require('../imgs/home.png')} style={{tintColor: '#fff', padding: 10}}/>
                  </View>
                ); 
              }
              return <Image source={require('../imgs/home.png')} style={{tintColor: '#000', padding: 10}}/>
            }
          }}
        />

        <Tab.Screen 
          name="inforNextDays"
          component={InfoNextDays}
          options={{
            tabBarIcon: ({color, size, focused}) => {
              if (focused) {
                return (
                  <View style={{backgroundColor: '#38A9F9', height: 51, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                    <Image source={require('../imgs/week.png')} style={{tintColor: '#fff', padding: 10}}/>
                  </View>
                );
              }
              return <Image source={require('../imgs/week.png')} style={{tintColor: '#000', padding: 10}}/>
            }
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
