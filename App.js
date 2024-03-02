// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootComponent from './components/RootComponent/RootComponent';
import D_pickpup from './components/D_pickpup';
import  {GestureHandlerRootView} from "react-native-gesture-handler";
const Stack=createNativeStackNavigator(); 

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="D_pickup" component={D_pickpup} options={{ headerShown: false }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
