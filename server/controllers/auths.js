const jwt = require('jsonwebtoken')
const BadRequest = require('../../errors/bad-request')

const login = async (req, res) => {
  const { username, password } = req.body
  console.log(username)
  if (!username || !password) {
    throw new BadRequest('Please provide email and password')
  }

  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '20h',
  })

  res.status(200).json({ message: `user with ${username} created`, token })
}

const dashboard = async (req, res) => {
  const random = Math.floor(Math.random() * 100)

  res.status(200).json({
    message: `Welcome, ${req.user.username}`,
    secret: `Verification data, your number is ${random}`,
  })
}
module.exports = {
  login,
  dashboard,
}
