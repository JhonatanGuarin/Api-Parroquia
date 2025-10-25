require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Connect to database
require('./config/connect-db')

app.set('PORT', process.env.PORT || 4000); // 👈 Cambiar a 4000 para evitar conflicto

// ✅ CORS configurado correctamente
app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origin (como apps móviles o Postman)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://tu-dominio-frontend.vercel.app',
      'https://tu-dominio-frontend.com'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie']
}));

// 👇 Preflight para todas las rutas ANTES de otras rutas
app.options('*', cors());

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());

// Routes
app.use(require('./routes'))

app.listen(app.get('PORT'), () => console.log(`Server Ready at port ${app.get('PORT')}`))
