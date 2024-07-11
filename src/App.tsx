import Movies from './components/Movies'
import NoTargetMovie from './components/NoTargetMovie'
import SearchComponent from './components/SearchComponent'
import useMovies from './hooks/useMovies'
import './App.css'

// import query from '../mocks/matrix-movie-search.json'
// import query from '../mocks/movie-not-found.json'
// import query from '../mocks/invalid-id.json'
// import query from '../mocks/invalid-apikey.json'

function App () {
  const {
    getSearch,
    isLoading,
    isSuccess,
    movieError,
    movies,
    setMovies
  } = useMovies()

  const handleSearch = async (value: string) => {
    setMovies(null)
    if (!value.trim().length) return
    await getSearch(value.trim())
  }

  if (!isSuccess) {
    return (
      <>
      <SearchComponent loading={isLoading} onSearch={handleSearch} />
      <NoTargetMovie message={movieError} />
      {isLoading && 'Buscando...'}
      </>
    )
  }
  return (
    <>
      <SearchComponent loading={isLoading} onSearch={handleSearch} />
      <Movies movies={movies}/>
      {isLoading && 'Buscando...'}
    </>
  )
}

export default App
