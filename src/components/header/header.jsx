import { Button } from '@components/button'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <Button>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </Button>
    </header>
  )
}
