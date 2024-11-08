# eFood

**eFood** é um projeto de uma página web que simula um serviço de pedidos de comida. O usuário pode navegar entre diferentes restaurantes, visualizar os menus e selecionar itens para realizar um pedido. Este projeto é parte da atividade final do curso de Engenheiro Front-end da EBAC, e foi desenvolvido com o objetivo de aplicar e consolidar o uso de tecnologias front-end modernas.

> **Status do Projeto:** Em desenvolvimento. Novas funcionalidades serão adicionadas continuamente.

---

## Funcionalidades

- **Listagem de Restaurantes:** A página inicial exibe uma lista de restaurantes, cujos dados são obtidos de uma API Fake.
- **Detalhes do Restaurante e Menu:** Cada restaurante possui uma página com seus respectivos pratos, onde o usuário pode navegar e selecionar itens.
- **Carrinho de Compras e Pedido:** A funcionalidade de carrinho e checkout está em desenvolvimento e será lançada em breve.

---

## Tecnologias Utilizadas

- **React**: Para construção da interface de usuário.
- **React Router**: Para gerenciar a navegação entre páginas.
- **TypeScript**: Para funcionalidades, interatividade da aplicação, garantir tipagem estática e maior segurança no desenvolvimento.
- **Styled-components**: Para estilização dos componentes de forma modular com CSS-in-JS.

---

## Dados

Os dados utilizados no projeto são fornecidos por uma API Fake, acessível no seguinte endpoint:

- **API de Restaurantes:** [https://fake-api-tau.vercel.app/api/efood/restaurantes](https://fake-api-tau.vercel.app/api/efood/restaurantes)

---

## Instalação e Execução

1. Clone o repositório:
   ````bash
   git clone https://github.com/seu-usuario/efood.git```
   ````
2. Instale as dependências:
   ```bash
   cd efood
   npm install
   ```
3. Use os seguintes comandos para rodar o projeto:
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm start
     ```
   - Para gerar uma versão de produção:
     ```bash
     npm run build
     ```
   - Para formatar o código com Prettier:
     ```bash
     npm run prettier
     ```
4. Abra [http://localhost:3000](http://localhost:3000) para ver o eFood no seu navegador.

## Próximas Implementações

- Realizar requisição da API proposta e sintonizar os produtos de acordo com os dados da API.
- Criação de modal ao clicar para comprar produto.
- Sistema de carrinho de compras.
- Criação da página de entrega de pedidos e funcionalidades dela.
