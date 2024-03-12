import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página Home',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            },
            // headerShown:false
          }}

        />

        <Stack.Screen
          name='Sobre'
          component={Sobre}
          options={{
            title: 'Sobre Nós',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            }
          }}
        />

        <Stack.Screen
          name='Contato'
          component={Contato}
          options={{
            title: 'Contatos',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            }
          }}
        />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
