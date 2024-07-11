import { IMovies, SearchEntity } from '../types'

export function moviesMapper (movies: SearchEntity[]): IMovies[] {
  return movies?.map(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    img: movie.Poster,
    type: movie.Type
  }))
}
