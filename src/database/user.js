import db from './index'

export const createUser = (user) => {
  return db.put({
    _id: user.email,
    ...user
  })
}

export const verifyIfUserExists = (email) => {
  return db.get(email)
    .then(() => true)
    .catch(() => false)
}
