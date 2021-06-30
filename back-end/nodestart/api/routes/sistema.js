module.exports = app => {
    const controller = app.controllers.sistema;
    app.route('/sistema')
        .post(
           controller.addSistema 
        ).get(controller.get_all_sistema);

    app.route('/sistema/:id')
    	.get(
    		controller.get_sistema_by_id	
    		)
    	.put(controller.update_sistema)
    	.delete(controller.delete_sistema)
}