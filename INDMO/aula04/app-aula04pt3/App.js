import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

// Navegação tipo pilha, uma pagina sobre a outra
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#119',
          tabBarInactiveTintColor: '#222',
          tabBarStyle: {
            backgroundColor: '#969'
          }
        }}>

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página Home',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            },
            // headerShown:false
            tabBarIcon: ({color, size}) => {
              return <FontAwesome name='home' color={color} size={size}></FontAwesome>
            },
          }}

        />

        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            title: 'Sobre Nós',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome name='about' color={color} size={size}></FontAwesome>
            },
          }}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            title: 'Contatos',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome name='phone' color={color} size={size}></FontAwesome>
            },
          }}
        />

      </Tab.Navigator>
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
