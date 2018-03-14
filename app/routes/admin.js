module.exports = application => {
    application.get('/formulario_inclusao_noticia', (req, res) => { 
        res.render("admin/form_add_noticia")
    });

    application.post('/noticias/salvar', (req, res) => { 
        var noticia = req.body;

        //conexao
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        //model
        noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
            res.redirect('/noticias');
        });
    });
}
