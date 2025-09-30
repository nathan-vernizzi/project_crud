import {SafeAreaView,Text} from 'react-native';

import mascara from '../css/estilo';


export default function Home(){
  return(
    <SafeAreaView style={mascara.fundo}>
           <Text style={mascara.titulos}>Pagina principal</Text>
    </SafeAreaView>
  )
}