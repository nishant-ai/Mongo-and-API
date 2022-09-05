// Packages
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


// App Config
const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// APIs - Routes
const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);


// Database Config
db_url = '<DUMMY_DATA>'; // contains username & password
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.connection.on('open', () => {
    console.log("Mongo Says Hello!");
})


// App Listen
app.listen(PORT, () => {
    console.log(`App Listening @PORT: ${PORT}`);
})