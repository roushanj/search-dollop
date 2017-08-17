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
	field:() => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		emailid: {type: GraphQLString},
		age: {type: GraphQLInt}
	})
})


//Root Query

const RootQuery = new GraphQLObjectType({

	name:'RootQueryType',
	customer:{
		type:CustomerType
	}
});

module.exports = new GraphQLSchema({

});