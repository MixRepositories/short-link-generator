const { Router } = require('express')
const { check } = require('express-validator')
const register = require('../controllers/auth/register')
const login = require('../controllers/auth/login')
const router = Router()

router.post(
  '/register',
  [
    check('email', 'Не корректный email').normalizeEmail().isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 })
  ],
  register
)

router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  login
)

module.exports = router
