const PessoaService = require('../services/PessoaService');

module.exports = {
    // Função que irá realizar a chamada de buscar todos registros.
    buscarTodos: async (req, res) => {
        let json = { error: '', results: [] }; // variavel que amazenara erros ou arrays de resultados.

        let pessoas = await PessoaService.buscarTodos(); // varivavel que aguarda retono da função do PessoaServices (busucarTodos) que busca dados do banco MySQL.

        // Loop que irá fazer a varedura dentro da variavel pessoas e trazer a informação do codigo e modelo.
        for (let i in pessoas) {
            json.results.push({
                id: pessoas[i].id,
                nome: pessoas[i].nome,
                data_nasc: pessoas[i].data_nasc,
                cpf: pessoas[i].cpf,
                sexo: pessoas[i].sexo,
                estado_civil: pessoas[i].estado_civil,
                email: pessoas[i].email,
                telefone: pessoas[i].telefone,
            });
        }
        res.json(json); // pega o resultado e passa para o formato JSON.
    },

    buscarUm: async (req, res) => {
        let json = { error: '', results: {} }; // variavel que amazenara erros ou arrays de resultados.

        let id = req.params.id;
        let pessoa = await PessoaService.buscarUm(id);

        if (pessoa) {
            json.results = pessoa;
        }
        res.json(json); // pega o resultado e passa para o formato JSON.
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        // nome, data_nasc, cpf, sexo, estado_civil, email, telefone
        let nome = req.body.nome;
        let data_nasc = req.body.data_nasc;
        let cpf = req.body.cpf;
        let sexo = req.body.sexo;
        let estado_civil = req.body.estado_civil;
        let email = req.body.email;
        let telefone = req.body.telefone;

        if (nome && data_nasc && cpf && sexo && estado_civil && email && telefone) {

            // Convertendo a data para o formato SQL (YYYY-MM-DD)
            let [dia, mes, ano] = data_nasc.split('/');
            let data_nasc_sql = `${ano}-${mes}-${dia}`;

            try {
                let PessoaId = await PessoaService.inserir(nome, data_nasc_sql, cpf, sexo, estado_civil, email, telefone);
                json.result = {
                    id: PessoaId,
                    nome, data_nasc, cpf, sexo, estado_civil, email, telefone
                };
            } catch (error) {
                json.error = error.message;
            }
        } else {
            json.error = 'Campos não enviados';
        }

        console.log("Resultado do inserir: ", json);

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        // nome, data_nasc, cpf, sexo, estado_civil, email, telefone
        let id = req.params.id;
        let nome = req.body.nome;
        let data_nasc = req.body.data_nasc;
        let cpf = req.body.cpf;
        let sexo = req.body.sexo;
        let estado_civil = req.body.estado_civil;
        let email = req.body.email;
        let telefone = req.body.telefone;

        if (id && nome && data_nasc && cpf && sexo && estado_civil && email && telefone) {

            // Convertendo a data para o formato SQL (YYYY-MM-DD)
            let [dia, mes, ano] = data_nasc.split('/');
            let data_nasc_sql = `${ano}-${mes}-${dia}`;

            await PessoaService.alterar(id, nome, data_nasc_sql, cpf, sexo, estado_civil, email, telefone);
            json.result = {
                id, nome, data_nasc, cpf, sexo, estado_civil, email, telefone
            };
        } else {
            json.error = 'Campos não enviados';
        }
        console.log("Resultado do inserir: ", json);

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };
        await PessoaService.excluir(req.params.id);
        res.json(json);
    }
};