import { MouseEvent } from 'react'
import Movies from './components/Movies'
import NoTargetMovie from './components/NoTargetMovie'
import SearchComponent from './components/SearchComponent'
import useMovies from './hooks/useMovies'

function App () {
  const {
    getSearch,
    isLoading,
    isSuccess,
    changeIsSuccess,
    movieError,
    movies,
    setMovies
  } = useMovies()

  const handleSearch = async (value: string) => {
    setMovies(null)
    if (!value.trim().length) return
    await getSearch(value.trim())
  }

  const handleBack = (event: MouseEvent) => {
    event.preventDefault()
    changeIsSuccess(true)
  }

  if (!isSuccess) {
    return (
      <>

      <NoTargetMovie message={movieError} />
      <a href="#" onClick={handleBack}>Volver</a>

      </>
    )
  }

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      <Movies movies={movies}/>
      {isLoading && 'Buscando...'}
    </>
  )
}

export default App
