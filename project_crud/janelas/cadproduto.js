import { SafeAreaView, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

import mascara from '../css/estilo';
import Firebase from '../factory/firebase';

export default function CadProduto() {

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [valor, setValor] = useState('');
  const [qtde, setQtde] = useState('');
  const [pesqprod, setPesqprod] = useState('');

  function InserirProd() {
    Firebase.firestore().collection('tbproduto').add({
      produto: produto,
      marca: marca,
      modelo: modelo,
      valor: valor,
      qtde: qtde,
    })
      .then(() => {
        setProduto('');
        setMarca('');
        setModelo('');
        setValor('');
        setQtde('');
        alert("✅ Produto cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
        alert("❌ Erro ao cadastrar produto.");
      });
  }

  async function Consultapornome() {
    if (!pesqprod.trim()) {
      alert('⚠️ Campo em branco, digite um nome de produto válido.');
      return;
    }
    try {
      const busca = await Firebase.firestore()
        .collection('tbproduto')
        .where('produto', '==', pesqprod)
        .get();

      if (!busca.empty) {
        const doc = busca.docs[0];
        const dados = doc.data();
        setId(doc.id || '');
        setProduto(dados.produto || '');
        setMarca(dados.marca || '');
        setModelo(dados.modelo || '');
        setValor(dados.valor || '');
        setQtde(dados.qtde || '');
      } else {
        alert("❌ Produto não encontrado");
        setProduto('');
        setMarca('');
        setModelo('');
        setValor('');
        setQtde('');
      }
    }
    catch (error) {
      console.error("Erro de conexão com Firebase:", error);
      alert("❌ Erro de conexão com Firebase.");
    }
  }

 return (
    <SafeAreaView style={mascara.fundo}>
      <Text style={mascara.titulos}>Cadastro de Produto</Text>
      <TextInput
        placeholder="Digite o nome do produto para pesquisar"
        style={mascara.input}
        value={pesqprod}
        onChangeText={setPesqprod}
      />

      <Button title="Pesquisar" onPress={Consultapornome} />
      <TextInput
        placeholder="Codigo do produto"
        style={mascara.input}
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Digite o nome do produto"
        style={mascara.input}
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        placeholder="Digite o modelo do produto"
        style={mascara.input}
        value={modelo}
        onChangeText={setModelo}
      />
      <TextInput
        placeholder="Digite a marca do produto"
        style={mascara.input}
        value={marca}
        onChangeText={setMarca}
      />
      <TextInput
        placeholder="Digite a quantidade do produto"
        style={mascara.input}
        value={qtde}
        onChangeText={setQtde}
      />
      <TextInput
        placeholder="Digite o valor do produto"
        style={mascara.input}
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Gravar" onPress={InserirProd} />

    </SafeAreaView>
  );
}