const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o banco de dados
mongoose.connect('mongodb://product:mimi123@produto-shard-00-00-qkkfm.mongodb.net:27017,produto-shard-00-01-qkkfm.mongodb.net:27017,produto-shard-00-02-qkkfm.mongodb.net:27017/product?ssl=true&replicaSet=Produto-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);