import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, SafeAreaView, FlatList } from 'react-native';
import api from '../../services/api/api';

export default function TodosClientes() {
    let [flatListClientes, setFlatlistClientes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const exibeAlert = () => {
        setShowAlert(true);
    };

    const listarClientes = async () => {
        try {
        
            const response = await api.get('/clientes')
                .catch(function (error) {
                    if (error.response){
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }else if (error.request){
                        if((error.request._response).includes('Failed')){
                            console.log('Erro de conexão com a API');
                        }
                    } else {
                        console.log(error.message);
                    }
                    console.log(error.config);
            });

        if (response != undefined) {
            if(response.data.length > 0){
                let temp = [];
                for (let i = 0; i < response.data.length; i++) {
                    temp.push(response.data[i]);
                    setFlatlistClientes(temp)            
                }
                temp= [];
            }else {
                setAlertMessage('Nenhum registro foi localizado!')
                exibeAlert();
                return;
            }
        }

        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarClientes();
    }, [])

    let listViewItem = (item) => {
        return(
            <View style={styles.modeloCard}>
                <Text style={styles.textHeader}>ID</Text>
                <Text style={styles.textValue}> {item.id} </Text>

                <Text style={styles.textHeader}>Nome</Text>
                <Text style={styles.textValue}> {item.nome} </Text>

                <Text style={styles.textHeader}>Idade</Text>
                <Text style={styles.textValue}> {item.idade} </Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1}}>
            <View>
                <FlatList 
                    style={{marginTop: 20}}
                    contentContainerStyle={{paddingHorizontal: 20}}
                    data={flatListClientes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => listViewItem(item)}
                />
            </View>

            {showAlert && (
                Alert.alert(
                    'Atenção',
                    alertMessage,
                    [
                        {text:'OK', onPress: () => setShowAlert(false)}
                    ]
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    modeloCard: {
        backgroundColor: '#c4f092',
        marginBottom: 30,
        padding: 15,
        borderRadius: 10,
        elevation: 8,
    },
    textHeader: {
        color: '#111',
        fontSize: 12,
        fontWeight: 'bold',
    },
    textValue: {
        color: 'black',
        fontSize: 18,
    },
});