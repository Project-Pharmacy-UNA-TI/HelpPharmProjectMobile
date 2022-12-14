import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Pharmacies from '../pages/Pharmacies'
import UserPage from '../pages/UserPage'
import Medicines from '../pages/Medicines'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={Welcome}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name="Register" 
                component={Register}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name="Pharmacies" 
                component={Pharmacies}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="UserPage"
                component={UserPage}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Medicines"
                component={Medicines}
                options={{ headerShown: false}}
                
            />
        </Stack.Navigator>
    )
}