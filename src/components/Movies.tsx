import { IMovies } from '../App'

function Movies ({ movies }: { movies: IMovies[] | undefined}) {
  return (
        <section>
            <h2>Movies</h2>
            {JSON.stringify(movies)}
        </section>
  )
}

export default Movies
