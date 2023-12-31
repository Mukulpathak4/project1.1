const path =require("path");
const http = require("http");

const bodyParser = require("body-parser");

const express = require("express");
const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded(extended = false));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

const server = http.createServer(app);

server.listen(3000);
