const PageControlador = require('../controllers/page-controllers')
const pageControlador = new PageControlador();
const passport = require('passport')

module.exports = (app)=>{
    
    app.get('/',(req,resp)=>{
        resp.render('index')
    })

    app.get('/login',(req,resp)=>{
        resp.render('login')
    })

    app.get('/logado',(req,resp)=>{
        resp.render('logado')
    })

    
    app.post('/login',(req,resp,next)=>{

        // const passport = req.passport;
       
        req.passport.authenticate('local',(erro,usuario,info)=>{

                if(info){
                    console.log('deu erro')
                    return resp.render('index');
                }
                if(erro){
                    console.log('deu erro')
                    return next(erro)
                }
                req.login(usuario,(erro)=>{
                    if(erro){
                        return next(erro);
                    }
                    console.log('deu certo')
                    return resp.render('logado')
                });
            })(req,resp,next)
        }
    
    );
}