const getIsoDate = () => (new Date()).toISOString();

const getUser = () => ({
  id: Date.now(),
  role: "ADMIN",
  name: "cane",
  email: "cane@abel.com",
  createdAt: getIsoDate(),
  updatedAt: getIsoDate()
});

const getPost = () => ({
  id: Date.now(),
  title: "Mitigating Resource-Exhaustion Attacks (DDoS) on GraphQL APIs",
  content: "Mitigating Resource-Exhaustion Attacks (DDoS) on GraphQL APIs",
  createdAt: getIsoDate(),
  updatedAt: getIsoDate(),
  publishedAt: getIsoDate(),
  isPublished: true
});

const resolvers = {
  // resolvers for all available queries for the `Query` type in our schema.
  Query: {
    me: () => getUser(),
    user: () => getUser(),
    post: () => getPost(),
  },
  Post: {
    author: () => getUser() // resolve the `author` field on `Post` type
  },
  User: {
    posts: (user, variables) => (
      Array.from({ length: variables?.filter?.postCount || 100 }, getPost)   // resolve the `posts` field on `User` type
    )
  }
};

export {
  resolvers as default
};