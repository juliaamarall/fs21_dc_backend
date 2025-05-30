const UsuarioModel = require('./src/model/UsuarioModel.js')
const AutoresModel = require('./src/model/AutoresModel.js')
// async function criarUsuario() {
//     const dados = {
//         nome: 'admin',
//         email: 'admin@admin.com.br',
//         senha: '123123',
//         ativo: true
//     }
//     const resultado = await UsuarioModel.create(dados)
//     // UsuarioModel.update()
//     // UsuarioModel.findAll()
//     // UsuarioModel.destroy()
//     console.log(resultado)
// }

// criarUsuario()

async function criarAutores() {
    const dados = {
        nome: 'julia',
        nacionalidade: 'julia@admin.com.br',
    }
    const resultado = await AutoresModel.create(dados)
    // UsuarioModel.update()
    // UsuarioModel.findAll()
    // UsuarioModel.destroy()
    console.log(resultado)
}

criarAutores()


// async function atualizarUsuario() {
//     const dados = {
//         nome: 'Administrador',
//         email: 'admin@admin.com.br',
//         senha: '123456',
//         ativo: true
//     }
//     await UsuarioModel.update(
//         dados, 
//         { 
//             where: { 
//                 id: 1 
//             } 
//         }
//     )
// }
// atualizarUsuario()
