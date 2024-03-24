import HomeScreen from "./Home";
import InfoNextDays from "./NextDays";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name="HomeScreen"
          component={HomeScreen}
        />

        <Tab.Screen 
          name="inforNextDays"
          component={InfoNextDays}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
