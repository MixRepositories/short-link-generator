import { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const logoutHandler = event => {
    console.log('logoutHandler')
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
    <nav>
      <div className="nav-wrapper" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Shorting Links</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to='/create'>Create</NavLink></li>
          <li><NavLink to='/links'>Links</NavLink></li>
          <li><a href='/' onClick={logoutHandler}>Loq out</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
