const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//route for home page
router.get('/', (req,res,next)=>{
   res.render('home');
});

router.get('/saved', (req,res,next)=>{
   res.render('saved');
});
module.exports = router;