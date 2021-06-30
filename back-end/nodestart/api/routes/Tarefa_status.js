//const { verifyJWT } = require("../authorization/autorizacao");

module.exports = app => {
    const controller = app.controllers.Tarefa_status;
    app.route('/Tarefa_status')
        .post(
           controller.addTarefa_status 
        ).get(controller.get_all_Tarefa_status);

    app.route('/Tarefa_status/:id')
    	.get(
    		controller.get_Tarefa_status_by_id	
    		)
    	.put(controller.update_Tarefa_status)
    	.delete(controller.delete_Tarefa_status)
}