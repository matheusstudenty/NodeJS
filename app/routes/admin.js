module.exports = application => {
    application.get('/formulario_inclusao_noticia', (req, res) => { 
        res.render("admin/form_add_noticia")
    });

    application.post('/noticias/salvar', (req, res) => { 
        var noticia = req.body;

        //conexao
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        //model
        noticiasModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        });
    });
}
