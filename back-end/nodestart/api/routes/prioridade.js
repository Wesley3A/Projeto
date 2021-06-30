module.exports = app => {
    
    const controller = app.controllers.prioridade;
    
    app.route('/prioridade')
        .post(
           controller.addprioridade
        )
        .get(
            controller.get_all_prioridade

        );

    app.route('/prioridade/:id')
    	.get(
    	       	controller.get_prioridade_by_id	
    		)

    	.put(controller.update_prioridade)
    	.delete(controller.delete_prioridade)
}