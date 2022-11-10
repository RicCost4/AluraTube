import React from "react";//importação da biblioteca do react para usar a mudança de estado da pagina na variavel 'onChange=()'
import styled from "styled-components"//Import da configuração do estilos.

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search( {valorDoFiltro, setValorDoFiltro} ) {
    const valorDaBusca = valorDoFiltro
    const setValorDaBusca = setValorDoFiltro

    return (
      <StyledSearch>
        <input type="text" onChange={(e) => {
            setValorDaBusca(e.target.value)
        }} value={valorDaBusca} />
        <button>
          🔎
        </button>
      </StyledSearch>
    )
}

// ----Anotações----
  // Quando vc for usar a variavel 'infosDoEvento', vc pd abreviar para 'e', pois é uma nomeclatura padrão utilizada na programação