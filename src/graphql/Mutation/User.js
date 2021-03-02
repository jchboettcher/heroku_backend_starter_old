// Import Objection Models Here!
const User = require('../../models/Author')

// eslint-disable-next-line no-unused-vars
const addUser = async (obj, { input }, context) => {
  try {
    const user = await User.query().insert(input).returning('*')
    return user
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to insert user')
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addUser,
  },
}

module.exports = resolver
