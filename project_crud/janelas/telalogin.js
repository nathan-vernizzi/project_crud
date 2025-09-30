import {SafeAreaView,Text,TextInput,Button,View,Alert} from 'react-native';

import {useState} from 'react';

import mascara from '../css/estilo';

export default function TelaLogin({navigation}){
  const[email,setEmail] = useState();
  const[senha,setSenha] = useState();

function acesso(){
  if(email==="adm@g" && senha==="123"){
      navigation.navigate("Menu");
  }else{
     alert("E-mail e senha incorretos!");
  }
}

  return(
    <SafeAreaView style={mascara.fundo}>
           <Text style={mascara.titulos}>Acesso ao sistema</Text>
           <View style={mascara.caixa}>
                <TextInput style={mascara.input} placeholder="Digite seu E-mail"
                value={email} onChangeText={setEmail}
                />
                <TextInput placeholder="Digite sua senha"
                value={senha} onChangeText={setSenha} style={mascara.input}
                secureTextEntry
                />
                <Button title="Acessar" onPress={acesso}/>
           </View>
    </SafeAreaView>
  )
}