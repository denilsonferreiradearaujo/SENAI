import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Inicio from "../pages/Inicio";
import Cursos from "../pages/Cursos";
import Contato from "../pages/Contato";
import StackRoutes from './stackRoutes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator

      screenOptions={{
        headerShown: false, // Esconder o cabeçalho das telas
        tabBarActiveTintColor: '#FF0000', // Cor da letra quando ativada
        tabBarInactiveTintColor: '#333', // Cor da letra quando desativada
        tabBarHideOnKeyboard:  true, // Oculta a aba ao digitar no celular
        tabBarShowLabel: false, // Mostrar ou não as labels dos ícones
        // tabBarBackground:'red',
        tabBarStyle: {
          backgroundColor: '#D3D3D3', // Cor de fundo do Tabs
        },
      }}
      >

        <Tab.Screen
          name='Inicio'
          component={Inicio}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name='home' color={color} size={size} />
            }
          }}
        />

        <Tab.Screen
          name='Cursos'
          component={StackRoutes}
          options={{
            tabBarLabel:'Cursos',
            tabBarIcon:({color, size})=>{
              return <FontAwesome name="book" color={color} size={size}/>
            
            }
          }}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarLabel: 'Contato',
            // Retira o Header na tela de contato
            headerShown:false,
            tabBarIcon:({color, size})=>{
              return <FontAwesome name="phone" color= {color} size={size}/>;
            }
          }}
        />

      </Tab.Navigator>
  
  )
}