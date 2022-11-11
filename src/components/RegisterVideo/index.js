import React from "react";
import { StyledRegisterVideo } from "./styles";//importação do css do componente

function useForm(){//formulario criado so para extrair a logica e manipular os dados front-end do form
    const [values, setValues] = React.useState({titulos: "", url: ""})
    {/* const [values, setValues] = React.useState(propsDoForm.initialValues) - se você quizer inicial o forma com dados */}

    return{
        values,
        handleChange: (evento) => {
            const value = evento.target.value
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForms(){
            setValues({})
        }
    }
}

export default function RegisterVideo(){
    const formCadastro = useForm()
    {/* const formCadastro = useForm({initiaçValues: {titulos: "Richard", url: "https://www.youtube.com"}}) - se você quizer inicial o forma com dados */}
    const [formVisivel, setFormVisivel] = React.useState(false)

    /* Anotação .....
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=>setFormVisivel(true)}>
                +
            </button>
            {/* Ternário ou Operadores de Curto-circuito */}
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();{/*comando para não alterar o estado da pagina*/}
                    console.log(formCadastro.values)
                    setFormVisivel(false)
                    formCadastro.clearForms()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={()=>setFormVisivel(false)}>
                            X
                        </button>
                        <input 
                            placeholder="Titulo do Video" 
                            name="titulos" 
                            value={formCadastro.values.titulos} 
                            onChange={formCadastro.handleChange} />
                        <input 
                            placeholder="URL" 
                            name="url" 
                            value={formCadastro.values.url} 
                            onChange={formCadastro.handleChange} />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            ): false}
        </StyledRegisterVideo>
    )
}