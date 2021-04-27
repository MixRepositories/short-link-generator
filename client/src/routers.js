import { Switch, Route, Redirect } from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'


export const useRouters = isAuthenticated => {
  return (
    <>
      {isAuthenticated
        ? (
          <Switch>
            <Route path='/links' exact>
              <LinksPage />
            </Route>
            <Route path='/create' exact>
              <CreatePage />
            </Route>
            <Route path='/detail/:id' exact>
              <DetailPage />
            </Route>
            <Redirect to='/create' />
          </Switch>
        )
        : (
          <Switch>
            <Route path='/' exact>
              <AuthPage />
            </Route>
            <Redirect to='/' />
          </Switch>
        )
      }
    </>
  )

}
