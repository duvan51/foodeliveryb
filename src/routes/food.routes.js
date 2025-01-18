import express from "express";
import FoodController from "../controllers/food.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Foods
 *   description: Peticiones relacionadas con Foods
 */

/**
 * @swagger
 * /api/foods:
 *   get:
 *     tags:
 *     -  Foods
 *     summary: Return the list of all foods
 *     description: Retrieve a list of all food records from the database.
 *     responses:
 *       200:
 *         description: A list of food items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Food'
 */
router.get("/", FoodController.allFoods);
// Ruta para buscar productos de comida por categoría o nombre --> usa query pero no se si cambiarlo a params...AGREGO PROTECT Y authorizeRoles








router.get(
  "/search", 
  FoodController.searchFood
);
// Ruta para agregar comida --> falta agregar un filtro paraque solo acceda un cliente que sea vendedor, para limitar la vista
router.post(
  "/add",
  //protect,
  //authorizeRoles("restaurant"),
  FoodController.addFood
);

export default router;
