const clienteModel = require('../models/clienteModel');

const clienteController = {
    selecionarTodosClientes: async (req, res) => {
        try {
            const clientes = await clienteModel.selecionarTodosClientes();
            return res.json(clientes);
        } catch (error) {
            throw error
        }
    },

    // Seleciona por ID
    selecionarUmCliente: async (req, res) => {
        try {
            const { id } = req.params;
            // console.log(id)
            const clientes = await clienteModel.selecionarUmCliente(id);
            return res.json(clientes);
        } catch (error) {
            throw error
        }
    },

    // // Seleciona por Nome
    // selecionarUmCliente: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         console.log(id)
    //         const clientes = await clienteModel.selecionarUmClientePorNome(id);
    //         return res.json(clientes);
    //     } catch (error) {
    //         throw error
    //     }
    // },
    
    insereClientes: async (req, res) => {
        try {
            const { nome, idade } = req.body;
            const result = await clienteModel.insereClientes({ nome: nome, idade: idade });
            // console.log(result);
            // const clientes = await clienteModel.selecionarTodosClientes();
            // return res.json(clientes);
            return res.json(result);
        } catch (error) {
            throw error
        }
    },

    atualizaClientes: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, idade } = req.body;
            const result2 = await clienteModel.atualizaClientes(id, { nome: nome, idade: idade });
            // console.log(result2);
            // const clientes = await clienteModel.selecionarTodosClientes();
            return res.json(result2);
        } catch (error) {
            throw error
        }
    },

    deletaClientes: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await clienteModel.deletaClientes(id);
            // return res.status(200).json({ message: `Registro excluido com sucesso!` });
            return res.json(result);
            // if (result.affectedRows > 0) {
            //     return res.json.status(200).send(`Registro excluido com sucesso!`)
            // }else {
            //     return res.send('Registro não localizado!');
            // };
        } catch (error) {
            throw error
        }
    },
}

module.exports = {clienteController}