require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Connect to database
require('./config/connect-db')

app.set('PORT', process.env.PORT || 3000);

// ✅ ACTUALIZADO: CORS configurado para cookies
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', // Si usas otro puerto
    'https://tu-dominio-frontend.vercel.app', // 👈 AGREGA TU DOMINIO REAL DE FRONTEND
    'https://tu-dominio-frontend.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// 👇 Agrega esto también
app.options('*', cors()); // Habilita preflight para todas las rutas

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser()); // Usar cookie-parser

// Routes
app.use(require('./routes'))

app.listen(app.get('PORT'), () => console.log(`Server Ready al port ${app.get('PORT')}`))