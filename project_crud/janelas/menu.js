import {NavigationIndependentTree} 
from '@react-navigation/native';

import{createBottomTabNavigator} from
'@react-navigation/bottom-tabs';

import Home from './home';
import CadProduto from './cadproduto';
import Cadcliente from './cadcliente';


import { MaterialCommunityIcons } 
from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Menu(){
  return(
    <NavigationIndependentTree>
         <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home"    component={Home}
              options={{
                headerShown:false,
                tabBarLabel:'',
                tabBarIcon:({color,size})=>(
                  <MaterialCommunityIcons 
                  name="home-circle-outline"
                  color={color='#0ff'}
                  size={size=30} 
                  />
                ),
              }}
              />
              <Tab.Screen name="CadProduto" component={CadProduto}
               options={{
                headerShown:false,
                tabBarLabel:'',
                tabBarIcon:({color,size})=>(
                  <MaterialCommunityIcons 
                  name="cart-variant"
                  color={color='#00f'}
                  size={size=30} 
                  />
                ),
              }}
              
              
              
              />
              <Tab.Screen name="CadCliente" component={Cadcliente}
              
               options={{
                headerShown:false,
                tabBarLabel:'',
                tabBarIcon:({color,size})=>(
                  <MaterialCommunityIcons 
                  name="card-account-mail-outline"
                  color={color='#00f'}
                  size={size=30} 
                  />
                ),
              }}
              
              />
         </Tab.Navigator>
    </NavigationIndependentTree>
  )
}
