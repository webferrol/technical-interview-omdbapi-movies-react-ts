import { ChangeEvent, FormEvent } from 'react'

type Props = {
  onSearch : (value: string) => void,
  onSort: (event: ChangeEvent<HTMLInputElement>) => void
}

function SearchComponent ({ onSearch, onSort } : Props) {
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
  }

  const handleInput = (e:FormEvent<HTMLInputElement>) => {
    const { currentTarget } = e
    onSearch(currentTarget.value)
  }

  return (
        <search role="search">
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             Título
            <input type="search" name="q" autoComplete="off" onInput={handleInput} />
          </label>
          <label>Ordenar<input type="checkbox" name="sort" onChange={onSort} /></label>
        </form>
      </search>
  )
}

export default SearchComponent
