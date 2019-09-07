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

    

    app.get('/cadastro',(req,resp)=>{
        resp.render('cadastro')
    })

    
    app.post('/login',(req,resp,next)=>{

        // const passport = req.passport;
        
        //     passport.authenticate('local',{
        //         successRedirect:'/',
        //         failureRedirect:'/usuarios/login',
        //         failureFlash:true
        //     })(req,res,next)
        // })
        req.passport.authenticate('local',(erro,usuario,info)=>{
                
                if(info){
                    console.log("Deu erro index")
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