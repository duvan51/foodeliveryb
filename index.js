// ya configure la variable de entorno
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import configObject from './src/config/config.js';
import open from 'open';  // Importa el paquete open para abrir de una la pagina al iniciar
import userRoutes from './src/routes/user.routes.js';
import foodRoutes from './src/routes/food.routes.js';
import restaurantRoutes from './src/routes/restaurant.routes.js';
import dotenv from "dotenv"; 

import swaggerUI from "swagger-ui-express";
import specificationSwagger from "./swagger/swagger.js";

const app = express();
dotenv.config();



// conexion a la base de datos [done mi cluster]
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Conexión exitosa!"))
    .catch((error) => console.log("Error en la conexión", error));

app.use(cors());
app.use(express.json());
app.use(cookieParser());



//redireccionamiento a la ruta de swagger
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});


// Rutas
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/restaurants', restaurantRoutes);
//ruta de documentacion
//
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specificationSwagger));
  


// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Endpoint no encontrado');
  });





const PORT = process.env.PORT || 8080;
// Inicia el servidor y abre la página en el navegador
app.listen(PORT, async () => { console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);});

//food-delivery-backend

