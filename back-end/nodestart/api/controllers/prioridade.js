//CRUD

module.exports = app => {

    const controller = {};

    controller.addprioridade = function(req, res){

        const descricao = req.body.descricao;
        app.db.none(`INSERT INTO prioridade (descricao) VALUES ($1)`,descricao);
         
        res.status(200).json(`${descricao} inserido com sucesso!`);
    }

    controller.get_all_prioridade = function(req, res, next){

        app.db.any('SELECT * FROM prioridade')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. da prioridade'
        	})
        }).catch(function (err){
            return next(err);
        });
         
    }
    	controller.get_prioridade_by_id = function(req, res, next){

        const id = req.params.id;
        app.db.any(`SELECT * FROM prioridade WHERE id = $1`,id)
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Retorno do Id com sucesso tiozão'
        	})
        }).catch(function (err){
            return next(err);
        });

         
    }

    	controller.update_prioridade = function(req, res){

        const id = req.params.id;
        const descricao = req.body.descricao;
        app.db.any(`UPDATE prioridade SET nome = $1 WHERE id_prioridade = $2`,[descricao,id])
        res.status(200).json("prioridade atualizado com Sucesso!!")

       
    }

    	controller.delete_prioridade = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM prioridade WHERE id = $1`,[id])
        res.status(200).json("Processo de exclusão, com sucesso!!")
 
    }
    return controller;
}