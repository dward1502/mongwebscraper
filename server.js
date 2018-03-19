const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const routes = require('./routes/view');
const scrape = require('./controllers/fetch');

const PORT = 3030;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/webScrape");

app.use(routes);
app.use(scrape);

app.listen(PORT, ()=>{
   console.log("App running on port " + PORT);   
});

