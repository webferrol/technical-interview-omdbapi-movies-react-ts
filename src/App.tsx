import Movies from './components/Movies'
import NoTargetMovie from './components/NoTargetMovie'
import SearchComponent from './components/SearchComponent'
import useMovies from './hooks/useMovies'

function App () {
  const {
    isLoading,
    isSuccess,
    movieError,
    movies,
    setInputValue,
    setMovies
  } = useMovies()

  const handleSearch = (value: string) => {
    setMovies(null)
    if (!value.trim().length) return
    setInputValue(value.trim())
  }

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      <Movies movies={movies}/>
      {isLoading && 'Buscando...'}
      {!isSuccess && <NoTargetMovie message={movieError} />}
    </>
  )
}

export default App
