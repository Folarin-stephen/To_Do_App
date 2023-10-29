const express = require("express");
const app = express();
const viewsRouter = require("./views/views.router")
const todoRouter = require('./views/partials/todo')

const PORT = process.env.PORT || 3008
const db = require('./db/index');
db.connect();
app.use(express.json())
app.use(express.urlencoded ({extended:true}))


app.use('/views/', viewsRouter)
app.use('/views/', todoRouter)

app.set('view engine', 'ejs');




app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`);
})


