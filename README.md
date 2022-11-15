# AluraTube

### Imersão React da Alura 07/11 - 11/11
> Esse Projeto foi construindo seguindo o curso de Imersão React promovido pela Alura em 5 aulas, criado junto com o Instrutor **Mario Souto - Dev Soutinho**.
> Meu primeiro contato com React e seguindo o meu Roadmap criado por mim 😊
---
## Como esta o nosso Projeto?

`index.js` - [código](https://github.com/RicCost4/AluraTube/blob/main/pages/index.js)
~~~
● Carrega a pagina principal do projeto.

● function HomePage() - é a função que vai renderizar a pagina principal, sendo iniciada pelo
'export default HomePage'.

● No CSS, foi utilizado a biblioteca styled-components link da documentação -
https://styled-components.com/, pois mais facil de estilizar e ja tem o media-screen
incorporado.

● Temos 2 funções no mesmo arquivo para mostrar que pode criar e setar componentes para a
renderização na pagina -> <Header />(function Header()) e <Timeline />(function Timeline()),
e temos o <Menu /> que renderiza do componente externo da pasta Menu com o seu arquivo
index.js.

● Header() : é simples e so ira retorna a nossa imagem e nome, ela captura valores de um
arquivo .json(my-config.json).

● Timeline() : já esse componente, ira mostrar os videos na nossa pagina, ele também captura
lista do my-config.json, mapea e renderiza na pagina, e ainda captura o valor da busca do
componente Menu para mostrar o resultado da pesquisa.
~~~
`_app.js` - [código](https://github.com/RicCost4/AluraTube/blob/main/pages/_app.js)
~~~
● Carrega o setup base do projeto.

● Aqui vão ficar os Providers de informação do nosso projeto

● O CSSReset fica aqui também.

● E colocamos o botão de adicionar o formulário aqui, para ele ser setado e renderizado como
componente principal.
~~~
`video.js` - [código](https://github.com/RicCost4/AluraTube/blob/main/pages/video.js)
~~~
Esse componente so foi criado para mostrar a mudança de estado da função ColorModeContex do
componente ColorMode.
~~~
`src/componets` - [acesse](https://github.com/RicCost4/AluraTube/tree/main/src/components)
~~~
● Pasta que esta consentrado outros componente ligados ao projeto, com CSS da TimeLine
(Timeline.js), o resete do CSS do projeto (CSS.resert.js), a pasta do compoente do menu
(/Menu) e a pasta do formulario de inserir videos (/RegisterVideo).
~~~
`/Menu` - [acesse](https://github.com/RicCost4/AluraTube/tree/main/src/components/Menu)
~~~
● Nesta pasta, esta o codigo principal do componente menu, nomeado de index.js, pois e nele
que quado importamos so o caminho ja ira reconhcer e executar a função default nele, temos a
pasta /components, que a pasta que ira ficar os componentes do menu, aonde serão chamados pelo
componente menu lá no Homepages.
~~~
`index.js - /Menu` - [código](https://github.com/RicCost4/AluraTube/blob/main/src/components/Menu/index.js)
~~~
● Esse é o componente principal da div Menu, tendo o seu styled configurado no mesmo arquivo,
na function Menu() que é o default setado, foi configurado que o botão de procura é o botão o
modo de visualização esteja presente neste componente.
● O Menu recebe dois parametros para ligar o botão de procura com a pagina inicial.
● A function Logo(), é só uma função para renderizar a logo ja escolhida pelos instrutores
para o trabalho.
~~~
`ColorMode.js - /Menu/components` - [código](https://github.com/RicCost4/AluraTube/blob/main/src/components/Menu/components/ColorMode.js)
~~~
● Esse componente é só uma função que vai receber dois paramentros e fornecer a troca de
estado das variaveis do css, que foi configurado como global no _app.js e mudar quando o
botão trocar, vai ser chamado no componente do DarkModeSwitch.js e no _app.js.
~~~
`DarkModeSwitch.js - /Menu/components` - [código](https://github.com/RicCost4/AluraTube/blob/main/src/components/Menu/components/DarkModeSwitch.js)
~~~
● Esse componente é só a função do botão, aonde recebe os parametros do componente 
ColorMode.js e renderiza na HomePage pelo Menu.
~~~

`Search.js - /Menu/components` - [código](https://github.com/RicCost4/AluraTube/blob/main/src/components/Menu/components/Search.js)
~~~
● Esse componente é só a função do input de filtro, aonde recebe os parametros do 
componente da HomePage, renderizado na HomePage pelo Menu.
~~~
`/RegisterVideo` - [acesse](https://github.com/RicCost4/AluraTube/tree/main/src/components/RegisterVideo)
~~~
● Nesta pasta, esta o codigo principal do componente registervideo, nomeado de 
index.js, pois e nele que quado importamos so o caminho, ja ira reconhcer e executar 
a função default nele.
~~~
`index.js - /RegisterVideo` - [código](https://github.com/RicCost4/AluraTube/blob/main/src/components/RegisterVideo/index.js)
~~~
● Esse é o componente principal do botão de registrar video, sendo um formulario que fica 
escondido ate renderizar quando o usuario clica, podendo colocar o titulo do video e a sua 
url, foi colocado um console log so para mostrar a captura dos dados.
~~~
---
### Arquivos .txt
> Os arquivos são trechos de códigos que são o incremento da inserção com o BD supabase usando na **Aula 5**,  falando de promises js, a pasta no src/services tem o componente que gera a chave de ligação com o BD.