const UsuarioModel = require("../model/UsuarioModel");

const UsuariosServices = {
    validandoUsuarios: async (dados) =>{
        // valida nome
        if(dados.senha.nome < 5){
            throw('O NOME DEVE CONTAR PELO MENOS 5 LETRAS')
        }
        // VALIDA SENHA
        if(dados.senha.length < 8){
            throw('A SENHA DEVE CONTER NO MÍNIMO 8 DIGITOS')
        }

        // VERIFICANDO SE EXISTE UM USUARIO COM O MESMO EMAIL
         const consultaUsuario = await UsuarioModel.findOne({
            where: {
                email: dados.email
            }
         })

         if(consultaUsuario){
            throw("EMAIL JA ESTA SENDO UTILIZADO POR OUTRO USUARIO")
         }
    }
}

module.exports = UsuariosServices;