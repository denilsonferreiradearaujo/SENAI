import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView, Platform, Pressable, Alert, Button, TextInput } from 'react-native';
import Saudacao from './components/Saudacao';

const logo = require('./assets/favicon.png')

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.container}>

          {/* <View style={styles.separador}></View> */}

          <View style={[styles.lightGreenBox, styles.padraoCaixa]}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
              }}
            />
          </View>

          <View style={styles.LogoSaudacao}>
            <Saudacao name={'Denilson Araujo'}></Saudacao>
          </View>
          <Image source={logo} ></Image>

          <View style={styles.separador}></View>

          <View>
            <Text style={styles.labelInput}>Campo 1</Text>
            <TextInput placeholder='Campo 1' style={styles.Input}></TextInput>
            <Text style={styles.labelInput}>Campo 2</Text>
            <TextInput placeholder='Campo 2' style={styles.Input}></TextInput>
          </View>

          <View style={styles.AlinharHorizontal}>
            <Button title='Botão 1' color='orange' onPress={() => Alert.alert('Titulo do alert', 'Eu sou um alert!')}></Button>
            <Button title='Botão 2' color='green' onPress={() => Alert.alert('Titulo do alert', 'Eu sou um alert!')}></Button>
            <Button title='Botão 3' color='blue' onPress={() => Alert.alert('Titulo do alert', 'Eu sou um alert!',
              [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Botão cancelar pressionado!')
                },
                {
                  text: 'OK',
                  onPress: () => console.log('Botão OK pressionado!')
                }
              ])}></Button>
          </View>



          <View style={styles.separador}></View>

          

          {/* <View style={styles.separador}></View> */}

          <View style={[styles.lightBlueBox, styles.padraoCaixa]}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.It has survived not only five centuries, but also the leap into electronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.It has survived not only five centuries, but also the leap into electronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.It has survived not only five centuries, but also the leap into electronic typesetting.
            </Text>
          </View>

          <View style={styles.separador}></View>

          <View style={styles.Button}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'gray' : 'red'
                },
                styles.Button,
              ]}
              onPress={() => Alert.alert('Botão pressionado!')}>
              <Text>Cancelar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'gray' : 'green'
                },
                styles.Button,
              ]}
              onPress={() => Alert.alert('Botão pressionado!')}>
              <Text>Salvar</Text>
            </Pressable>
          </View>

        </View>

      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,

  },

  container: {
    backgroundColor: '#159',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  LogoSaudacao: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  lightGreenBox: {
    backgroundColor: 'lightgreen',
  },

  lightBlueBox: {
    backgroundColor: 'lightblue',
  },

  padraoCaixa: {
    width: '94%',
    height: '15%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  styleText: {
    color: '#359',
    fontSize: 17,
  },

  image: {
    marginTop: 10,
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },

  Button: {
    // flex: 1,
    flexDirection: 'row',
    marginBottom: 200,
    padding: 10,
    gap: 10,
    borderRadius: 2,
  },

  AlinharHorizontal: {
    // flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  separador: {
    width: '100%',
    backgroundColor: 'gray',
    height: 1,
    margin: 5,
  },

  Input: {
    width: 300,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  labelInput: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 1,
  },

});
