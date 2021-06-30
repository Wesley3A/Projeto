//CRUD

module.exports = app => {

    const controller = {};

    controller.addcomentario = function(req, res){
        
        const id_tarefa = req.body.id_tarefa
        const id_usuario = req.body.id_usuario
        const id_pai_comentario = req.body.id_pai_comentario
        const descricao = req.body.descricao

        app.db.none(`INSERT INTO comentario (id_usuario, id_tarefa, descricao, created_at, updated_at, id_pai_comentario) VALUES ($1, $2, $3, now(), now(), $4)`,values);
                                //validar este values
        res.status(200).json(`Dados inserido com sucesso!`);
    }

    controller.get_all_comentario = function(req, res, next){
        app.db.any('SELECT * FROM comentario')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. de comentario'
        	})
        }).catch(function (err){
            return next(err);
        });
    }

    	controller.get_comentario_by_id = function(req, res, next){
            const id = parseInt(req.params.id);
            
            app.db.any(`SELECT * FROM comentario WHERE id = $1`,id)
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

    	controller.update_comentario = function(req, res){

            const id = req.body.id;
            const descricao = req.descricao;
            app.db.any(`UPDATE comentario SET descricao = $1, updated_at = now() WHERE id = $2`,[id,descricao])
            res.status(200).json("Comentario atualizado com Sucesso!!")

            //'query VALUES ($1)',  nome 
        }

    	controller.delete_comentario = function(req, res, next){
            const id = req.params.id;

            app.db.any(`DELETE FROM comentario WHERE id = $1`,[id])
            res.status(200).json("Exclusão ocorrida com sucesso!!")
 
         }
    return controller;
}