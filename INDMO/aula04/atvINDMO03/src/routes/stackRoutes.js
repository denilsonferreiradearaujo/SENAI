import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cursos from '../pages/Cursos';
import Detalhes from '../pages/Detalhes/Index';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Cursos'
            component={Cursos}
            />
            <Stack.Screen
            name='Detalhes'
            component={Detalhes}
            />
        </Stack.Navigator>
    )
}