import { useCallback } from 'react'

import styles from './filter.module.css'

export const Filter = ({ onFilter }) => {
  const handleChange = useCallback((event) => onFilter(event.target.value), [])

  return (
    <select className={styles.select} onChange={handleChange}>
      <option value="" selected>
        All Regions
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
