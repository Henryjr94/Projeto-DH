const database = require('../database/index')
const Cliente = require('../models/Cliente')
const Endereco = require('../models/endereco')
const Livro = require('../models/livro')
const Troca = require('../models/troca')

const control = {
    listCliente: async (req, res) => {

        // database.sync()

        const clienteLista = await Cliente.findAll()

        res.json(clienteLista)
    },

    listEndereco: async (req, res) => {

        // database.sync()

        const enderecoLista = await Endereco.findAll()

        res.json(enderecoLista)
    },

    listLivro: async (req, res) => {

        // database.sync()

        const livroLista = await Livro.findAll()

        res.json(livroLista)
    },

    listTroca: async (req, res) => {

        // database.sync()

        const trocaLista = await Troca.findAll()

        res.json(trocaLista)
    }    
}



module.exports = control