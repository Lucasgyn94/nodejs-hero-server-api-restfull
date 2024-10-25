import { Router } from 'express';
import { HeroiController } from '../controllers/heroiController.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Hero:
 *       type: object
 *       required:
 *         - name
 *         - age
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: O ID auto-gerado do herói
 *         name:
 *           type: string
 *           description: O nome do herói
 *         age:
 *           type: integer
 *           description: A idade do herói
 *         type:
 *           type: string
 *           description: O tipo do herói (ex Guerreiro, Mago, etc.)
 *         attackStrategy:
 *           type: string
 *           description: A estratégia de ataque do herói
 */

/**
 * @swagger
 * /api/heroes:
 *   post:
 *     summary: Cria um novo herói
 *     tags: [Heroes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hero'
 *     responses:
 *       201:
 *         description: O herói foi criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hero'
 *       400:
 *         description: Dados inválidos fornecidos
 */
router.post('/heroes', HeroiController.createHero);

/**
 * @swagger
 * /api/heroes:
 *   get:
 *     summary: Lista todos os heróis
 *     tags: [Heroes]
 *     responses:
 *       200:
 *         description: A lista de heróis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hero'
 */
router.get('/heroes', HeroiController.listHeroes);

/**
 * @swagger
 * /api/heroes/{id}:
 *   get:
 *     summary: Busca um herói pelo ID
 *     tags: [Heroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do herói
 *     responses:
 *       200:
 *         description: Detalhes do herói
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hero'
 *       404:
 *         description: Herói não encontrado
 */
router.get('/heroes/:id', HeroiController.findHeroById);

/**
 * @swagger
 * /api/heroes/{id}:
 *   put:
 *     summary: Atualiza um herói existente
 *     tags: [Heroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do herói
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hero'
 *     responses:
 *       200:
 *         description: O herói foi atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hero'
 *       404:
 *         description: Herói não encontrado
 */
router.put('/heroes/:id', HeroiController.updateHero);

/**
 * @swagger
 * /api/heroes/{id}:
 *   delete:
 *     summary: Deleta um herói
 *     tags: [Heroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do herói
 *     responses:
 *       200:
 *         description: O herói foi removido com sucesso
 *       404:
 *         description: Herói não encontrado
 */
router.delete('/heroes/:id', HeroiController.deleteHero);

export default router;
