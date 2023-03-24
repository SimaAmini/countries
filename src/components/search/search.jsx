import styles from './search.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  return (
    <div className={styles.inputContainer}>
      <Icon icon={faSearch} color="gray" />
      <input
        className={styles.input}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  )
}
