const {

	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql');

const customers = [

      {id:'1', name:'Roushan', emailid:'roushan.jha0709@gmail.com', age:22},
      {id:'2', name:'Raju', emailid:'raju.jha0709@gmail.com', age:21},
      {id:'3', name:'Happy', emailid:'happy.jha0709@gmail.com', age:21},
      {id:'4', name:'jeetu', emailid:'jeetu0709@gmail.com', age:21}
];


const CustomerType = new GraphQLObjectType({
	name:'customer',
	fields:() => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		emailid: {type: GraphQLString},
		age: {type: GraphQLInt}
	})
})


//Root Query

const RootQuery = new GraphQLObjectType({

	name:'RootQueryType',

    fields:{
    	customer:{
			type:CustomerType,
			args:{
				id:{type: GraphQLString}

			},
			resolve(parentValue, args){
				for (let i = 0; i < customers.length; i++) {
					if (customers[i].id == args.id) {
						return customers[i];
					}
				}
			}
	    }
    }
	 
});

module.exports = new GraphQLSchema({
       query: RootQuery
});


