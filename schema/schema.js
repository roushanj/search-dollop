
const axios = require('axios');
const {

	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql');

const CustomerType = new GraphQLObjectType({
	name:'customer',
	fields:() => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		emailid: {type: GraphQLString},
		age: {type: GraphQLInt}
	})
})

const ProductType = new GraphQLObjectType({
	name:'product',
	fields:() => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		expire_date: {type: GraphQLString},
		brand: {type: GraphQLString}
	})
})

//Root Query

const RootQuery = new GraphQLObjectType({

	name:'RootQueryType',

    fields:{

        product:{
        	type:ProductType,
        	args:{
        		id:{type: GraphQLString}
        	},
        	resolve(parentValue, args){

        		return axios.get('http://localhost:3000/product' + args.id)
        		   .then(res => res.data);
        	}

        },

    	customer:{
			type:CustomerType,
			args:{
				id:{type: GraphQLString}

			},
			resolve(parentValue, args){

				return axios.get('http://localhost:3000/customers/' + args.id)
				    .then(res => res.data);
				
			}
	    },

	    products:{
	    	type: new GraphQLList(CustomerType),
	    	resolve(parentValue, args){
	    		return axios.get('http://localhost:3000/product/')
	    		   .then(res => res.data);
	    	}
	    },

	    customers:{
	    	type: new GraphQLList(CustomerType),
	    	resolve(parentValue, args){
	    		return axios.get('http://localhost:3000/customers/')
	    		   .then(res => res.data);
	    	}
	    }


    }
	 
});

module.exports = new GraphQLSchema({
       query: RootQuery
});


