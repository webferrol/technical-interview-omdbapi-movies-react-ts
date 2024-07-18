import {
  ChangeEvent,
  Suspense,
  useEffect,
  useRef,
  useState,
  version
} from 'react'
import SearchEngineOptimization from './components/Seo'
import { getListMovies } from './helpers/getListMovies'
import Loader from './components/Loader'
import { ShowMovies } from './components/ShowMovies'

export function OmdbApp () {
  const [query, setQuery] = useState('')
  const firstTime = useRef(true)

  useEffect(() => {
    firstTime.current = false
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    setQuery(currentTarget.value)
  }

  return (
        <>
            <SearchEngineOptimization title={version}/>

            <search role="search" style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <label htmlFor="query">Título</label>
                <input id="query" onChange={handleChange} type="search" name="query" placeholder='e.g Matrix' />
            </search>
            {
              !firstTime.current && (
                <Suspense fallback={<Loader style={{ width: '2rem' }} />}>
                  <ShowMovies moviesQuery={getListMovies(query)} />
                </Suspense>
              )
            }

        </>
  )
}
