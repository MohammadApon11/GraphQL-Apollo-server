const typeDefs = `#graphql

    enum GenderEnum {
        Female
        Male
        Others
    }

    input UserInput {
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: String!
        isMarried: Boolean!
    }

    input PostInput {
        title: String!
        description: String!
        user: String!
    }

    input UpdateUserInput {
        firstName: String
        lastName: String
        gender: GenderEnum
        phone: String
        email: String
        isMarried: Boolean
    }

    input UpdatePostInput {
        title: String
        description: String
        user: String
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: String!
        isMarried: Boolean!
        posts: [Post!]
    }

    type Post {
        id: ID!
        title: String!
        description: String!
        user: User!
    }

    type Query {
        users: [User!]!
        user(id:ID!):User
        posts:[Post!]!
        post(id:ID!):Post
    }

    type Mutation {
        addUser(input: UserInput):User  
        updatedUser(id:ID! input: UpdateUserInput ):User
        addPost(input:PostInput):Post
        updatePost(id:ID! input: UpdatePostInput ):Post
    }

`;
module.exports = typeDefs;
