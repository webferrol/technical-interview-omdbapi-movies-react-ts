import { Query } from '../constants'

const API_KEY = import.meta.env.VITE_API_KEY

export const getListMovies = async (searchValue: string = 'croods') => {
  const res = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
  if (!res.ok) {
    throw new Error(`Not found: ${res.status} ${res.statusText}`)
  }
  const data: Query = await res.json()
  return data
}
