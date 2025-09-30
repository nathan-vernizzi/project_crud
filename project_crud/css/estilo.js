import{StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
    fundo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDEAD',
    
  },
  titulos: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caixa:{
    width:300,
    height:200,
    backgroundColor:'#ccc',
    alignSelf:'center',
    borderRadius:20,
    
  },
   input:{

    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'#9ac234',
    paddingHorizontal:20,
    paddingVertical:10,
    fontSize:15,
    borderRadius:10,
 
  },
   btn:{

    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'#6A5ACD',
    paddingHorizontal:20,
    paddingVertical:10,
    fontSize:15,
    borderRadius:10,
 
  }
});
export default mascara;