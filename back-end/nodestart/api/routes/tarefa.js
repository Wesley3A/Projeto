module.exports = app => {
    const controller = app.controllers.tarefa;
    app.route('/tarefa')
        .post(
           controller.addtarefa 
        ).get(controller.get_all_tarefa);

    app.route('/tarefa/:id')
    	.get(
    		controller.get_tarefa_by_id	
    		)
    	.put(controller.update_tarefa)
    	.delete(controller.delete_tarefa)
}