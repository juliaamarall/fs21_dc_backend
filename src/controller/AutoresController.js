const AutoresModel = require("../model/AutoresModel.js")
const AutoresController = {
    
    listar: async (request, response) => {
        const dados = await AutoresModel.findAll();
        return response.json(dados);
    
},

    listarId: async (request, response) => {
        const id = request.params.id;
        const dados = await AutoresModel.findByPk(id);
        return response.json(dados);
    
} ,

    criarDados: async (request, response) => {

        try{
            const dados = request.body;
            await AutoresModel.create(dados);
            return response.json({ 
                message: ' Autor criado com sucesso!',
                data: dados
            })

        } catch(e){
            return response.status(500).json({
                message: 'NÃO FOI POSSIVEL CADASTRAR USUARIO ' + e.message
            })
        }

    },

    
    atualizarDados: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        await AutoresModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Autor atualizado com sucesso!"
        })

    },


    deletarDados: async (request, response) => {
        const id = request.params.id;
        await AutoresModel.destroy({
            where: {
                id: id
            }
        })
        // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
        return response.json({
            message: "Autor deletado com sucesso!"
        })

}

}

module.exports = AutoresController;