# NLW Agents - Server
Uma API desenvolvida durante o evento Next Level Week Agents, utilizando tecnologias modernas e integração com IA.

## Tecnologias
- **Node.js**
- **Typescript**
- **Fastify**
- **PostegreSQL**
- **Drizzle ORM**
- **Zod**
- **Biome**
- **Gemini API**

## Como usar

### Requisitos

- [Node.js (v22.6 ou superior)](https://nodejs.org/en)
- [Docker](https://www.docker.com)

### Clonar o repositorio

```bash
git clone https://github.com/victorhtomaz/let-me-ask-nlw.git let-me-ask

cd ./let-me-ask/server
```

### Iniciar o container docker

```bash
docker compose up -d
```

### Configurar váriaveis de ambiente

Criar arquivo **.env** na raiz da pasta server com as informações como do **.env.example**:

```env
PORT=3333

DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"

GEMINI_API_KEY=""
```

### Instalar dependências 

```bash
npm install
```

### Executar migração do banco de dados

```bash
npm run db:migrate
```

### Executar API

```bash
npm start
```

## API Endpoints

| Rotas| Descrição|
|------|----------|
| <kbd>GET /health</kbd>         | Helth check da API |
| <kbd>GET /rooms</kbd>         | Lista todas as salas criadas |
| <kbd>POST /rooms</kbd>   | Cria uma nova sala |
| <kbd>GET /rooms/{roomId}/questions | Lista todas as perguntas de uma sala |
| <kbd>POST /rooms/{roomId}/questions</kbd> | Adiciona uma nova pergunta a uma sala |
| <kbd>POST /rooms/{roomId}/audio | Salva a transcrição e embeddings de um áudio |