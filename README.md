# Proyecto del aplicativo web: EcoRuta 🚀

## Descripción
Este proyecto es una aplicación web desarrollada con **React (Vite)** en el frontend y **Node.js + Express** en el backend.  
La base de datos utilizada es **PostgreSQL**, desplegada en **Render**, junto con el backend (web service).  

## Tecnologías utilizadas
### Frontend
- ⚛️ [React](https://react.dev/) con [Vite](https://vitejs.dev/) para un desarrollo rápido y optimizado.  
- 🎨 CSS personalizado para estilos.  
- 🌐 Consumo del API REST creado en el backend.  

### Backend
- 🟢 [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/) para el servidor web.  
- 🛡️ Librerías principales:
  - `cors` → Permite solicitudes desde el frontend.  
  - `dotenv` → Manejo de variables de entorno.  
  - `express` → Framework para la creación del servidor.  
  - `morgan` → Logger de peticiones HTTP.  
  - `nodemon` → Reinicio automático en desarrollo.  
  - `pg` y `pg-hstore` → Conexión y soporte para PostgreSQL.  
  - `sequelize` → ORM para modelar y consultar la base de datos.  
- ☁️ Despliegue del backend en [Render](https://render.com/).  

### Base de Datos
- PostgreSQL en Render

### Herramientas de pruebas
- Durante el desarrollo se utilizó **Postman** para validar las rutas del backend y comprobar el correcto funcionamiento de los registros, logins y consultas a la base de datos.

El proyecto está dividido en dos repositorios:  

- **Frontend (React Vite)** → [Repositorio frontend](https://github.com/Quiroz7/Proyecto_Software.git)  
- **Backend (Node.js + Express + PostgreSQL)** → [Repositorio backend](https://github.com/Quiroz7/Proyecto_Software_Backend.git) 

## Instalación y ejecución
1. Clonar los repositorios:
   git clone https://github.com/Quiroz7/Proyecto_Software_Backend.git
   git clone https://github.com/Quiroz7/Proyecto_Software.git
   npm install
   npm run dev

## Notas:
- El frontend consume directamente la API expuesta por el backend en Render.
- Sequelize se encarga de mapear la base de datos PostgreSQL y facilita las consultas.