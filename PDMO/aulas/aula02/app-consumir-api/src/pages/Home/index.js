import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';
// import { SafeAreaView } from '@react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Home () {
    
    const navigation = useNavigation();

    const navegaPequisaID = () => {
        navigation.navigate('DetalhesCliente');
    }

    const navegaNovoCliente = () => {
        navigation.navigate('NovoCliente');
    }

    const navegaTodosClientes = () => {
        navigation.navigate('TodosClientes');
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Text>Sejam Bem Vindos!</Text>
            <Button title= 'Abrir pesquisa por ID' onPress={navegaPequisaID}/>
            <Button title= 'Criar novo Cliente' onPress={navegaNovoCliente}/> 
            <Button title= 'Exibir todos os clientes' onPress={navegaTodosClientes}/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
 
});