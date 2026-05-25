# Pokédex API - Backend

Esta es la capa del servidor de la Pokédex. Está construida con **Node.js**, **Express**, **TypeScript** y **Sequelize** como ORM para conectar con la base de datos PostgreSQL, siguiendo una arquitectura de capas limpia.

---

## Instalación y Arranque Rápido

Sigue estos pasos para levantar el servidor localmente en tu computadora:

### 1. Instalar Dependencias
Abre la terminal dentro de esta carpeta (`Backend`) y ejecuta:
```bash
npm install
```
*Nota: Esto instalará de forma automática Express, CORS, Sequelize, TypeScript 6 y el compilador de desarrollo con las mismas versiones que configuré.*

### 2. Variables de Entorno 
Copia el archivo `.env.example` y renómbralo a `.env`. Configura tus credenciales locales de PostgreSQL:
```env
PORT=3000
DB_USER=tu_usuario_postgres
DB_PASSWORD=tu_contraseña_aqui
DB_NAME=pokedex_db
DB_HOST=localhost
DB_PORT=5432
```
*Asegúrate de tener creada la base de datos `pokedex_db` en tu servidor de PostgreSQL.*

### 3. Ejecutar en Modo Desarrollo 
Para encender el servidor con recarga automática al guardar cambios:
```bash
npm run dev
```
El servidor levantará en: `http://localhost:3000`

---