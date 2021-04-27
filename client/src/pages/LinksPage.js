import { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import LinksList from '../components/LinksList'
import Loader from '../components/Loader'

export default function LinksPage (props) {
  const [links, setLinks] = useState([])
  const { request, loading } = useHttp()
  const { token } = useContext(AuthContext)

  const fetching = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      console.log('fetched', fetched)
      setLinks(fetched)
    } catch (e) {
      console.log(e)
    }
  }, [token, request])

  useEffect(() => {
    fetching()
  }, [fetching])

  if (loading) return <Loader />

  return (
    <>
      {!loading && <LinksList links={links} />}
    </>
  )
}

LinksPage.propTypes = {}
