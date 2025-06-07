const UsuarioModel = require("../model/UsuarioModel.js");
const UsuariosServices = require("../services/UsuariosServices.js");
const UsuarioController = {
    
        listar: async (request, response) => {
            const dados = await UsuarioModel.findAll();
            return response.json(dados);
        
    },

        listarId: async (request, response) => {
            const id = request.params.id;
            const dados = await UsuarioModel.findByPk(id);
            return response.json(dados);
        
    } ,

        criarDados: async (request, response) => {

            try{
                const dados = request.body;
                await UsuariosServices.validandoUsuarios(dados)
                await UsuarioModel.create(dados);
                return response.json({ 
                    message: 'Usuário criado com sucesso!',
                    data: dados
                })
    
            } catch(e){
                return response.status(500).json({
                    message: 'NÃO FOI POSSIVEL CADASTRAR USUARIO ' + e
                })
            }
    
        },

        
        atualizarDados: async (request, response) => {
            const dados = request.body;
            const id = request.params.id;
            await UsuarioModel.update(dados, {
                where: {
                    id: id
                }
            });
            return response.json({
                message: "Usuário atualizado com sucesso!"
            })

        },


        deletarDados: async (request, response) => {
            const id = request.params.id;
            await UsuarioModel.destroy({
                where: {
                    id: id
                }
            })
            // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
            return response.json({
                message: "Usuário deletado com sucesso!"
            })

}

}

module.exports = UsuarioController;