import { useCallback, useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { useDebounce } from '@hooks/use-debounce'

import styles from './search.module.css'

export const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  useDebounce(() => onSearch(search), [search], 800)

  const handleChange = useCallback((e) => setSearch(e.target.value), [])

  return (
    <div className={styles.inputContainer}>
      <Icon icon={faSearch} color="gray" />
      <input
        name="search"
        className={styles.input}
        type="text"
        placeholder="Search for a country..."
        value={search || ''}
        onChange={handleChange}
      />
    </div>
  )
}
