const express = require('express');
const userService = require('../users/users.services');
const logger = require('../logger');
const jwt = require("jsonwebtoken")
const userModel = require("../models/usermodel")


const router = express.Router();

   router.get('/', (req, res) => {
        res.status(200).render("/index")
    })

    router.post('/login',  async (req, res) => {
    console.log(req.body);
    const response = await userService.Login({email: req.body.email, password: req.body.password})
    console.log(response);
    
       
    if (response.code === 200) {
        return res.redirect('/views/welcome');
        process.exit(1)
    } else {
       return res.render("/index")
    }
    })


    router.get('/welcome', (req, res) =>{
        res.render("welcome")
    })
    
 



module.exports = router
