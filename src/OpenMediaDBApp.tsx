import { ChangeEvent, Suspense, use, useState, version } from 'react'
import SearchEngineOptimization from './components/Seo'
import { getListMovies } from './helpers/getListMovies'
import { PropsQuery, Query, SearchEntity } from './types'

import imgNotFound from './assets/image-not-found.jpg'
import { NOT_AVAILABLE } from './constants'
import NoTargetMovie from './components/NoTargetMovie'

export function OmdbApp () {
  const [query, setQuery] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    setQuery(currentTarget.value)
  }

  return (
        <>
            <SearchEngineOptimization title={query}/>

            <search role="search">
                <input onChange={handleChange} type="search" name="query" placeholder='e.g Matrix' />
            </search>

            <Suspense fallback="Loading...">
                <ShowMovies moviesQuery={getListMovies(query)}/>
            </Suspense>
            { version }
        </>
  )
}

function ShowMovies ({ moviesQuery }: PropsQuery) {
  const query: Query = use(moviesQuery)

  const { Response, Search, Error } = query
  const isResponse = Response === 'True'
  return (
        <section className="movies">
            {
                isResponse
                  ? Search?.map(
                    (movie) => (
                        <Movie { ...movie } key={movie.imdbID}/>
                    )
                  )
                  : <NoTargetMovie message={Error} />
            }
        </section>
  )
}

function Movie ({ Title, Poster }: SearchEntity) {
  const img = Poster === NOT_AVAILABLE ? imgNotFound : Poster
  return (
        <figure>
            <img src={img} alt={Poster} />
            <figcaption>
                {Title}
            </figcaption>
        </figure>
  )
}
