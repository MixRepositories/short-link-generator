const Link = require('../../models/Link')
const config = require('config')
const shortid = require('shortid')

const generate = async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const { from } = req.body
    const code = shortid.generate()
    const existing = await Link.findOne({ from })
    if (existing) return res.json({ link: existing })
    const to = baseUrl + '/t/' + code
    const link = new Link({ from, to, code, owner: req.user.userId })
    await link.save()
    res.status(201).json({ link })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try repeating your request' })
  }
}

module.exports = generate

