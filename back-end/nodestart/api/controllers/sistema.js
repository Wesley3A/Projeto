//CRUD

module.exports = app => {

    const controller = {};

    controller.addSistema = function(req, res){

        const nome = req.body.nome;
        app.db.none(`INSERT INTO sistema (nome) VALUES ($1)`,nome);
         
        res.status(200).json(`${nome} inserido com sucesso!`);
    }

    controller.get_all_sistema = function(req, res, next){

        app.db.any('SELECT * FROM sistema')
        	.then(data=>{
	        	res.status(200).json({
	        		status: 'success',
                    data: data,
                    message: 'Todos as inf. do sitema'
        	})
        }).catch(function (err){
            return next(err);
        });
         
    }

    	controller.get_sistema_by_id = function(req, res, next){

        const id = req.params.id;
        app.db.any(`SELECT * FROM sistema WHERE id_sistema = $1`,id)
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

    	controller.update_sistema = function(req, res){

        const id = req.params.id;
        const nome = req.body.nome;
        app.db.any(`UPDATE sistema SET nome = $1 WHERE id = $2`,[nome,id])
        res.status(200).json("sitema atualizado com Sucesso!!")

        //'query VALUES ($1)',  nome 
    }

    	controller.delete_sistema = function(req, res, next){

        const id = req.params.id;
        app.db.any(`DELETE FROM sistema WHERE id_sistema = $1`,[id])
        res.status(200).json("Processo de exclusão, com sucesso!!")
 
    }
    return controller;
}