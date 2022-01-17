const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const formRoutes = require('./routes/form')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next)=>{
    console.log(req.url);
    next();
    
});

app.use('/form', formRoutes);   
app.use('/', (req, res)=>{
    res.send('Welcome to express app')
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

app.listen(3000)