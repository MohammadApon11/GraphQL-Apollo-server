const { parse } = require("graphql");
const { users, posts } = require("../data");

const resolvers = {
  Post: {
    user(post) {
      return users.find((user) => parseInt(user.id) === parseInt(post.user));
    },
  },
  Query: {
    users(root, args) {
      return users;
    },
    user(_, { id }) {
      return users.find((user) => parseInt(user.id) == parseInt(id));
    },
    posts() {
      return posts;
    },
    post(_, { id }) {
      return posts.find((post) => parseInt(post.id) === parseInt(id));
    },
  },
  Mutation: {
    addUser(
      root,
      {
        input: { firstName, lastName, gender, phone, email, result, isMarried },
      }
    ) {
      const user = {
        id: users.length + 1,
        firstName,
        lastName,
        gender,
        phone,
        email,
        result,
        isMarried,
        posts: [],
      };
      users.push(user);
      return user;
    },
    addPost(root, { input: { title, description, user } }) {
      const post = {
        id: posts.length + 1,
        title,
        description,
        user,
      };
      posts.push(post);
      return post;
    },
    updatedUser(
      _,
      { id, input: { firstName, lastName, gender, phone, email, isMarried } }
    ) {
      let updatedUser = null;
      users.forEach((user) => {
        if (parseInt(user.id) === parseInt(id)) {
          if (firstName) user.firstName = firstName;
          if (lastName) user.lastName = lastName;
          if (gender) user.gender = gender;
          if (phone) user.phone = phone;
          if (email) user.email = email;
          if (isMarried) user.isMarried = isMarried;
          updatedUser = user;
        }
      });
      return updatedUser;
    },
    updatePost(_, { id, input: { title, description, user } }) {
      let updatedPost = null;
      posts.forEach((post) => {
        if (post.id === id) {
          if (title) post.title = title;
          if (description) post.description = description;
          if (user) post.user = user;
          updatedPost = post;
        }
      });
      return updatedPost;
    },
  },
  User: {
    posts(user) {
      return posts.filter((post) => {
        if (user.posts.includes(post.id)) return true;
        return false;
      });
    },
  },
};

module.exports = resolvers;
