const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//route for home page
router.get('/', (req,res,next)=>{
   res.render('home');
});