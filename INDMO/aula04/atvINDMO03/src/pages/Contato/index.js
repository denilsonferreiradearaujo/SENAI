import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, View, Alert } from 'react-native'
import {StackActions, useNavigation} from '@react-navigation/native'

export default function Contato() {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Contate-nos</Text>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Mensagem..." multiline />
            </View>
            <View style={styles.Botao}>
                <Button title='Enviar' onPress={() => Alert.alert('Até Logo!!!', 'É uma pazer recebe-lo em nossa página.', 
                [ {
                    text: 'Obrigado',
                    onPress: ()=> navigation.goBack()
                },
                ])}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        marginTop: 200,
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 50,
        color: 'black',
    },

    input: {
        width: 280,
        height: 40,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },

    Botao: {
        marginTop: 20,
        width: 280,
        height: 40,
    }

});
