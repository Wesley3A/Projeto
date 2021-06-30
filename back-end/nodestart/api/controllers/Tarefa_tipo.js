//CRUD

module.exports = app => {

    const controller = {};

    controller.addTarefa_tipo = function(req, res){
        const descricao = req.body.descricao
        app.db.none(`INSERT INTO Tarefa_tipo (descricao) VALUES ($1)`,descricao);
         
        res.status(200).json(`${descricao} inserido com sucesso!`);
    }

    controller.get_all_Tarefa_tipo = function(req, res, next){
        app.db.any('SELECT * FROM Tarefa_tipo')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. da Tarefa_tipo'
        	})
        }).catch(function (err){
            return next(err);
        });
    }

    	controller.get_Tarefa_tipo_by_id = function(req, res, next){
        const id = parseInt(req.params.id);
        
        app.db.any(`SELECT * FROM Tarefa_tipo WHERE id = $1`,id)
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

    	controller.update_Tarefa_tipo = function(req, res){

        const id = req.params.id;
        const name = req.body.name;
        app.db.any(`UPDATE Tarefa_tipo SET descricao = $1 WHERE id = $2`,[descricao,id])
        res.status(200).json("Dados do Tarefa_tipo atualizado com Sucesso!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_Tarefa_tipo = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM Tarefa_tipo WHERE id = $1`,[id])
        res.status(200).json("Exclusão ocorrida com sucesso!!")
 
    }
    return controller;
}