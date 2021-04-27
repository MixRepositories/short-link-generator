import { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export default function AuthPage () {
  const message = useMessage()
  let auth = useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({
    email: 'test2@test.re', password: '1234567'
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>Shorten link</h1>
        <div className='card blue darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Auth</span>
            <div>
              <div className='input-field'>
                <input
                  placeholder='Enter your Email'
                  id='email'
                  name='email'
                  type='text'
                  className='yellow-input'
                  onChange={changeHandler}
                  value={form.email}
                />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='input-field'>
                <input
                  placeholder='Enter your Password'
                  id='password'
                  name='password'
                  type='password'
                  className='yellow-input'
                  onChange={changeHandler}
                  value={form.password}
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button
              className='btn yellow darken-4'
              style={{ marginRight: 10 }}
              disabled={loading}
              onClick={loginHandler}
            >
              Sign in
            </button>
            <button
              className='btn grey lighten-1 black-text'
              disabled={loading}
              onClick={registerHandler}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
