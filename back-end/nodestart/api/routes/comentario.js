//const { verifyJWT } = require("../authorization/autorizacao");

module.exports = app => {
    const controller = app.controllers.comentario;
    app.route('/comentario')
        .post(
           controller.addcomentario 
        ).get(controller.get_all_comentario);

    app.route('/comentario/:id')
    	.get(
    		controller.get_comentario_by_id	
    	)
    	.put(controller.update_comentario)
    	.delete(controller.delete_comentario)
}