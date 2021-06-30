//CRUD

module.exports = app => {

    const controller = {};

    controller.addgrupo = function(req, res){
        const id_projeto = req.body.id_projeto
        const descricao = req.body.descricao
        app.db.none(`INSERT INTO grupo (id_projeto, descricao) VALUES ($1)`,VALUES);
         
        res.status(200).json(`Grupo inserido com sucesso!`);
    }

    controller.get_all_grupo = function(req, res, next){
        app.db.any('SELECT * FROM grupo')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. da grupo'
        	})
        }).catch(function (err){
            return next(err);
        });
    }

    	controller.get_grupo_by_id = function(req, res, next){
        const id = parseInt(req.params.id);
        
        app.db.any(`SELECT * FROM grupo WHERE id = $1`,id)
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

    	controller.update_grupo = function(req, res){

        const id_projeto = req.params.id_projeto;
        const descricao = req.body.descricao;
        app.db.any(`UPDATE grupo SET nome = $1 WHERE id_grupo = $2`,[id_projeto,descricao])
        res.status(200).json("Dados do grupo atualizado com Sucesso!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_grupo = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM grupo WHERE id_grupo = $1`,[id])
        res.status(200).json("Exclusão ocorrida com sucesso!!")
 
    }
    return controller;
}