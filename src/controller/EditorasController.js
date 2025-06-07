const EditorasModel = require("../model/EditorasModel.js")
const EditorasController = {
    
    listar: async (request, response) => {
        const dados = await EditorasModel.findAll();
        return response.json(dados);
    
},

    listarId: async (request, response) => {
        const id = request.params.id;
        const dados = await EditorasModel.findByPk(id);
        return response.json(dados);
    
} ,

    criarDados: async (request, response) => {

        try{
            const dados = request.body;
            await EditorasModel.create(dados);
            return response.json({ 
                message: 'Editora cadastrada com sucesso!',
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
        await EditorasModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Editora atualizada com sucesso!"
        })

    },


    deletarDados: async (request, response) => {
        const id = request.params.id;
        await EditorasModel.destroy({
            where: {
                id: id
            }
        })
        // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
        return response.json({
            message: "Editora deletada com sucesso!"
        })

}

}

module.exports = EditorasController;