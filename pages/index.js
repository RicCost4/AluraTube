import React from "react"; //importação da biblioteca do react para usar a mudança de estado da pagina na variavel 'React.useState("")'
import config from "../my-config.json"; //Import da minha configuração para captar as minhas variaveis criadas.
import styled from "styled-components"; //Import da configuração do estilos.
import Menu from "../src/components/Menu";//importação da tag menu na sua pasta
import { StyledTimeline } from "../src/components/Timeline";//importação do css da timeline

function HomePage() {
    
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return(
        <>
            {/* criamos o _app.js(pesquisar no google para achar a documentação do arquivo) para setamos algumas configurações a adição do uns componetes, ele carrega junto com o index.js */}
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                <Header />

                <Timeline searchValue={valorDoFiltro} playlist={config.playlist} />
            </div>
        </>
    );
}

export default HomePage

// Criar a classe para configurar o estilo e setar na tag que for usar.
const StyleHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;

const StyledBanner = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
    background-image: url(${config.banner});
    height: 230px;
`
function Header() {

    return (
        <StyleHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.nome}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline({searchValue, ...props}) { //é uma variavel de propriedades.
    // console.log(`Dentro do componente ${props.playlist}`)
    const playlistName = Object.keys(props.playlist)

    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => {
                const videos = props.playlist[playlistName]
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) =>{
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                <a key={video.url} href={video.url}>
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

// ----Anotações----

    //   Arquivo que vai a minha configuração, pode chamar qualquer nome com config.json(my-config.json)
    //   Comando para importa as variaveis da minha configuração -> 'import config from "../my-config.json";'
    //   Bliblioteca react para style https://styled-components.com/
    //   Criar o arquivo de next.config.js no github do next.js para configurar o style > https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js
    //   simplificar uma "function(){} --> ()=>{}"
