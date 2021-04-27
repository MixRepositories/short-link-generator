const Link = require('../../models/Link')

const getLinks = async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId })
    res.status(201).json(links)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try repeating your request' })
  }
}

module.exports = getLinks
