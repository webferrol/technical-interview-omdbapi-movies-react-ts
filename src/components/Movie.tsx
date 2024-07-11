import { IMovies } from '../types'

function Movie ({ movieValue }: { movieValue: IMovies | undefined}) {
  const isImage = movieValue?.img !== 'N/A'
  const srcImage = isImage ? movieValue?.img : '/src/assets/image-not-found.jpg'
  return (
        <li>
            <figure>
              <img src={srcImage} alt={movieValue?.title} title={movieValue?.year} width="300" />
              <figcaption>{movieValue?.title} | {movieValue?.type}</figcaption>
            </figure>
        </li>
  )
}

export default Movie
