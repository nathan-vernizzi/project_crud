import {SafeAreaView,Text,TextInput,TouchableOpacity,ScrollView,Button} from 'react-native';

import {useState} from 'react';


import { MaterialCommunityIcons } 
from '@expo/vector-icons';

import mascara from '../css/estilo';

import Firebase from '../factory/firebase';

export default function CadCliente(){
 const[id,setId]=useState('');
 const[nome,setNome]=useState('');
 const[email,setEmail]=useState('');
 const[idade,setIdade]=useState('');
 const[clientepesquisa,setClientepesquisa] = useState(''); 

function InserirCliente(){
    Firebase.firestore().collection('tbcliente').add({
      nome:nome,
      idade:idade,
      email:email,
     
    })
    setNome('');
    setIdade('');
    setEmail('');
   
    alert("Dados cadastrado com sucesso!");
}

async function Consultapornome(){
  if(!clientepesquisa.trim()){
    alert('Campo em branco, digite um nome completo');
    return
  }
  try{
     const busca = await Firebase.firestore().
     collection('tbcliente').
     where('nome','==',clientepesquisa)
     .get();

     if(!busca.empty){
        const doc = busca.docs[0];
        const dados = doc.data();
        setId(doc.id || '');
        setNome(dados.nome || '');
        setIdade(dados.idade || '');
        setEmail(dados.email || '');
     }else{
        alert("Cliente não encontrado");
        setNome('');
        setClientepesquisa('');
        setIdade('');
        setEmail('');
     }
  }
  catch(error){
     alert("Erro de conexão");
     console.error("Erro de conexão com firebase",
     error);
  }
}



  return(
    <SafeAreaView style={mascara.fundo}>
       <ScrollView vertical>
     

           <Text style={mascara.titulos}>Cadastro de Cliente</Text>

            <TouchableOpacity 
            style={mascara.btn} 
            onPress={InserirCliente}>
                  <MaterialCommunityIcons 
                  name="floppy"
                  color={color='#000'}
                  size={size=30} 
                  />
            </TouchableOpacity>

          <TextInput style={mascara.input} placeholder="Digite o nome completo"
          value={clientepesquisa} onChangeText={setClientepesquisa}/>
          <Button title="Pesquisa" onPress={Consultapornome}/>   
           <TextInput style={mascara.input} placeholder="Id do cliente" value={id} onChangeText={setId}/>
           <TextInput style={mascara.input} placeholder="Digite o nome do cliente" value={nome} onChangeText={setNome} />
           <TextInput style={mascara.input} placeholder="Digite a idade do cliente" onChangeText={setIdade} value={idade}/>
           <TextInput style={mascara.input} placeholder="Digire o E-mail do cliente" onChangeText={setEmail} value={email}/>
          
           
           
    </ScrollView>
    </SafeAreaView>
  )
}
