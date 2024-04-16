import { createContext, useState } from "react";


export const ProdutosContext = createContext({})


export function ProdutosProvider({children}){
    const [quantidade, setQuantidade] = useState(0)
    const[carrinnho,setCarrinho] = useState([])
    const [ultimosVistos,setUltimosVistos] = useState([])

    function viuProduto(produto){
        setQuantidade(quantidade+1)

        let novoCarrinho = carrinnho
        novoCarrinho.push(produto)
        setCarrinho(novoCarrinho)

        let novoUlrimosVistos = new Set(ultimosVistos)
        novoUlrimosVistos.add(produto)
        setUltimosVistos([...novoUlrimosVistos])

    }

  return(
    <ProdutosContext.Provider 
    value={{
        quantidade,
        carrinnho,
        ultimosVistos,
        viuProduto
    }}
    >
        {children}
    </ProdutosContext.Provider>

  )
}

