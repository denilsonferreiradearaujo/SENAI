import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();
    
    function navegaDetalhes(){
        navigation.navigate('Detalhes');
    }
    return(
        <SafeAreaView style={[styles.container]}>
            <Text>Tela Home</Text>
            <Button title='Ir página detalhes' onPress={navegaDetalhes}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
  });