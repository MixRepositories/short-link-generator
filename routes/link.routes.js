const { Router } = require('express')
const generate = require('../controllers/link/generate')
const getLinkById = require('../controllers/link/getLinkById')
const getLinks = require('../controllers/link/getLinks')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post(
  '/generate',
  auth,
  generate
)

router.get(
  '/',
  auth,
  getLinks
)

router.get(
  '/:id',
  auth,
  getLinkById
)

module.exports = router
