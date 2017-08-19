const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema.js');


const app = express();

mongoose.connect('mongodb://oliver:oliver@ds151963.mlab.com:51963/graphql')
const db = mongoose.connection;

db.on('error', () => console.log('Failed'))
   .once('open', () => console.log('connected'))

app.use('/graphql', expressGraphQL({
     
     schema:schema,
     graphiql:true

}));


app.listen(process.env.PORT || 4000, function() {

	console.log('server is listening');
});