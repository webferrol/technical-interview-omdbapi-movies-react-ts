import { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import { getListMovies } from '../helpers/getListMovies'
import { IMovies } from '../types'
import { moviesMapper } from '../helpers/movies-mapper'

function useMovies () {
  const [inputValue, setInputValue] = useState('')
  const [isSuccess, setIsSuccess] = useState(true)
  const [isSorted, setIsSorted] = useState(false)
  const [movies, setMovies] = useState<IMovies[] | null>(null)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()
  const isEmptyInput = useRef(true)

  const clear = () => {
    setError('')
    setInputValue('')
    setIsSorted(false)
    setIsSuccess(true)
    setMovies(null)
    isEmptyInput.current = true
  }

  const sortMovies: IMovies[] | null | undefined = useMemo(
    () => {
      return (isSorted && inputValue.length && movies?.length)
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [movies, isSorted]
  )

  const searchMovies = async (): Promise<void> => {
    if (isEmptyInput.current) {
      isEmptyInput.current = Boolean(inputValue.trim().length)
      return
    }

    try {
      setMovies(null)
      setIsSuccess(true)
      if (inputValue === '') throw new Error('Movie not found')
      const res = await getListMovies(inputValue.trim())

      if (res.Response === 'False') throw new Error(res.Error)
      if (!res.Search?.length) throw new Error(`Not found ${inputValue}`)

      setIsSuccess(res.Response === 'True')

      const searchedMovies = moviesMapper(res.Search)
      setMovies(searchedMovies)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
        setIsSuccess(false)
      }
    }
  }

  useEffect(() => {
    const inputTimeOut = window.setTimeout(async () => {
      startTransition(
        () => {
          searchMovies()
        }
      )
    }, 800)
    return () => clearTimeout(inputTimeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return {
    clear,
    inputValue,
    isPending,
    isSuccess,
    changeIsSuccess: setIsSuccess,
    movieError: error,
    movies: sortMovies,
    setInputValue,
    setIsSorted
  }
}

export default useMovies
