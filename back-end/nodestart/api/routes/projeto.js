module.exports = app => {
    const controller = app.controllers.projeto;
    app.route('/projeto')
        .post(
           controller.addprojeto 
        ).get(controller.get_all_projeto);

    app.route('/projeto/:id')
    	.get(
    		controller.get_projeto_by_id	
    		)
    	.put(controller.update_projeto)
    	.delete(controller.delete_projeto)
}