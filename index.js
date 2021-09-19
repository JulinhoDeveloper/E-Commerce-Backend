const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
// criar o servidor
const app = express();

// Conectar ao banco de dados
dbConnection();

//  cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// Importar rotas
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// porta 
const port = process.env.PORT;
// configurando a porta
app.listen(port, () => {
    console.log(`Servidor na porta ${port}`);
});