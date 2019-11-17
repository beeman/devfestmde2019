const typeDefs = `
  type Query {
    uptime: Int!
  }
`
const resolvers = {
  Query: {
    uptime: () => process.uptime()
  }
}

import { GraphQLServer }
  from 'graphql-yoga'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start()













// // type Query {
// //   hello(name: String): String!
// //   uptime: Int!
// // }
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => {
//       name = name || 'world'
//       return 'Hello ' + name
//     },
//     uptime: () => process.uptime()
//   }
// };
//
//
//
//
//
//
//
// import { GraphQLServer } from 'graphql-yoga';
//
// const server = new GraphQLServer({
//   typeDefs,
//   resolvers
// });
//
// server.start();
