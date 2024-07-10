import { useState } from 'react'
import Movies from './components/Movies'
import './App.css'
// import query from '../mocks/matrix-movie-search.json'
// import query from '../mocks/movie-not-found.json'
import query from '../mocks/invalid-id.json'
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

const movies: IMovies[] | undefined = Search?.map(movie => ({
  id: movie.imdbID,
  year: movie.Year,
  title: movie.Title,
  img: movie.Poster,
  type: movie.Type
}))
// import.meta.env.VITE_API_KEY
const isSuccess = Response === 'True'
function App () {
  const [searchedMovies] = useState<IMovies[] | undefined>(movies)
  if (!isSuccess) {
    return (
      <>
        { JSON.stringify(Search) }
        { Error}
      </>
    )
  }
  return (
    <>
     <Movies movies={searchedMovies}/>
     {totalResults}
    </>
  )
}

export default App
