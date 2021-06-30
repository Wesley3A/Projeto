//CRUD

module.exports = app => {

    const controller = {};

    controller.addusuario = function(req, res){
        const nome = req.body.nome
        app.db.none(`INSERT INTO usuario (nome) VALUES ($1)`,nome);
         
        res.status(200).json(`${nome} inserido com sucesso!`);
    }

    controller.get_all_usuario = function(req, res, next){
        app.db.any('SELECT * FROM usuario')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                     data: data,
                     message: 'Todos as inf. da usuario'
        	})
        }).catch(function (err){
            return next(err);
        });
    }

    	controller.get_usuario_by_id = function(req, res, next){
        const id = parseInt(req.params.id);
        
        app.db.any(`SELECT * FROM usuario WHERE id = $1`,id)
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

    	controller.update_usuario = function(req, res){

        const id = req.params.id;
        const nome = req.body.nome;
        app.db.any(`UPDATE usuario SET nome = $1 WHERE id_usuario = $2`,[nome,id])
        res.status(200).json("Dados do usuario atualizado com Sucesso!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_usuario = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM usuario WHERE id_usuario = $1`,[id])
        res.status(200).json("Exclusão ocorrida com sucesso!!")
 
    }
    return controller;
}