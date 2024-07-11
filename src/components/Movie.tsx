import { IMovies } from '../App'

function Movie ({ movieValue }: { movieValue: IMovies | undefined}) {
  return (
        <li>
            {JSON.stringify(movieValue)}
        </li>
  )
}

export default Movie
