module.exports = application => {  
    application.get('/noticias', (req, res) => {

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);
        
        noticiasModel.getNoticias((error, result) => {
            res.render("noticias/noticias", { noticias : result });
        });
    });
};