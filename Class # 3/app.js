const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// const formRoutes = require('./routes/form')

// app.use(bodyParser.urlencoded({extended : false}))
// app.use(express.static(path.join(__dirname, "public")))
 
app.set("view engine", "ejs")
app.set("views" ,"views")

app.use((req, res, next)=>{
    console.log(req.url);
    next();
    
});

// app.use('/form', formRoutes);   
app.use('/', (req, res)=>{
    res.render('home', {user : 'Ali Aftab Sheikh'})
})

// app.post("/form",(req, res, next)=>{
//     res.send(req.url + 'Check')
// });

// app.use("/", (req, res, next)=>{
//     res.send(`<form action ="/form" method ="POST">
//     <input name = "data"/>
//     <button>Submit</button>
//     </form>`
//     );
// });

app.listen(4000)