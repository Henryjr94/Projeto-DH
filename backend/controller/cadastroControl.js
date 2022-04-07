const database = require('../database/index')
const Cliente = require('../models/Cliente')
const Endereco = require('../models/endereco')
const Livro = require('../models/livro')
const Troca = require('../models/troca')

const  control = {

    cliente: async (req, res) => {

        await Cliente.create(req.body)

        res.send("Cadastro feito")

    },

    endereco: async (req, res) => {

        await Endereco.create(req.body)

        res.send("Cadastro feito")

    },

    livro: async (req, res) => {

        await Livro.create(req.body)

        res.send("Cadastro feito")

    },

    troca: async (req, res) => {

        await Troca.create(req.body)

        res.send("Cadastro feito")

    }
}

module.exports = control