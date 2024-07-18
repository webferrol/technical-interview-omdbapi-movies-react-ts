import { use } from 'react'
import NoTargetMovie from './NoTargetMovie'
import { moviesMapper } from '../helpers/movies-mapper'
import { IMovies, Query } from '../types'
import { NOT_AVAILABLE } from '../constants'
import imgNotFound from '../assets/image-not-found.jpg'

export function ShowMovies ({ moviesQuery } : { moviesQuery: Promise<Query> }) {
  const query: Query = use(moviesQuery)

  const { Response, Search, Error } = query
  const isResponse = Response === 'True'
  const movies = moviesMapper(Search)
  return (
        <section className="movies">
            {
                isResponse
                  ? movies?.map(
                    (movie) => (
                        <Movie { ...movie } key={movie.id}/>
                    )
                  )
                  : <NoTargetMovie message={Error} />
            }
        </section>
  )
}

function Movie ({ title, img }: IMovies) {
  const image = img === NOT_AVAILABLE ? imgNotFound : img
  return (
        <figure>
            <img src={image} alt={title} />
            <figcaption>
                {title}
            </figcaption>
        </figure>
  )
}
