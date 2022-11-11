# AluraTube

### Imersão React da Alura 07/11 - 11/11

  

> Esse Projeto foi construindo seguindo o curso de Imersão React promovido pela Alura em 5 aulas, criado junto com o Instrutor **Mario Souto - Dev Soutinho**

---

> Meu primeiro contato com React e seguindo o meu Roadmap criado por mim 😊

  

## Como esta o nosso Projeto?
`index.js` - [código](https://github.com/RicCost4/AluraTube/blob/main/pages/index.js)
~~~
	Carrega a pagina principal do projeto.
	function  HomePage() - é a função que vai renderizar a pagina principal, sendo iniciada pelo 'export  default  HomePage'.
	no CSS, foi utilizado a biblioteca styled-components link da documentação - https://styled-components.com/, pois mais facil de estilizar e ja tem o media-screen incorporado.
	Temos 2 funções no mesmo arquivo para mostrar que pode criar e setar componentes para a renderização na pagina -> <Header />(function  Header()) e <Timeline />(function  Timeline()), e temos o <Menu /> que renderiza do componente externo da pasta Menu com o seu arquivo index.js.
	Header() : é simples e so ira retorna a nossa imagem e nome, ela captura valores de um arquivo .json(my-config.json).
	Timeline() : já esse componente, ira mostrar os videos na nossa pagina, ele também captura lista do my-config.json, mapea e renderiza na pagina, e ainda captura o valor da busca do componente Menu para mostrar o resultado da pesquisa.
~~~
`_app.js`  - [código](https://github.com/RicCost4/AluraTube/blob/main/pages/_app.js)
~~~
	Carrega o setup base do projeto.
	Aqui vão ficar os Providers de informação do nosso projeto.
	O CSSReset fica aqui também.
	E colocamos o botão de adicionar o formulario aqui, para ele ser setado e renderizado como componente principal.