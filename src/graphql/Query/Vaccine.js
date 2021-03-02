const User = require('../../models/User')

const allUsers = async () => {
  try {
    const users = await User.query()
    return users
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to get users')
  }
}
const resolver = {
  Query: { allUsers },
}

module.exports = resolver
