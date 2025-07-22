# Pizzaria API - Backend Clean Architecture

Este é o backend de um sistema completo para gerenciamento de pedidos de uma pizzaria, desenvolvido com foco em boas práticas, **Clean Architecture**, autenticação JWT e banco de dados relacional com PostgreSQL.

> 🔐 O projeto utiliza autenticação com JWT, upload de imagens com Multer e segue a arquitetura em camadas (Controller, Use-Case, Repository, Prisma).

---

## Preview (Diagrama de casos de uso)

![Diagrama de casos de uso](diagrama%20de%20casos%20de%20uso%20pizzaria.png)

---

## Preview (Diagrama de entidades)

![Diagrama de entidades](Diagrama%20de%20entidades%20pizzaria.png)

---

## Diagrama de classes simplificado (Clean Architecture)

![Diagrama de classes simplificado](Diagrama%20de%20classes%20pizzaria.png)

---

## Tecnologias e Ferramentas

- **Node.js + Express** – servidor backend
- **TypeScript** – tipagem estática
- **Prisma ORM** – acesso ao banco de dados PostgreSQL
- **PostgreSQL** – banco de dados relacional
- **JWT** – autenticação de usuários
- **Multer** – upload de imagens (banners de produtos)
- **UUID** – geração de identificadores únicos
- **Bcrypt** – criptografia de senhas
- **Clean Architecture** – separação em camadas (Use Case, Repository, Controller)

---

## Estrutura de Pastas (Clean Architecture)

```bash
src/
├── controllers/          # Controllers HTTP
├── entities/             # Entidades do domínio
├── middlewares/          # Autenticação, erros, etc.
├── prisma/               # Instância Prisma
├── repositories/         # Interfaces e implementações (Prisma)
├── routes/               # Rotas agrupadas por recurso
├── services/             # (antigo) - substituído por use-cases
├── use-cases/            # Regras de negócio
└── main.ts               # Inicialização da API
```

---

## Autenticação

- Cadastro e login de usuários
- Tokens JWT armazenados no header `Authorization: Bearer <token>`
- Middleware `isAuthenticated` protege rotas privadas (como pedidos e produtos)

---

## Instalação e Execução Local

```bash
# Clone o repositório
git clone https://github.com/jhondharkyson520/pizzaria-backend.git
cd pizzaria-backend

# Instale as dependências
npm install

# Configure o banco de dados PostgreSQL em .env
cp .env.example .env

# Rode as migrations
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

---

## Upload de Arquivos

- Upload de imagens dos produtos feito com Multer
- Os arquivos são armazenados na pasta `/tmp`
- As URLs são acessadas via `/files/<filename>`

---

## Rotas Principais (API REST)

### Usuário
| Método | Rota                  | Descrição              |
|--------|-----------------------|------------------------|
| POST   | `/users/create`       | Criar novo usuário     |
| POST   | `/users/session`      | Login do usuário       |

### Categorias
| Método | Rota                     | Descrição                   |
|--------|--------------------------|-----------------------------|
| POST   | `/category/create`       | Criar nova categoria        |
| GET    | `/category/list`         | Listar todas as categorias  |

### Produtos
| Método | Rota                         | Descrição                     |
|--------|------------------------------|-------------------------------|
| POST   | `/product/create`            | Criar novo produto (com img)  |
| GET    | `/product/category/product`  | Listar produtos por categoria |

### Pedidos (Order)
| Método | Rota              | Descrição                    |
|--------|-------------------|------------------------------|
| POST   | `/order/create`   | Criar novo pedido            |
| DELETE | `/order/remove`   | Remover pedido               |
| POST   | `/order/add-item` | Adicionar item ao pedido     |
| GET    | `/order/detail`   | Detalhar pedido (itens)      |

---

## Conceitos Aplicados

- Clean Architecture
- Repository Pattern
- Separação de responsabilidades
- Prisma com relacionamentos
- Upload de arquivos com Multer
- Boas práticas REST
- Código limpo, modular e reutilizável

---

## Autor

**Jhon Mendonça**  
Desenvolvedor Full Stack  
[Portfólio](https://jhondharkyson.com/) • [GitHub](https://github.com/jhondharkyson520)
