const express = require('express');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const db = require("../models");
const axios = require('axios');

const app = express();

app.get("/scrape", (req,res)=>{
   axios.get("https://www.leafly.com/news").then((response)=>{
      var $ = cheerio.load(response.data);

      $("header ").each((i,element)=>{
         let result = [];
         
         result.title = $(this).children("h2").text();
         result.link = $(this).children("a").attr("href");
         
         db.Headline.create(result).then((dbArticle)=>{
            console.log(dbArticle);            
         }).catch((err)=>{
            return res.json(err);
         });
         console.log(result);
         
      });
      
      res.send("Scrape Complete");
   });
});
module.exports = app;

