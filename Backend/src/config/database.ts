import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde archivo .env
dotenv.config();

// Inicializar la conexion a Postgresql con Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME || 'pokedex_db2',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
        logging: false,
        define: {
            timestamps: true, // Añade automáticamente createdAt y updatedAt a las tablas
            underscored: true, // Convierte camelCase a snake_case en la BD (ej: pokemonId -> pokemon_id)
        }
    }
);

export default sequelize;