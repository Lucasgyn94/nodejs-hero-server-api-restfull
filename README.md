# Hero Server API 🦸‍♂️
## Visão Geral
Esta API fornece um sistema para gerenciamento de heróis, permitindo operações CRUD (Criar, Ler, Atualizar, Deletar).<br>
Desenvolvida com Node.js e Express, a mesma foi inspirada a partir do desafio lançado pelo Expert da Digital Innovation One no bootcamp GFT Start 6.

## 🌟 Funcionalidades
* Criar, ler, atualizar e deletar heróis<br>
* Listar todos os heróis cadastrados<br>
* Buscar heróis por ID<br>
* Implementação de estratégias de ataque únicas por tipo de herói<br>
* Documentação interativa com Swagger UI<br>

## 🛠️ Tecnologias Utilizadas
* Node.js<br>
* Express.js<br>
* Swagger para documentação da API<br>
* Padrões de Design: Factory, Strategy<br>

## 🚀 Instalação e Uso
### Clone o repositório:
git clone https://github.com/seu-usuario/hero-server.git

### Instale as dependências:
cd hero-server<br>
npm install

### Inicie o servidor:
npm start

## Acesse a documentação Swagger:
http://localhost:3000/api-docs

## 📚 Documentação da API
Endpoints
POST /api/heroes: Cria um novo herói<br>
GET /api/heroes: Lista todos os heróis<br>
GET /api/heroes/:id: Busca um herói específico<br>
PUT /api/heroes/:id: Atualiza um herói<br>
DELETE /api/heroes/:id: Remove um herói<br>

## 🦸‍♀️ Tipos de Heróis
Guerreiro: Especialista em combate corpo a corpo<br>
Mago: Mestre das artes arcanas<br>
Monje: Combatente espiritual com habilidades místicas<br>
Ninja: Especialista em técnicas furtivas<br>

## 🛡️ Estratégias de Ataque
Cada tipo de herói possui uma estratégia de ataque única:<br><br>
Guerreiro: Ataque com Espada<br>
Mago: Ataque com Magia<br>
Monje: Ataque Furia do Tigre<br>
Ninja: Ataque Ninjutsu<br>

## 🤝 Contribuindo
Contribuições são sempre bem-vindas!

## 📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

## 📞 Suporte
Se você tiver alguma dúvida ou encontrar algum problema, por favor abra uma issue.

Desenvolvido com ❤️ por Lucas Ferreira da Silva