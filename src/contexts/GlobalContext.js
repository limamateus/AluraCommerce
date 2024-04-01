import { createContext, useState } from "react";


export const GlobalContext = createContext({})


export function InfoProvider({children}){
const valor = 300;
const [nome, setNome] = useState("Mateus")
  return(
    <GlobalContext.Provider 
    value={{valor,nome,setNome}}
    >
        {children}
    </GlobalContext.Provider>

  )
}

