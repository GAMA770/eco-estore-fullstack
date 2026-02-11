# 📦 Eco-Store Manager

O **Eco-Store Manager** é uma aplicação Full Stack completa desenvolvida para o gerenciamento de inventário de produtos. O sistema permite realizar todas as operações fundamentais de um CRUD (Create, Read, Update, Delete) com uma interface moderna e responsiva.

---

## 🚀 Tecnologias Utilizadas

### **Back-end**
* **Java 17** com **Spring Boot**.
* **Spring Data JPA**: Para persistência de dados.
* **PostgreSQL**: Banco de dados relacional.
* **Maven**: Gerenciador de dependências.

### **Front-end**
* **React** (via Vite).
* **Axios**: Para consumo da API REST.
* **CSS3**: Estilização personalizada com Flexbox.

---

## 🛠️ Funcionalidades

- [x] **Listagem de Produtos**: Visualização em tempo real dos itens no banco de dados.
- [x] **Cadastro Dinâmico**: Adição de novos produtos com validação de campos.
- [x] **Edição (Update)**: Alteração de dados de produtos existentes sem recarregar a página.
- [x] **Exclusão (Delete)**: Remoção de itens com confirmação de segurança.
- [x] **Filtro de Busca**: Pesquisa instantânea por nome enquanto o usuário digita.
- [x] **Interface Centralizada**: Layout moderno e totalmente centralizado para melhor experiência de usuário (UX).

---

## 🏁 Como rodar o projeto

### 1. Pré-requisitos
* Java JDK 17+ instalado.
* Node.js instalado.
* PostgreSQL rodando localmente.

### 2. Configuração do Back-end
1. No IntelliJ, abra o projeto Java.
2. Certifique-se de que as credenciais do banco em `application.properties` estão corretas.
3. Execute a aplicação (Spring Boot Application).

### 3. Configuração do Front-end
1. No terminal, entre na pasta do front-end:
   cd ecostore-front
2. Instale as dependências:
    npm install
3. Inicie o servidor de desenvolvimento:
    npm run dev
4. Acesse http://localhost:5173 no seu navegador.

👤 Autor

Anghello Gama - Desenvolvedor Back-End em formação.