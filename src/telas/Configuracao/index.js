import { Text, View, Switch } from 'react-native';
import { estilos } from './estilos';
import { useContext, useState } from 'react';
import {TemaContext} from "../../contexts/TemaContext"

export default function Configuracao({ navigation }) {
  //const [estado, setEstado] = useState(true);

  const {temaAtual,setTemaAtual,temaEscolhido } = useContext(TemaContext) 

  const estilo = estilos(temaEscolhido);
  
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: { temaAtual ==='escuro'? 'escuro' : 'claro'}</Text>
      <Switch
        onValueChange={() =>
           temaAtual ==='escuro'? setTemaAtual('claro'): setTemaAtual('escuro')}
        value={temaAtual ==='escuro'? true : false}
      />
      </View>
    </View>
  );
}

