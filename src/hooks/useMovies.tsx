import { useState } from 'react'
import { getListMovies } from '../helpers/getListMovies'
import { IMovies } from '../types'
import { moviesMapper } from '../helpers/movies-mapper'

function useMovies () {
  const [isSuccess, setIsSuccess] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<IMovies[] | null>(null)
  const [error, setError] = useState('')

  const getSearch = async (searchValue: string) => {
    try {
      setIsLoading(true)
      const res = await getListMovies(searchValue.trim())

      if (res.Response === 'False') throw new Error(res.Error)
      if (!res.Search?.length) throw new Error(`Not found ${searchValue}`)

      setIsSuccess(res.Response === 'True')

      const searchedMovies = moviesMapper(res.Search)
      setMovies(searchedMovies)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
        setIsSuccess(false)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getSearch,
    isLoading,
    isSuccess,
    changeIsSuccess: setIsSuccess,
    movieError: error,
    movies,
    setMovies
  }
}

export default useMovies
