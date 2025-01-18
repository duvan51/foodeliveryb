import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Docs FoodDelivery',
      version: '1.0.0',
      description: 'API for FindFood',
    },
    servers: [
      {
        url: 'http://localhost:8080/',
        description: 'Local server',
      },
      {
        url:'https://food-delivery-backend-beryl-six.vercel.app/',
        description: 'server production',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Food: {
          type: "object",
          properties: {
            id: { 
              type: "string", 
              description: "ID único del alimento",
              example: "64a7f2e8b5d10c001ce23a3f"
            },
            name: { 
              type: "string", 
              description: "Nombre del alimento",
              example: "Pizza Margherita" 
            },
            price: { 
              type: "number", 
              description: "Precio del alimento",
              example: 12.99 
            },
            description: { 
              type: "string", 
              description: "Descripción del alimento",
              example: "Pizza clásica con salsa de tomate y queso mozzarella"
            },
            category: { 
              type: "string", 
              description: "Categoría del alimento",
              enum: ["carnes", "pastas", "minutas", "pizzas", "postres"],
              example: "pizzas"
            },
            imageUrl: { 
              type: "string", 
              description: "URL de la imagen del alimento",
              example: "https://example.com/images/pizza.jpg" 
            },
            stock: { 
              type: "integer", 
              description: "Cantidad disponible en inventario",
              example: 20 
            },
            restaurant: { 
              type: "string", 
              description: "ID del restaurante asociado",
              example: "64a7f2e8b5d10c001ce23a40" 
            }
          },
          required: ["name", "price"], // Campos obligatorios
        },
        User: {
            type: "object",
            properties: {
              id: {
                type: "string",
                description: "ID único del usuario generado automáticamente por MongoDB",
                example: "64a7f2e8b5d10c001ce23a3f"
              },
              name: {
                type: "string",
                description: "Nombre completo del usuario",
                example: "Juan Pérez"
              },
              email: {
                type: "string",
                description: "Correo electrónico único del usuario",
                example: "juan.perez@example.com"
              },
              password: {
                type: "string",
                description: "Contraseña del usuario (encriptada)",
                example: "$2a$10$EixZaYVK1fsbw1Zfbx3OXePaWxn96p36SjQ/36A4aGqvl57uD56Ue"
              },
              identificacion: {
                type: "string",
                description: "Número de identificación del usuario",
                example: "123456789"
              },
              address: {
                type: "string",
                description: "Dirección del usuario",
                example: "Calle 123 #45-67"
              },
              neighborhood: {
                type: "string",
                description: "Barrio del usuario",
                example: "Chapinero"
              },
              city: {
                type: "string",
                description: "Ciudad del usuario",
                example: "Bogotá"
              },
              role: {
                type: "string",
                description: "Rol del usuario en la plataforma",
                enum: ["cliente", "restaurant", "repartidor"],
                example: "cliente"
              },
              cart: {
                type: "string",
                description: "ID del carrito asociado al usuario (solo para clientes)",
                example: "64a7f2e8b5d10c001ce23b4g"
              },
              createdAt: {
                type: "string",
                format: "date-time",
                description: "Fecha y hora de creación del usuario",
                example: "2023-01-01T12:00:00Z"
              },
              updatedAt: {
                type: "string",
                format: "date-time",
                description: "Fecha y hora de la última actualización del usuario",
                example: "2023-01-15T12:00:00Z"
              }
            },
            required: [
              "name",
              "email",
              "password",
              "identificacion",
              "address",
              "neighborhood",
              "city",
              "role"
            ]
          }
      }
    
    },
  },
  apis: ['./src/routes/*.js'], // Rutas de archivos con anotaciones Swagger
};

const sepecificationSwagger = swaggerJsdoc(options);
export default sepecificationSwagger;