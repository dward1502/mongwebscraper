const express = require('express');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const db = require("../models");
const axios = require('axios');
const request = require('request');

const app = express();

// app.get("/scrape", (req,res)=>{
//    axios("https://www.leafly.com/news", function(response,html,error){
    
//         var $ = cheerio.load(html);
//         $('span.leafly-title').each(function (i, element) {

//             var title = $(this).text();
//             var url = $(this).parent().attr('href');
//             var data = {         
//                 title: title,
//                 url: url             
//             };
//             console.log(data);
//             db.Headline.create(data).then((dbArticle) => {
//             console.log(dbArticle);            
//             }).catch((err)=>{
//                 return res.json(err);
//             });         
//         });
//            res.send("Scrape Complete");
         
//    });
// });
request.get("https://www.leafly.com/news", function (error, response, html, res) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('span.leafly-title').each(function (i, element) {

            var title = $(this).text();
            var url = $(this).parent().attr('href');
            var data = {         
                title: title,
                url: url             
            };
            console.log(data);
            db.Headline.create(data).then((dbArticle,res) => {
            console.log(dbArticle);            
            }).catch((err)=>{
                
            });         
        });
       
    }
});
module.exports = app;

