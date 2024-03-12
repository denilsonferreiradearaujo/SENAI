import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Detalhes() {
    const route=useRoute();
    return (
        <SafeAreaView style={[styles.container]}>
            <Text>{route.params?.curso}</Text>
            <Text>{route.params?.descricao}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
    }
})