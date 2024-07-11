import { IMovies } from '../constants'

function Movie ({ movieValue }: { movieValue: IMovies | undefined}) {
  const isImage = movieValue?.img !== 'N/A'
  if (!isImage) return
  return (
        <li>
           <img src={movieValue?.img} alt={movieValue?.title} width="300" />
        </li>
  )
}

export default Movie
