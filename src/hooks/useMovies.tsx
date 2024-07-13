import { useEffect, useRef, useState } from 'react'
import { getListMovies } from '../helpers/getListMovies'
import { IMovies } from '../types'
import { moviesMapper } from '../helpers/movies-mapper'

function useMovies () {
  const [inputValue, setInputValue] = useState('')
  const [isSuccess, setIsSuccess] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSorted, setIsSorted] = useState(false)
  const [movies, setMovies] = useState<IMovies[] | null>(null)
  const [error, setError] = useState('')
  const isEmptyInput = useRef(true)

  const sortMovies: IMovies[] | null | undefined = (isSorted && movies?.length)
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  useEffect(() => {
    const inputTimeOut = window.setTimeout(async () => {
      await getSearch(inputValue)
    }, 500)
    return () => clearTimeout(inputTimeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  const getSearch = async (searchValue: string) => {
    if (isEmptyInput.current) {
      isEmptyInput.current = Boolean(inputValue.trim().length)
      return
    }

    try {
      setIsLoading(true)
      setMovies(null)
      setIsSuccess(false)
      const res = await getListMovies(searchValue.trim())

      if (searchValue === '') throw new Error('Movie not found')
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
    isLoading,
    isSuccess,
    changeIsSuccess: setIsSuccess,
    movieError: error,
    movies: sortMovies,
    setInputValue,
    setIsSorted
  }
}

export default useMovies
