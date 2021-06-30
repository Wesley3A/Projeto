//const { verifyJWT } = require("../authorization/autorizacao");

module.exports = app => {
    const controller = app.controllers.Tarefa_tipo;
    app.route('/Tarefa_tipo')
        .post(
           controller.addTarefa_tipo 
        ).get(controller.get_all_Tarefa_tipo);

    app.route('/Tarefa_tipo/:id')
    	.get(
    		controller.get_Tarefa_tipo_by_id	
    		)
    	.put(controller.update_Tarefa_tipo)
    	.delete(controller.delete_Tarefa_tipo)
}