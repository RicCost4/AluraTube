import React from "react";//importação da biblioteca do react para usar a mudança de estado da pagina na variavel 'React.createContext()'

export const ColorModeContex = React.createContext({
    mode: "",
    setMode: () => {
        alert("Você mi precisa configurar primeiro...")
    },
    toogleMode: () => {
        alert("Você mi precisa configurar primeiro...")
    }
})

export default function ColorModeProvider(props){
    const [mode, setMode] = React.useState(props.initialMode)
    function toogleMode(){
        if(mode === "dark") setMode("light")
        if(mode === "light") setMode("dark")
    }

    return (
        <ColorModeContex.Provider value={{mode: mode, setMode: setMode, toogleMode: toogleMode}}>
            {props.children}
        </ColorModeContex.Provider>
    )
}