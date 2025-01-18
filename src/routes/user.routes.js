import express from 'express';
import { registerUser, authUser, getAlluser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);




/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Peticiones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retorna la lista de todos los usuarios
 *     description: Recupera una lista de todos los registros de usuarios desde la base de datos.
 *     responses:
 *       200:
 *         description: Una lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', getAlluser);

export default router;

