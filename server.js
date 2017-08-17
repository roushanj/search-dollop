const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');


const app = express();

app.use('/graphql', expressGraphQL({
     
     schema:schema,
     graphiql:true

}));


app.listen(process.env.PORT || 4000, function() {

	console.log('server is listening');
});