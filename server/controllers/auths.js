const login = async (req, res) => {
    const { username } = req.body
    res.status(200).json({ msg: 'user created', username })
  }
  
  const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
  
    res.status(200).json({
      msg: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
  }
  
  module.exports = {
    login,
    dashboard,
  }