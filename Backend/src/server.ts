import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Probar la conexion con la base de datos
        await sequelize.authenticate();
        console.log(`Conexion establecida con la base de datos.`);

        // Sincronizar los modelos con la BD (crea las tablas si no existen)
        // Usamos alter: true para que actualice las tablas si hacemos cambios en los modelos
        await sequelize.sync({ alter: true });
        console.log(`Modelos sincronizados con la base de datos.`);

        // Iniciamos el servidor
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(`No se pudo iniciar el servidor:`, error);
        process.exit(1);
    }
}

startServer();