import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import {StackActions, useNavigation} from '@react-navigation/native'

export default function Contato(){
    const navigation = useNavigation();
    const voltarHome = () => {
        navigation.dispatch(StackActions.popToTop())
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text>Tela Contato</Text>
            <Button title='Voltar' onPress={()=> navigation.goBack()}></Button>
            {/* <Button title='Voltar para Home' onPress={voltarHome}></Button> */}
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