import { FormEvent, useState } from 'react'

function SearchComponent ({ loading, onSearch } : { loading: boolean, onSearch : (value: string) => void}) {
  const [search, setSearch] = useState('')
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    onSearch(search)
  }

  const handleInput = (e:FormEvent<HTMLInputElement>) => {
    const { currentTarget } = e
    setSearch(currentTarget.value)
  }

  return (
        <search role="search">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="search" name="q" autoComplete="off" onInput={handleInput} />
          </label>
          <input type="submit" value="Buscar" disabled={loading} />
        </form>
      </search>
  )
}

export default SearchComponent
