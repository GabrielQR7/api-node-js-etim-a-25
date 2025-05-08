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

                 (1, 'Nova atualização disponível!', 'A versão 1.2 do jogo já está disponível para download. Confira as novidades e correções de bugs.', 'atualizacao_v1_2.jpg'),
                 (2, 'Dicas para avançar na fase 5', 'Confira algumas dicas para superar os desafios da fase 5 e desbloquear o personagem secreto.', 'dicas_fase_5.jpg'),
                 (3, 'Evento especial de Natal', 'Participe do nosso evento de Natal e ganhe recompensas exclusivas! O evento vai até o dia 25/12.', 'evento_natal.jpg'),
                 (4, 'Conheça os personagens do jogo', 'Descubra a história e as habilidades dos personagens principais do jogo.', 'personagens_jogo.jpg'),
                 (5, 'Correção de bugs críticos', 'A versão 1.1.1 corrige problemas de travamento e salvamento de progresso. Baixe agora!', 'correcao_bugs.jpg'),
                 (6, 'Sugestões da comunidade', 'Confira as sugestões enviadas pelos jogadores e saiba o que estamos planejando para o futuro.', 'sugestoes_comunidade.jpg'),
                 (7, 'Novo trailer do jogo', 'Assista ao novo trailer do jogo e veja cenas inéditas da história.', 'trailer_jogo.jpg'),
                 (8, 'Requisitos mínimos atualizados', 'Confira os novos requisitos mínimos para rodar o jogo com melhor desempenho.', 'requisitos_jogo.jpg'),
                 (9, 'Concurso de cosplay do jogo', 'Participe do nosso concurso de cosplay e concorra a prêmios incríveis!', 'concurso_cosplay.jpg'),
                 (10, 'Planejamento para 2024', 'Saiba o que a equipe de desenvolvimento está preparando para o próximo ano.', 'planejamento_2024.jpg');
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

