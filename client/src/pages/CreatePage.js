import { useState, useContext } from 'react'
import { useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'

export default function CreatePage () {
  const message = useMessage()
  const auth = useContext(AuthContext)
  const history = useHistory()
  const { request, clearError, error } = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const pressHandler = async e => {
    if (e.key === 'Enter') {
      try {
        const data = await request('/api/link/generate/', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)

      } catch (e) {}
    }
  }

  return (
    <div className='row'>
      <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
        <input
          placeholder='Past or write link'
          id='link'
          name='link'
          type='text'
          onChange={(e) => setLink(e.target.value)}
          value={link}
          onKeyPress={pressHandler}
        />
        <label htmlFor='link'>Past link</label>
      </div>
    </div>
  )
}
