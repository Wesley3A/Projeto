//CRUD

module.exports = app => {

    const controller = {};

    controller.addTarefa_status = function(req, res){
        const descricao = req.body.descricao
        app.db.none(`INSERT INTO Tarefa_status (descricao) VALUES ($1)`,descricao);
         
        res.status(200).json(`${descricao} inserido com sucesso!`);
    }

    controller.get_all_Tarefa_status = function(req, res, next){
        app.db.any('SELECT * FROM Tarefa_status')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. da Tarefa_status'
        	})
        }).catch(function (err){
            return next(err);
        });
    }

    	controller.get_Tarefa_status_by_id = function(req, res, next){
        const id = parseInt(req.params.id);
        
        app.db.any(`SELECT * FROM Tarefa_status WHERE id = $1`,id)
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

    	controller.update_Tarefa_status = function(req, res){

        const id = req.params.id;
        const descricao = req.body.descricao;
        app.db.any(`UPDATE Tarefa_status SET nome = $1 WHERE id_Tarefa_status = $2`,[descricao,id])
        res.status(200).json("Dados do Tarefa_status atualizado com Sucesso!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_Tarefa_status = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM Tarefa_status WHERE id = $1`,[id])
        res.status(200).json("Exclusão ocorrida com sucesso!!")
 
    }
    return controller;
}