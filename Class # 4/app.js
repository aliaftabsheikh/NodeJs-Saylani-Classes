const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
    console.log(req.url);
    next();
});


app.use("/auth", authRoutes);
app.use("/product", productsRoutes);

app.use("/", (req, res) => {
    res.render("home", {user: "Ishaq"});
});

app.listen(5000);