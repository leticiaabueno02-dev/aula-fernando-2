const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController') // faz a referencia e puxa o controller

// ROTA POST 
// /podutos/novo
router.post('/novo', produtoController.criarProduto)
router.get('/listar', produtoController.listarProduto) // post sempre cria 
// models, modelo de armazenamento --- representação das tabelas
// controller controla as regras de armazenamento
router.get('/listarPorCodigo', produtoController.listarProduto);
router.get('/listarPorNome', produtoController.listarProduto);
router.put('/atualizar/:id', produtoController.atualizar);
router.delete('/excluir/:id', produtoController.deletarProduto);

module.exports = router; 
