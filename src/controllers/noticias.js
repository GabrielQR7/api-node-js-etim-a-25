const db = require('../dataBase/connection'); 

module.exports = {
    async listarNoticias(request, response) {
        try {

            const sql = `
                SELECT
                    not_id, usu_id, not_titulo, not_conteudo, not_imagem, not_data_publicacao 
                FROM NOTICIAS;
            `;

            const [rows] = await db.query(sql);

            const nRegistros = rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de noticias',
                nRegistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarNoticias(request, response) {
        try {

            const { usu_id, not_titulo, not_conteudo, not_imagem } = request.body;

            //instruçao SQL
            const sql = `
                INSERT INTO NOTICIAS
                 (usu_id, not_titulo, not_conteudo, not_imagem) 
                 VALUES

              (?, ?, ?, ?)
            `;
            
            //definição dos dados a serem inseridos em um array
            const values = [ usu_id, not_titulo, not_conteudo, not_imagem ];

            //execução da instrução sql passando os parâmetros
            const [result] = await db.query(sql, values);

            //identificação do ID de registro inserido
            const dados = {

                id: result.insertId,
                titulo,
                conteudo,
                imagem

            };

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de usuários',
                dados: dados
            });



            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de noticias', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 

    async editarNoticias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de noticia', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarNoticias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de noticia', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  

