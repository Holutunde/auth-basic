const jwt = require('jsonwebtoken')
require('dotenv').config()
const CustomAPIError = require('../../errors/customError')

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }

  const id = new Date().getDate()

  console.log(username)
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '20h',
  })

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const random = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Verification data, your number is ${random}`,
  })
}
module.exports = {
  login,
  dashboard,
}
