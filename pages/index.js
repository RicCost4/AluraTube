import React from "react";
import config from "../my-config.json"; //Import da minha configuração para captar as minhas variaveis criadas.
import styled from "styled-components"; //Import da configuração do estilos.
import { CSSReset } from "../src/components/CSS.resert";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return(
        <>
            <CSSReset />
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

// function Menu() {

//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

// Criar a classe para configurar o estilo e setar na tag que for usar.
const StyleHeader = styled.div`
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
    background-color: red;
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
