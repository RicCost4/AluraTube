import { CSSReset } from "../src/components/CSS.resert";//importação do css glogal criado pela gente
import { ThemeProvider } from "styled-components";//importação da biblioteca do css styled-components
import ColorModeProvider, {ColorModeContex} from "../src/components/Menu/components/ColorMode";
import React from "react";//importação da biblioteca do react para usar a mudança de estado da pagina na variavel 'React.useContext()'
import RegisterVideo from "../src/components/RegisterVideo";//Chamar o botão de adicionar como componente para todas as telas

// _app.js -> defição globais da sua app
// ThemeProvider -> prover o tema para a app toda
// ColorModeProvider -> prover o estado de ligth e dark para todo mundo
function ProviderWrapper(props){
    return(
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
}

function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContex)
    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
    )
  }

  export default function _App(props){
    return(
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
  }