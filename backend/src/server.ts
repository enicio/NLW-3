import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHanndler from './errors/handler';

const app = express();

//Rota = conjunto
//Recuros = usuário

//Método HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = Buscar uma informação (Lista, itens)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHanndler);



app.listen(3333);

