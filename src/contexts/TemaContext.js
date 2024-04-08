import { createContext,useState } from "react"
import { tema, claro } from "../estilosGlobais"

export const TemaContext = createContext({})

const temas = {
        'escuro' : tema,
        'claro' : claro
}

export function TemaProvider({children}){
    const [temaAtual, setTemaAtual ] = useState('escuro')

    return(
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual]
        }}>
            {children}
        </TemaContext.Provider>

    )
}