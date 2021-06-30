//CRUD

module.exports = app => {

    const controller = {};


    //Inserção
    controller.addprojeto = function(req, res){

        const titulo = req.body.titulo
        const descricao = req.body.descricao
        const data_inicio = req.body.data_inicio
        const data_fim = req.body.data_fim
        const id_criador = req.body.id_criador
        const id_sistema = req.body.id_sistema

        // outra maneira de fazer - Desestruturação:
        ///const {titulo, descricao,data_inicio_data, fim, id_criador_id_sistema} = req.body

        app.db.none(`INSERT INTO projeto (titulo,descricao,data_inicio,data_fim,id_criador,id_sistema,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,now(),now())`,[titulo,descricao,data_inicio,data_fim,id_criador,id_sistema]);
         
        res.status(200).json(`${titulo} Dados inseridos com sucesso!`);
    }//fim inserção

    //consulta na tabela projeto
       controller.get_all_projeto = function(req, res, next){

        app.db.any('SELECT * FROM projeto')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. do projeto'
        	})
        }).catch(function (err){
            return next(err);
        });

    }
        ///Fim da consulta na tabela projeto
        //Consulta pelo ID no projeto
    	controller.get_projeto_by_id = function(req, res, next){
        const id = req.params.id;

        app.db.any(`SELECT * FROM projeto WHERE id_projeto = $1`,id)
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Retorno do Id com sucesso tiozão'
        	})
        }).catch(function (err){
            return next(err);
        });

       
    } //FIM da Consulta pelo ID no projeto
       
        //INicio do meu UPDATE no projeto
    	controller.update_projeto = function(req, res, next){
        const id_sistema = req.body.id_sistema
        const id_criador = req.body.id_criador
        const titulo = req.body.titulo
        const descricao = req.body.descricao
        const data_inicio = req.body.data_inicio
        const data_fim = req.body.data_fim
        const id = req.params.id;
        app.db.any(`UPDATE projeto SET titulo = $1, descricao = $2, data_inicio = $3, data_fim = $4, id_criador = $5, id_sistema = $6, updated_at = now() WHERE id_sistema = $7`,VALUES)
        res.status(200).json("Projeto atualizado com Sucesso, ihull!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_projeto = function(req, res, next){
        const id = req.params.id;
        app.db.any(`DELETE FROM projeto WHERE id = $1`,[id])
        res.status(200).json("Processo de exclusão, ocorrido com sucesso!!")

        //'query VALUES ($1)',  nome 
    }
    return controller;
}