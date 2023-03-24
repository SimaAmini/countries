import styles from './button.module.css'

export const Button = ({ children, ...rest }) => {
  return <button className={styles.button}>{children}</button>
}
