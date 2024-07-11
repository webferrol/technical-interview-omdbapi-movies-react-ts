import { useState } from 'react'
import Movies from './components/Movies'
import './App.css'
import query from '../mocks/matrix-movie-search.json'
// import query from '../mocks/movie-not-found.json'
import NoTargetMovie from './components/NoTargetMovie'
import SearchComponent from './components/SearchComponent'
// import query from '../mocks/invalid-id.json'
// import query from '../mocks/invalid-apikey.json'

export interface IMovies {
  title: string;
  year: string;
  id: string;
  type: string;
  img: string;
}

export interface SearchEntity {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Query {
  Search?: (SearchEntity)[] | null;
  totalResults?: string;
  Response: string;
  Error?: string;
}

const { Response, Search, Error, totalResults }: Query = query

const endPointMovies: IMovies[] | null | undefined = Search?.map(movie => ({
  id: movie.imdbID,
  year: movie.Year,
  title: movie.Title,
  img: movie.Poster,
  type: movie.Type
}))

console.log(totalResults)
console.log(endPointMovies)
// import.meta.env.VITE_API_KEY
const isSuccess = Response === 'True'

function App () {
  const [movies, setMovies] = useState<IMovies[] | null>(null)

  const handleSearch = (value: string) => {
    setMovies(null)
    if (!value.trim().length) return
    const searchValue = endPointMovies?.filter((movie) => (movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    if (searchValue?.length) setMovies(searchValue)
  }

  if (!isSuccess) {
    return (
      <NoTargetMovie message={Error} />
    )
  }
  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      <Movies movies={movies}/>
    </>
  )
}

export default App
