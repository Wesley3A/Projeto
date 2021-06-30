//const { verifyJWT } = require("../authorization/autorizacao");

module.exports = app => {
    const controller = app.controllers.grupo;
    app.route('/grupo')
        .post(
           controller.addgrupo 
        ).get(controller.get_all_grupo);

    app.route('/grupo/:id')
    	.get(
    		controller.get_grupo_by_id	
    		)
    	.put(controller.update_grupo)
    	.delete(controller.delete_grupo)
}