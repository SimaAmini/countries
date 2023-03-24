import styles from './button.module.css'

export const Button = ({ children, className, withShadow, ...rest }) => {
  return (
    <button
      className={`${styles.button} ${className} ${withShadow && styles.shadow}`}
      {...rest}
    >
      {children}
    </button>
  )
}
