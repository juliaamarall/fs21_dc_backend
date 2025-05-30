const UsuarioModel = require('./src/model/UsuarioModel.js')
const AutoresModel = require('./src/model/AutoresModel.js')
async function criarUsuario() {
    const dados = {
        nome: 'julia',
        email: 'julia@admin.com.br',
        senha: '123123',
        ativo: true
    }
    const resultado = await UsuarioModel.create(dados)
    // UsuarioModel.update()
    // UsuarioModel.findAll()
    // UsuarioModel.destroy()
    console.log(resultado)
}

criarUsuario()

// async function criarAutores() {
//     const dados = {
//         nome: 'rai',
//         nacionalidade: 'brasileiro',
//     }
//     const resultado = await AutoresModel.create(dados)
//     // UsuarioModel.update()
//     // UsuarioModel.findAll()
//     // UsuarioModel.destroy()
//     console.log(resultado)
// }

// criarAutores()


// async function atualizarAutores() {
//     const dados = {
//         nome: 'julia',
//         nacionalidade: 'brasileira',
        
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
// atualizarAutores()
