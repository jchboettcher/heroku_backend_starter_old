const User = require('../../models/User')

const userByName = async (obj, { displayName }, context) => {
  try {
    const user = await User.query().findOne('displayName', displayName)
    return user
  } catch (error) {
    return null
  }
}

const resolver = {
  Query: {
    userByName,
  },
}

module.exports = resolver
