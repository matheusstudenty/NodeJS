var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);
var rotaHome = require('./app/routes/home')(app);

app.listen(3000, () => { 
    console.log('Servidor ON'); 
})


//Parei na aula 25... 