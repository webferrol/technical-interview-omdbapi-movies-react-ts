import { ChangeEvent, FormEvent } from 'react'

type Props = {
  onReset: () => void,
  onSearch : (value: string) => void,
  onSort: (event: ChangeEvent<HTMLInputElement>) => void
}

function SearchComponent ({ onReset, onSearch, onSort } : Props) {
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
          <input type="reset" onClick={() => onReset()} value="Reiniciar" />
        </form>
      </search>
  )
}

export default SearchComponent
