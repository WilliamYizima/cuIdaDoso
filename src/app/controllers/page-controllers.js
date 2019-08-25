class PageControlador {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }
    // login() {
        
    //     return function(req, resp) {
            
    //     };
    // }

    // efetuaLogin() {

    //     const passport = req.passport;
    //     return function(req, resp, next) {
    //         passport.authenticate('local',(erro,usuario,info)=>{
    //             if(info){
    //                 return resp.render('index');
    //             }
    //             if(erro){
    //                 return next(erro)
    //             }
    //             req.login(usuario,(erro)=>{
    //                 if(erro){
    //                     return next(erro);
    //                 }
    //                 return resp.render('logado')
    //             });
    //         })(req,resp,next)
    //     }
    // }
}

module.exports = PageControlador;