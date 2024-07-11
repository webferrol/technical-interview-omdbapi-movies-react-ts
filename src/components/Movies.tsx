import { IMovies } from '../constants'
import Movie from './Movie'

function Movies ({ movies }: { movies: IMovies[] | null}) {
  return (
        <section>
            <h2>Movies</h2>
            <ul className="movies">
            {
              movies?.map((movie: IMovies) => {
                const { id } = movie
                return (<Movie key={id} movieValue={movie}/>)
              })
            }
            </ul>
        </section>
  )
}

export default Movies
