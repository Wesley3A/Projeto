//CRUD

module.exports = app => {

    const controller = {};


    //Inserção
    controller.addtarefa = function(req, res){

        const titulo = req.body.titulo
        const descricao = req.body.descricao
        const id_projeto = req.body.id_projeto
        const id_criador = req.body.id_criador
        const id_dev = req.body.id_dev
        const tempo_estimado = req.body.tempo_estimado
        const data_inicio = req.body.data_inicio
        const data_fim = req.body.data_fim
        const id_pai_tarefa = req.body.id_pai_tarefa
        const id_tipo_tarefa = req.body.id_tipo_tarefa
        const id_status_tarefa = req.body.id_status_tarefa
        const data_inicio_dev = req.body.data_inicio_dev
        const data_fim_dev = req.body.data_fim_dev
        const created_at = req.body.created_at
        const updated_at = req.body.updated_at
        const tempo_realizado = req.body.tempo_realizado
        const authorized = req.body.authorized
        const id_prioridade = req.body.id_prioridade
        const complexidade = req.body.complexidade
        const impacto = req.body.impacto
        const id_grupo= req.body.id_grupo
        

        // outra maneira de fazer - Desestruturação:
        ///const {titulo, descricao,data_inicio_data, fim, id_criador_id_sistema} = req.body

        app.db.none('INSERT INTO tarefa (titulo, descricao, id_projeto, id_criador, id_dev, tempo_estimado, data_inicio, '+
        ' data_fim, id_pai_tarefa, id_tipo_tarefa, id_status_tarefa, data_inicio_dev, data_fim_dev, '+
        ' created_at, updated_at, tempo_realizado, authorized, id_prioridade, complexidade, impacto, id_grupo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)', values);
         
        res.status(200).json(`Dados inseridos com sucesso!`);
    }//fim inserção

    //consulta na tabela tarefa
       controller.get_all_tarefa = function(req, res, next){

        app.db.any('SELECT * FROM tarefa')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. do tarefa'
        	})
        }).catch(function (err){
            return next(err);
        });

    }
        ///Fim da consulta na tabela tarefa
        //Consulta pelo ID no tarefa
    	controller.get_tarefa_by_id = function(req, res, next){
        const id = req.params.id;

        app.db.any(`SELECT * FROM tarefa WHERE id_tarefa = $1`,id)
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Retorno do Id com sucesso tiozão'
        	})
        }).catch(function (err){
            return next(err);
        });

       
    } //FIM da Consulta pelo ID no tarefa
       
        //INicio do meu UPDATE no tarefa
    	controller.update_tarefa = function(req, res){
        const id_sistema = req.body.id_sistema
        const id_criador = req.userId
        const titulo = req.body.titulo
        const descricao = req.body.descricao
        const data_inicio = req.body.data_inicio
        const data_fim = req.body.data_fim
        const id = req.params.id;
        app.db.any(`UPDATE tarefa SET titulo = $1, descricao = $2, data_inicio = $3, data_fim = $4, id_criador = $5, id_sistema = $6, updated_at = now() WHERE id_sistema = $7`,VALUES)
        res.status(200).json("tarefa atualizado com Sucesso, ihull!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_tarefa = function(req, res, next){
        const id = req.params.id;
        app.db.any(`DELETE FROM tarefa WHERE id = $1`,[id])
        res.status(200).json("Processo de exclusão, ocorrido com sucesso!!")

    }
    return controller;
}