# Sistema de Cadastro de Usuários
Projeto desenvolvido para fins de estudo de uma aplicação VueJs, integrando uma interface moderna e reativa com persistência de dados em tempo real.

## Demonstração
Veja o projeto online: [https://eduardo-tell.github.io/vue-crud-fullstack/](https://eduardo-tell.github.io/vue-crud-fullstack/)

## Tecnologias Utilizadas
* **Vue 3**: Utilizado com a Composition API para a construção de uma interface reativa, modular e de alto desempenho.
* **Vite**: Ferramenta de build de última geração que proporciona um ambiente de desenvolvimento ultra rápido e empacotamento otimizado.
* **Pinia**: Gerenciador de estado global e centralizado, garantindo uma fluxo de dados previsível, escalável e de fácil manutenção entre os componentes.
* **Supabase**: Plataforma Backend-as-a-Service (BaaS) baseada em PostgreSQL, utilizada p gerenciar a persistência dos dados, autenticação e operações do banco de dados de forma segura e ágil através de sua API cliente do JS.

## Funcionalidades
* Listagem de usuários cadastrados com ordenação decrescente por ID.
* Criação de novos registros de usuários (Nome e E-mail).
* Exclusão individual de registros diretamente no banco de dados.
* Gerenciamento de estados de carregamento (loading) e tratamento de erros.

## Próximos Passos
* [ ] Opção de editar usuário.
* [ ] Contador de "total de itens" cadastrados exibido na interface.
