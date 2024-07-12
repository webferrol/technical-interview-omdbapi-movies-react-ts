import { IMovies } from '../types'
import Movie from './Movie'

function Movies ({ movies }: { movies: IMovies[] | null }) {
  return (
    <ul className="movies">
      {
        movies?.map((movie: IMovies) => {
          const { id } = movie
          return (<Movie key={id} movieValue={movie} />)
        })
      }
    </ul>
  )
}

export default Movies
