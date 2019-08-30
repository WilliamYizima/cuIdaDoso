const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const PostgreSQLStrategy = require('../app/dao/strategies/postgreeStrategy')
const postgree = new PostgreSQLStrategy();

module.exports = (app) => {
    //Código para verificar meu BD e o usuário
//a
    passport.use(new LocalStrategy(
        {
            usernameField:'email',
            passwordField:'senha'
        },
        (email,senha,done)=>{
            
            postgree.login(email)
                    .then( async usuario=>{
                        if(email!=usuario.email || senha!=usuario.senha){
                            return done(null,false,{
                                mensagem:'Login e senha não foram encontrados'
                            })
                        }
                        console.log('encontrado o usuário');
                        return done(null,usuario);
                    })
                    .catch(erro=>done(erro,false));
        }
    ));

    passport.serializeUser((usuario,done)=>{
        const usuarioSessao = {
            email:usuario.email
        };
        done(null,usuarioSessao);
    })

    passport.deserializeUser((usuarioSessao,done)=>{
        done(null,usuarioSessao);
    })

    app.use(sessao({
        secret:'cuidadoso',
        genid:function(req){
            return uuid();
        },
        resave:true,
        saveUninitialized:true
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req,resp,next){
        req.passport = passport;
        next();
    })
}