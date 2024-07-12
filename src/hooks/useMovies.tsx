import { useEffect, useRef, useState } from 'react'
import { getListMovies } from '../helpers/getListMovies'
import { IMovies } from '../types'
import { moviesMapper } from '../helpers/movies-mapper'

function useMovies () {
  const [inputValue, setInputValue] = useState('')
  const [isSuccess, setIsSuccess] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<IMovies[] | null>(null)
  const [error, setError] = useState('')
  const isEmptyInput = useRef(true)

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
    isLoading,
    isSuccess,
    changeIsSuccess: setIsSuccess,
    movieError: error,
    movies,
    setInputValue,
    setMovies
  }
}

export default useMovies
