import { createContext, useEffect, useState } from "react";
import { buscarProdutos, salvarProduto } from "../servicos/requisicoes/produtos";


export const ProdutosContext = createContext({})


export function ProdutosProvider({children}){
    const [quantidade, setQuantidade] = useState(0)
    const[carrinho,setCarrinho] = useState([])
    const [ultimosVistos,setUltimosVistos] = useState([])

  
    useEffect(() =>{
      async function buscarProdutosCarrinho(){
        const resultado = await buscarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length)
      }
  
      buscarProdutosCarrinho();
    },[])
    
    async function viuProduto(produto){
        
    
        setQuantidade(quantidade+1)
       
        const resultado = await salvarProduto(produto)

        let novoUlrimosVistos = new Set(ultimosVistos)
        novoUlrimosVistos.add(produto)
        setUltimosVistos([...novoUlrimosVistos])
     
       
        let novoCarrinho = carrinnho
        novoCarrinho.push(resultado)
        setCarrinho(novoCarrinho)

        

    }

  return(
    <ProdutosContext.Provider 
    value={{
        quantidade,
        carrinho,
        ultimosVistos,
        viuProduto
    }}
    >
        {children}
    </ProdutosContext.Provider>

  )
}

