//const { verifyJWT } = require("../authorization/autorizacao");

module.exports = app => {
    const controller = app.controllers.usuario;
    app.route('/usuario')
        .post(
           controller.addusuario 
        ).get(controller.get_all_usuario);

    app.route('/usuario/:id')
    	.get(
    		controller.get_usuario_by_id	
    		)
    	.put(controller.update_usuario)
    	.delete(controller.delete_usuario)
}