const express = require("express");

const router = express()





router.post('/add/todo', async (req, res) => {
    const todo = await req.body.Addtodo;
    console.log(req.body);
    console.log(todo);

})

module.exports = router