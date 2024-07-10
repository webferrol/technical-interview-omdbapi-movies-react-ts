import './App.css'
// import query from '../mocks/matrix-movie-search.json'
import query from '../mocks/movie-not-found.json'
// import query from '../mocks/invalid-id.json'
// import query from '../mocks/invalid-apikey.json'

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

const { Response, totalResults, Search, Error }: Query = query
// import.meta.env.VITE_API_KEY
const isSuccess = Response === 'True'
function App () {
  if (!isSuccess) {
    return (
      <>
        { Error}
      </>
    )
  }
  return (
    <>
     { Boolean(totalResults) && JSON.stringify(Search) }
    </>
  )
}

export default App
