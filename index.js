const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// criar o servidor
const app = express();

// Conectar ao banco de dados
dbConnection();

//  cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// Importar rotas

// porta 
const port = process.env.PORT;



// arrancar la app
app.listen(port, () => {
    console.log(`Servidor na porta ${port}`);
});