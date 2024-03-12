import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Cursos() {

    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate('Detalhes',{curso:'Técnico em Desenvolvimento de Sistemas',descricao:'Focado em programas de linguagem WEB e Mobile. Trabalha alguns tipo de linguagem SQL e montagem de banco de dados em geral, também trabalha-se com repositórios em Núvem  como o GitHub.'})
    }

    return (
        <SafeAreaView style={styles.styleCursos}>
            <Text style={styles.TitlePrincipal}>Cursos</Text>
            <View style={styles.Caixa}>

                <Text style={styles.Title}>Técnico em Desenvolvimento de Sistemas</Text>
                <Button title='Técnico em Desenvolvimento de Sistemas' onPress={navegaDetalhes}></Button>
                
            </View>
            <View style={styles.Caixa}>
                <Text style={styles.Title}>Business Intelligence - PowerBI</Text>
                <Text style={styles.Description}>Neste curso é ensinado como manipular dados com PowerQueri, criando Tabelas, e trazelo em modelos gráficos onde possa ser compatilhado e facilitar a tomada de decisões baseadas em números</Text>
            </View>
            <View style={styles.Caixa}>
                <Text style={styles.Title}>EletrIcista de Manutenção Eletroeletrônica</Text>
                <Text style={styles.Description}>Com o foco em desenvolver esquemas elétricos e automatizados, utilizando eletropneumática e eletroeletrônica. Neste curso de Aprendizagem Industrial também é incluso a integração ao mundo de eletrônica Digital e Analógica.</Text>
            </View>
                        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleCursos: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    TitlePrincipal: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    Caixa: {
        marginTop: 10,
        paddingTop: 15,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
    },

    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
      },

    Description: {
        fontSize: 16,
        marginBottom: 15,
        color: 'black',
      },
})