const Link = require('../../models/Link')

const getLinkById = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try repeating your request' })
  }
}

module.exports = getLinkById
