import { ChangeEvent } from 'react'
import Movies from './components/Movies'
import NoTargetMovie from './components/NoTargetMovie'
import SearchComponent from './components/SearchComponent'
import useMovies from './hooks/useMovies'
import Seo from './components/Seo'

function App () {
  const {
    clear,
    inputValue,
    isPending,
    isSuccess,
    movieError,
    movies,
    setInputValue,
    setIsSorted
  } = useMovies()

  const handleSearch = (value: string) => {
    setInputValue(value.trim())
  }

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget
    setIsSorted(checked)
  }

  return (
    <>
      <Seo title={inputValue} />
      <main>
        <h1>Movies</h1>
        <SearchComponent onSearch={handleSearch} onSort={handleSort} onReset={clear} />
        <Movies movies={movies} />
        {isPending && 'Buscando...'}
        {!isSuccess && <NoTargetMovie message={movieError} />}
      </main>
    </>
  )
}

export default App
