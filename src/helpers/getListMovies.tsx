import { API_URL } from '../constants'
import { Query } from '../types'

export const getListMovies = async (searchValue: string = 'croods') => {
  const res = await fetch(`${API_URL}?s=${searchValue}&apikey=${import.meta.env.VITE_API_KEY}`)
  if (!res.ok) {
    return {
      Search: null,
      Response: 'False',
      Error: `Not found (Apikey?): ${res.status} ${res.statusText}`
    }
  }
  const data: Query = await res.json()
  return data
}
