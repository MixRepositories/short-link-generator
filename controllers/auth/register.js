const User = require('../../models/User')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration data'
      })
    }

    const { email, password } = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'This user already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'Logged in' })

  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong, try repeating your request' })
  }
}

module.exports = register
