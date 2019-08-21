module.exports = (app)=>{
    
    app.get('/',(req,resp)=>{
        resp.send('teste')
    })

    app.get('/login',(req,resp)=>{
        resp.render('../views/login.ejs')
    })
}