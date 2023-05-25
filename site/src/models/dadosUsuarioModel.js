var database = require ("../database/config")

function listar() {
    var instrucao = `
    SELECT idUsuario as id FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: /n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};