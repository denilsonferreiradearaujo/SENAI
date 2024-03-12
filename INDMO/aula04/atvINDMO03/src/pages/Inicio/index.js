import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, View } from 'react-native'

const logo = require('../../../assets/logo-senai.png')

export default function Inicio() {
    return (
        <SafeAreaView style={styles.styleInicio}>
            <View style={styles.styleImage}>
                <Image source={logo} style={{width:400, height:110}}></Image>
            </View>
            <View style={styles.Conteudo}>
                <Text style={styles.Description}>Denilson Ferreira de Araujo</Text>
                <Text style={styles.Description}>Sumaré, 30/01/2024</Text>
                <Text style={styles.Description}>Escola SENAI Celso Charuri</Text>
                <Text style={styles.Description}>Técnico em Desenvolvimento de Sistemas</Text>
                <Text style={styles.Description}>INDMO - Interface para Dispositivos Móveis</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleInicio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    styleImage:{
        paddingBottom: 200,
        
    },

    Conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },

    Description: {
        fontSize: 18,
        marginBottom: 30,
        color: '#333',
        fontWeight: 'bold',
      },

})