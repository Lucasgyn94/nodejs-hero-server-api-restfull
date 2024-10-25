import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento de Heróis',
      version: '1.0.0',
      description: `
## Visão Geral
Esta API fornece um sistema para gerenciamento de heróis, permitindo operações CRUD (Criar, Ler, Atualizar, Deletar).\n
Desenvolvida com Node.js e Express, a mesma foi inspirada a partir do desafio lançado pelo Expert da Digital Innovation One no bootcamp GFT Start 6.
      `,
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

export default specs;
