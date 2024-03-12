import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  
  // function Clickhere (){
  //   alert('Botão foi clicado!');
  // };
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá mundo!</Text>
      <Text>Meu primeiro App Mobile!!!</Text>
      <Button style={styles.borda} title="Clique em mim" onPress={()=>Alert.alert('Seja Bem Vindo!')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#fff',
  },
  borda:{
    borderRadius: '20px',
  },
})

