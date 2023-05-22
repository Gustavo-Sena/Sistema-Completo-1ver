var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar( email, senha, nome, cpf) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // INSERT INTO empresa (nomeEmpresa, CNPJ, CEP, numero, rua, bairro, cidade, UF, complemento, descricao) VALUES ('${nome}', '${cnpj}', '${cep}', '${numero}', '${rua}', '${bairro}', '${cidade}', '${uf}', '${complemento}', '${desc}');

    var instrucao = `
    INSERT INTO usuario (email, senha, nome, cpf, nivel_acesso) VALUES ('${email}', '${senha}', '${nome}' , '${cpf}', 'NULL');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

module.exports = {
    entrar,
    cadastrar,
    listar,
};


// CREATE TABLE empresa (
// 	idEmpresa INT PRIMARY KEY auto_increment,
//     nomeEmpresa varchar(45),
//     CNPJ CHAR (14) NOT NULL,
//     CEP INT,
//     numero INT,
//     rua VARCHAR(45),
//     bairro VARCHAR(45),
//     cidade VARCHAR(45),
// 	UF CHAR(2),
//     complemento varchar(45),
// 	descricao varchar(45)
// );

// INSERT INTO empresa VALUEs (NULL,'CU','1111111',111111,1,'CU','CU','CU','CU','CU','CU');



// CREATE TABLE usuario (
// idUsuario INT PRIMARY KEY auto_increment,
// nomeUsuario varchar(45),
// tipo CHAR(4), constraint chktipo check (tipo in('dono','funcionario')),
// nivelAcesso VARCHAR(45), constraint chkNivelAcesso check (nivelAcesso in('Total', 'Medio', 'Sem')),
// email VARCHAR(45),
// senha VARCHAR(45),
// cpf char(11),
// fkEmpresa int, foreign key (fkEmpresa) references empresa(idEmpresa)
// );

// INSERT INTO usuario VALUES (NULL, 'CU','dono','Total','CU','CU',11111,1);