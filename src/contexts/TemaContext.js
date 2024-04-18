import { createContext,useEffect,useState } from "react"
import { escuro, claro } from "../estilosGlobais"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const TemaContext = createContext({})

const temas = {
        'escuro' : escuro,
        'claro' : claro
}





export function TemaProvider({children}){
    const [temaAtual, setTemaAtual ] = useState('escuro')

    async function salvarTemaNoDispositivo(temaEscolhido){
        await AsyncStorage.setItem('@tema',temaEscolhido)
         setTemaAtual(temaEscolhido)
     }

    useEffect( () => {
        
        async function buscarTema(){
            const temaSalvo = await AsyncStorage.getItem('@tema')
   
            if(temaSalvo){
                setTemaAtual(temaSalvo)
            }
        }
   
        buscarTema();
   },[])

    return(
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            salvarTemaNoDispositivo
        }}>
            {children}
        </TemaContext.Provider>

    )
}