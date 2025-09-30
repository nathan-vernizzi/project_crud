import{NavigationContainer} from 
'@react-navigation/native';

import{createStackNavigator} from 
'@react-navigation/stack';


import Menu from './janelas/menu';
import TelaLogin from './janelas/telalogin';

import CadProduto from './janelas/cadproduto';
import CadCliente from './janelas/cadcliente';

const Stack = createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
             <Stack.Screen name="Login" component={TelaLogin}
             options={{headerShown:false}} />
             <Stack.Screen name="Menu" component={Menu} 
             options={{headerShown:false}}/>
           
             <Stack.Screen name="cadprod" 
             component={CadProduto} 
             options={{headerShown:false}}
             />

              <Stack.Screen name="CadCliente" 
             component={CadCliente} 
             options={{headerShown:false}}
             />
        </Stack.Navigator>
    </NavigationContainer>
  )
}



