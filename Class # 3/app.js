const express = require('express')
const app = express()
const path = require('path')

const productRoutes = require('./routes/products')

app.use(express.static(path.join(__dirname, "public")))
 
app.set("view engine", "ejs")
app.set("views" ,"views")

app.use((req, res, next)=>{
    console.log(req.url);
    next();
    
});

app.use('/product', productRoutes);   
app.use('/', (req, res)=>{
    res.render('home', {user : 'Ali Aftab Sheikh'})
})


app.listen(4000)