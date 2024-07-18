import { IMovies, SearchEntity } from '../types'

export function moviesMapper (movies: SearchEntity[] | null | undefined): IMovies[] | null | undefined {
  return movies?.map(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    img: movie.Poster,
    type: movie.Type
  }))
}
