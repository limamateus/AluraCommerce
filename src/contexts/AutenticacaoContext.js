import { createContext, useState } from "react";


export const AutenticacaoContext = createContext({})


export function AutenticacaoProvider({children}){
    const [usuario,setUsuario] = useState({})

    function login(email, senha){
        if(email == "testes@testes.com" && senha == 123){
            setUsuario({
                nome: "Mateus",
                email: email,
                endereco: "Av. Paulista",
                telefone: "(11) 99999-9999"
            })
            return "Ok"
        }else{
            return "E-mail ou senha incorreto!"
        }
    }
  return(
    <AutenticacaoContext.Provider 
    value={{
        usuario,setUsuario, login
    }}
    >
        {children}
    </AutenticacaoContext.Provider>

  )
}

