import 'materialize-css'
import { useRouters } from './routers'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

function App () {
  const { userId, token, logout, login, ready } = useAuth()

  const isAuthenticated = !!token

  const routers = useRouters(isAuthenticated)

  if (!ready) return <Loader />

  return (
    <AuthContext.Provider value={{
      userId, token, logout, login, isAuthenticated
    }} >
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div className='container'>
          {routers}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
